import Banner from '../../components/Banner';
import Navbar from '../../components/Navbar';
import Rodape from '../../components/Rodape';
import estilos from './Rent.module.scss'

function App () {
    return (
        <>
            <Navbar/>
            <Banner/>
            <section className={estilos.Container}>
                <h2>Perguntas Mais Frequentes</h2>
                <div>
                    <h5>Existe um pedido mínimo?</h5>
                    <p>Não. Você pode alugar a quantidade que desejar de pratos, taças, rechaud e todos os utensílios para sua festa.</p>
                </div>
                <div>
                    <h5>Como faço um pedido?</h5>
                    <p>Para alugar é muito simples. O cliente deverá fazer conosco um simples cadastro de seus documentos pessoais para análise:</p>
                    <div className={estilos.Container_Conteudo}>
                        <h6>Pessoa Física</h6>
                        <p> RG, CPF, Cel, Tel fixo e comprovante de residência atualizado e em seu nome.
                        Pessoa Jurídica:</p>
                        <h6>Pessoa Jurídica</h6>
                        <p>Razão Social, CNPJ ativo, Tel fixo e comprovante de endereço atualizado no nome da empresa.</p>
                    </div>
                </div>
                <div>
                    <h5>Qual o tempo de locação?</h5>
                    <p>O tempo de locação é de 24h. Caso seu evento seja no fim de semana 
                    (Sábado ou Domingo) o material alugado deverá ser devolvido no primeiro dia útil sem nenhuma multa para o cliente.</p>
                </div>
                <div>
                    <h5>Quando preciso fazer uma reserva?</h5>
                    <p>Sua reserva deverá ser feita com no máximo 48h antes da data de entrega ou retirada em nossa sede sujeita a disponibilidade do material.</p>
                </div>
                <div>
                    <h5>Quais são as políticas de pagamento?</h5>
                    <p>O pagamento deverá ser efetuado a vista no ato da assinatura do contrato de locação junto a entrega do material. 
                    Não parcelamos o pagamento. Caso o cliente opte pelo serviço de entrega, 
                    será cobrado o valor total do pedido mais o valor de frete que é taxado de acordo com o bairro de entrega. Consulte-nos!</p>
                    <p><strong>As formas de pagamento são:</strong></p>
                    <ul>
                        <li><img src="https://static.wixstatic.com/media/960961_05655f17e0694440999a8e44aec1f9f6~mv2.jpg/v1/fill/w_149,h_40,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/960961_05655f17e0694440999a8e44aec1f9f6~mv2.jpg" alt="Bandeira Mastercard e Visa" /></li>
                        <li><img src="https://static.wixstatic.com/media/960961_107a369be5de4a0892d11869c4a520fe~mv2.jpg/v1/fill/w_40,h_40,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5aNaRJtl_400x400.jpg" alt="Bandeira Nubank" /></li>
                        <li><img src="https://static.wixstatic.com/media/960961_ac42599ee91a4a0982dc3bda5608ef54~mv2.png/v1/fill/w_100,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/pix-logo-png-Transparente.png" alt="Bandeira do Pix" /></li>
                    </ul>
                </div>
                <div>
                    <h5>Caso existam perdas ou avarias no material alugado, como proceder?</h5>
                    <p>Caso existam perdas ou danos ao material locado, 
                        o cliente se responsabilizará pelo ressarcimento total que deverá ser quitado no ato da devolução do mesmo integralmente pelo valor de mercado atual que será informado no ato da conferência de todo o material conforme contrato assinado pelo cliente. 
                        Não aceitamos reparações total ou parcial. </p>
                </div>
            </section>
            <Rodape/>
        </>
    )
}

export default App