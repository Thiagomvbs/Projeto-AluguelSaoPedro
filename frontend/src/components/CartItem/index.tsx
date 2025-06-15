import { useCarrinhoContext } from '../../hooks/useCarrinhoContext';
import estilos from './CartItem.module.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

interface CartItemProps{
    produto: any;
    variant?: 'sidebar' | 'cartPage';
}

const CartItem = ({produto, variant='sidebar'}: CartItemProps) => {

    const {removerProduto, adicionarCarrinho,atualizarQuantidade} = useCarrinhoContext();

    const handleRemoverProduto = () => {
        removerProduto(produto.id)
    }

    const handleDecrementar = () => {
        removerProduto(produto.id)
    }

    const handleIncrementar = () => {
        adicionarCarrinho(produto)
    }

    const handleQuantidadeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let novaQuantidade = parseInt(e.target.value);
        if(isNaN(novaQuantidade) || novaQuantidade < 1){
            novaQuantidade = 1
        }
        atualizarQuantidade(produto.id, novaQuantidade);
    }

    return(
        <section key={produto.id} className={`${estilos.Produto} ${estilos[variant]}`}>
                <img 
                    src={produto.imagem} 
                    alt={produto.nome} 
                    className={estilos.ProdutoImagem}
                />
            <div className={estilos.ProdutoInfo}>
                <h3>{produto.nome}</h3>
                <p className={estilos.Quantidade}>Quantidade: {produto.quantidade}</p>
                
            </div>
            <button type='button' onClick={handleRemoverProduto} className={estilos.ButtonRemove}><DeleteIcon/></button>
            {variant === 'cartPage' && (
                <div className={estilos.QuantidadeContainer}>
                    <button onClick={handleDecrementar} className={estilos.ButtonQuantidade}>
                        <RemoveIcon/>
                    </button>
                    <input
                        type="number"
                        min="1"
                        value={produto.quantidade}
                        onChange={handleQuantidadeChange}
                        className={estilos.InputQuantidade}
                    />
                    <button onClick={handleIncrementar} className={estilos.ButtonQuantidade}>
                        <AddIcon/>
                    </button>

                </div>
            )}
        </section>

    )
}

export default CartItem
