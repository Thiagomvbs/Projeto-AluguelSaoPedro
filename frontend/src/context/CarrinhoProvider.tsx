import React, { ReactNode, useReducer, useEffect } from "react";
import { CarrinhoContext, loadState } from './CarrinhoContext'; // Certifique-se de importar a função loadState corretamente
import { carrinhoReducer } from "./carrinhoReducer";

export const CarrinhoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(carrinhoReducer, loadState()); // Aqui estamos usando a função loadState()

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(state)); // Salvando o estado no localStorage
  }, [state]);

  return (
    <CarrinhoContext.Provider value={{ state, dispatch }}>
      {children}
    </CarrinhoContext.Provider>
  );
};
