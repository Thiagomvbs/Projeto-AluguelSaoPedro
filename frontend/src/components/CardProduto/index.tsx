import estilos from './CardProduto.module.scss'
import { Pagination } from "@mui/material";
import { useSearchParams } from "react-router";
import useProdutos from "../../hooks/useProdutos";
import { useCarrinhoContext } from '../../hooks/useCarrinhoContext';
import { IProduto } from '../../interfaces/IProdutos';

const CardProduto = ({pagina, busca, categoriaSelecionada}: {pagina: number, busca: string, categoriaSelecionada: string[]}) => {

    const [, setSearchParams] = useSearchParams(); // Mantemos apenas setSearchParams
    const {produtos, totalCount} = useProdutos(pagina, busca, categoriaSelecionada);
    const {adicionarCarrinho} = useCarrinhoContext();

    console.log("Categorias retornadas:", produtos.map(p => p.categoria));

    const produtosFiltrados = produtos.filter((produto) => {
        if (categoriaSelecionada.length === 0) return true;
        return categoriaSelecionada.includes(produto.categoria.toUpperCase());
    });

    const handlePageChange = (_event: React.ChangeEvent<unknown>, newPage: number) =>{
        if(busca){
            setSearchParams({busca}, {replace: true});
        } else {
            setSearchParams({pagina: newPage.toString() }, {replace: true});
        }
    };

    const handleAdicionarCarrinho = (produto: IProduto) => {
        adicionarCarrinho({ ...produto, quantidade: 1 });
    };

    return (
           <section className={estilos.ProdutoContainer}>
                {produtosFiltrados.map((produto) => (
                    <div key={produto.id} className={estilos.ProdutoCard}>
                    <div>
                        <img src={produto.imagem} alt={produto.nome} />
                    </div>
                    <div className={estilos.ProdutoInfo}>
                        <h3>{produto.nome}</h3>
                        <p>{produto.descricao}</p>
                    </div>
                    <div className={estilos.Button}>
                        <button onClick={() => handleAdicionarCarrinho(produto)}>
                        Adicionar no carrinho
                        </button>
                    </div>
                    </div>
                ))}
                 
                {(totalCount > 20)}
                <Pagination 
                    page={pagina}
                    count={Math.ceil(totalCount / 20)} 
                    onChange={handlePageChange}
                />
            </section>
    );
}

export default CardProduto;
