import React, { createContext, useContext } from "react";
import { CartAction, CartState } from "./carrinhoTypes";


const STORAGE_KEY = "carrinho";

// Função para carregar o estado inicial do localStorage
export const loadState = (): CartState => {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      if (Array.isArray(parsedState.produtos)) {
        return parsedState;
      }
    }
    return { produtos: [] }; 
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Erro desconhecido');
    }
    return { produtos: [] }; 
  }
};

// Contexto
export const CarrinhoContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

// Hook personalizado para acessar o contexto
export const useCarrinhoContext = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinhoContext must be used within a CarrinhoProvider");
  }
  return context;
};
