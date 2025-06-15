import { Link } from 'react-router' // Corrigido o import de 'react-router'
import { useCarrinhoContext } from '../../hooks/useCarrinhoContext'
import CartItem from '../CartItem'
import estilos from './Carrinho.module.scss'

interface CarrinhoProps {
    carrinhoAberto: boolean; // Booleano para indicar se o carrinho está aberto ou fechado
    toggleCarrinho: () => void; // Função sem retorno para alternar o estado do carrinho
}

const Carrinho = ({ carrinhoAberto, toggleCarrinho }: CarrinhoProps) => {
    const { carrinho } = useCarrinhoContext()

    return (
        <section className={`${estilos.Cart} ${carrinhoAberto ? estilos.carrinhoAberto : ""}`}>
            <div className={estilos.Header}>
                <button onClick={toggleCarrinho} className={estilos.Fechar}>X</button>
                <h2>Meu Carrinho</h2>
            </div>
            
            {carrinho.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <>
                    <div className={estilos.CartItems}>
                        {carrinho.map((produto) => (
                            <CartItem key={produto.id} produto={produto} variant='sidebar' />
                        ))}
                    </div>
                    <Link className={estilos.Carrinho} to='/cart'>Ir para Carrinho</Link>
                </>
            )}
        </section>
    )
}

export default Carrinho
