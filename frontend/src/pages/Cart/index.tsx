import { Link } from 'react-router';
import CartItem from '../../components/CartItem';
import Navbar from '../../components/Navbar'
import Rodape from '../../components/Rodape';
import { useCarrinhoContext } from '../../hooks/useCarrinhoContext'
import estilos from './Cart.module.scss'

function App(){

    const { carrinho } = useCarrinhoContext();

    return(
        <>
            <Navbar/>
            <main className={estilos.ContainerCart}>
                <section className={estilos.CartPage}>
                    <h2>Produtos no Carrinho</h2>
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

                </section>
                <button className={estilos.CartButton}>
                    <Link className={estilos.CartConfirm} to='/budget'>Confirmar</Link>
                </button>
                
            </main> 
            <Rodape/>
        </>
    )
}

export default App