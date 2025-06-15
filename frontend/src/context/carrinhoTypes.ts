// Definição do tipo Produto 
export interface ProdutoNoCarrinho {
    id: number;
    nome: string;
    descricao: string;
    imagem: string;
    quantidade: number;
    categoria: string;
  }

  // Tipo para o ID do produto
export interface CartState {
    produtos: ProdutoNoCarrinho[];
}
  
  // Definição das ações possíveis no reducer
  export type CartAction =
    | { type: "ADD_PRODUTO"; payload: ProdutoNoCarrinho }
    | { type: "REMOVE_PRODUTO"; payload: number }
    | { type: "UPDATE_PRODUTO"; payload: { id: number; quantidade: number } };
  