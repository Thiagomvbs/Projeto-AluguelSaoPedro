import os
import traceback
from django.http import JsonResponse
from rest_framework.decorators import api_view
import sendgrid
from sendgrid.helpers.mail import Mail, Email, To, Content
from emailASP.serializers import EmailSerializer
from dotenv import load_dotenv

load_dotenv()

@api_view(['POST'])
def enviar_email(request):
    print(request)
    if request.method != 'POST':
        return JsonResponse({'message': 'Método inválido, use POST.'}, status=405)
    
    
    serializer = EmailSerializer(data=request.data)
    
    if not serializer.is_valid():
        print(serializer.errors)
        return JsonResponse({'message': 'Dados inválidos ou incompletos.'}, status=400)
    
    
    email_cliente = serializer.validated_data.get('email')
    nome = serializer.validated_data.get('nome')
    endereco = serializer.validated_data.get('endereco')
    bairro = serializer.validated_data.get('bairro')
    telefone = serializer.validated_data.get('telefone')
    cpfCnpj = serializer.validated_data.get('cpfCnpj')
    enderecoEntrega = serializer.validated_data.get('enderecoEntrega')
    bairroEntrega = serializer.validated_data.get('bairroEntrega')
    dataEvento = serializer.validated_data.get('dataEvento')
    infoExtras = serializer.validated_data.get('infoExtras')
    produtos = serializer.validated_data.get('produtos', [])

    if not email_cliente:
        return JsonResponse({'message': 'E-mail do cliente não fornecido.'}, status=400)

    api_key = os.getenv('SENDGRID_API_KEY')
    if not api_key:
        return JsonResponse({'message': 'Erro interno: API Key do SendGrid não configurada.'}, status=500)

    # Construir o conteúdo do e-mail
    subject = "Novo Orçamento Recebido"
    content = f"""
    📝 *Novo orçamento recebido!*

    **Dados do Cliente:**
    - Nome: {nome}
    - Endereço: {endereco}, {bairro}
    - Telefone: {telefone}
    - CPF/CNPJ: {cpfCnpj}
    - E-mail: {email_cliente}

    **Endereço de Entrega:**
    - {enderecoEntrega}, {bairroEntrega}
    - Data do Evento: {dataEvento}

    **Informações Extras:**
    {infoExtras}

    **🛒 Produtos no Carrinho:**
    """

    for produto in produtos:
        content += f"\n🔹 {produto.get('nome')} - Quantidade: {produto.get('quantidade')}"

    try:
        sg = sendgrid.SendGridAPIClient(api_key=api_key)
        from_email = Email("thiagomonteirovbs@gmail.com")  # E-mail verificado no SendGrid
        to_email = To("thiagomvillas@gmail.com")  # E-mail que receberá a mensagem
        content = Content("text/plain", content)

        mail = Mail(
            from_email=from_email,
            to_emails=to_email,
            subject=subject,
            plain_text_content=content
        )

        mail.reply_to = Email(email_cliente)  
    
        response = sg.send(mail)

        if response.status_code == 202:
            return JsonResponse({'message': 'E-mail enviado com sucesso!'}, status=200)
        else:
            error_body = response.body.decode('utf-8')  
            return JsonResponse({'message': f'Falha ao enviar e-mail. Detalhes: {error_body}'}, status=400)
    
    except Exception as e:
        print("Erro inesperado:", traceback.format_exc())
        return JsonResponse({'message': f'Erro inesperado: {str(e)}'}, status=500)
