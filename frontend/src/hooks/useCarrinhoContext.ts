import { useContext} from 'react';
import { ProdutoNoCarrinho } from '../context/carrinhoTypes';
import { CarrinhoContext } from '../context/CarrinhoContext';

export const useCarrinhoContext = () => {
    const context = useContext(CarrinhoContext);

    if (!context) {
        throw new Error('useCarrinhoContext must be used within a CarrinhoProvider');
    }

    const { state, dispatch } = context;
    const { produtos } = state;
    
    const adicionarCarrinho = (produto: ProdutoNoCarrinho) => {
        dispatch({
            type: "ADD_PRODUTO",
            payload: produto,
        });
    };

    const removerProduto = (produtoId: number) => {
        dispatch({
            type:"REMOVE_PRODUTO",
            payload: produtoId,
        });
    };

    const atualizarQuantidade =(id: number, quantidade: number) => {
        dispatch({
            type:"UPDATE_PRODUTO",
            payload: {id, quantidade}
        })
    }

    const countProdutos = () => state.produtos.length

    return {
       carrinho: produtos, 
       adicionarCarrinho,
       countProdutos,
       state,
       removerProduto,
       atualizarQuantidade
    };
};
