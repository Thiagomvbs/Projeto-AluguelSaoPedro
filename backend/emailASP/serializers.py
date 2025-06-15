from rest_framework import serializers

from produto.serializers import ProdutoEmailSerializer

class EmailSerializer(serializers.Serializer):
    nome = serializers.CharField()
    endereco = serializers.CharField()
    bairro = serializers.CharField()
    telefone = serializers.CharField()
    cpfCnpj = serializers.CharField()
    email = serializers.EmailField()
    enderecoEntrega = serializers.CharField(required=False, allow_blank=True)  
    bairroEntrega = serializers.CharField()
    dataEvento = serializers.DateField()
    infoExtras = serializers.CharField(required=False, allow_blank=True)  
    produtos = serializers.ListField(child=ProdutoEmailSerializer())  

