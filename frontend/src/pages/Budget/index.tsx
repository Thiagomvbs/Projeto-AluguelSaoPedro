import estilos from './Budget.module.scss'
import CartItem from "../../components/CartItem";
import Navbar from "../../components/Navbar"
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";
import Rodape from '../../components/Rodape';
import Form from '../../components/Form';


function App(){

    const { carrinho } = useCarrinhoContext();

    return(
        <>
            <Navbar />
            <section className={estilos.OrcamentoPage}>
                <div className={estilos.OrcamentoText}>
                    <h2>Finalizar Orçamento</h2>
                    <p>Preencha o formulário abaixo com seus dados completos</p>
                    <p>Valores de frete serão cobrados a parte de acordo com o bairro de entrega. Consulte-nos !</p>
                    <p>Para contato direto por e-mail : aluguelsaopedro@gmail.com ou ligue: (21) 2578-9248  das 10:00 as 18:00h</p>
                </div>
                
                <div className={estilos.Container}>
                    <div className={estilos.ProdutosSelecionados}>
                        <h3>Produtos Selecionados</h3>
                        {carrinho.length === 0 ? (
                            <p>Seu carrinho está vazio.</p>
                        ) : (
                            <>
                                <div className={estilos.CartItems}>
                                    {carrinho.map((produto) => (
                                        <CartItem key={produto.id} produto={produto} variant='cartPage'/>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                    <Form/>
                </div>
            </section>
            <Rodape/>
        </>
    )
}

export default App