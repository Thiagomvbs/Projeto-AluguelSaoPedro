import { useState, useEffect } from "react";
import axios from "axios";
import { IPaginacao } from "../interfaces/IPaginacao";
import { IProduto } from "../interfaces/IProdutos";

const useProdutos = (
  pagina: number,
  busca: string,
  categoriasSelecionadas: string[]
) => {
  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams();

    if (busca) {
      params.append("search", busca);
    }

    if (categoriasSelecionadas.length > 0) {
      params.append("categorias", categoriasSelecionadas.join(","));
    }

    params.append("page", pagina.toString());

    const url = `https://projeto-aluguelsaopedro-production.up.railway.app/produtos/?${params.toString()}`;

    axios
      .get<IPaginacao<IProduto>>(url)
      .then((response) => {
        setProdutos(response.data.results);
        setTotalCount(response.data.count);
      })
      .catch((erro) => {
        console.log("Erro ao buscar produtos:", erro);
      });
  }, [pagina, busca, categoriasSelecionadas]);

  return { produtos, totalCount };
};

export default useProdutos;
