import { CartAction, CartState } from "./carrinhoTypes";

export const ADD_PRODUTO = 'ADD_PRODUTO';
export const REMOVE_PRODUTO = 'REMOVE_PRODUTO';
export const UPDATE_PRODUTO = 'UPDATE_PRODUTO';


export function carrinhoReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_PRODUTO': {
      const produtoExiste = state.produtos.find(produto => produto.id === action.payload.id);
      if (produtoExiste) {
        return {
          ...state,
          produtos: state.produtos.map(produto =>
            produto.id === action.payload.id
              ? { ...produto, quantidade: produto.quantidade + 1 }
              : produto
          ),
        };
      }else{
        return {
          ...state,
          produtos: [...state.produtos, { ...action.payload, quantidade: 1 }],
        };
      }
      
    }
    case 'REMOVE_PRODUTO': {
      return {
        ...state,
        produtos: state.produtos
          .map(produto =>
            produto.id === action.payload
              ? { ...produto, quantidade: produto.quantidade - 1 }
              : produto
          )
          .filter(produto => produto.quantidade > 0), // Remove se a quantidade for 0
      };
    }
    
    case 'UPDATE_PRODUTO':
      return {
        ...state,
        produtos: state.produtos.map(produto =>
          produto.id === action.payload.id ? {...produto, quantidade: action.payload.quantidade} :
          produto
        ),
      };

    default:
      return state;
  }
}
