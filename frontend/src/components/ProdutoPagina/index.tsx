import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import CardProduto from '../../components/CardProduto';

const ProdutoPagina = ({ pagina, busca, categoriaSelecionada }: { pagina: number; busca: string; categoriaSelecionada: string[] }) => {
  const [, setSearchParams] = useSearchParams();


  useEffect(() => {
    setSearchParams({ busca, pagina: pagina.toString() }, { replace: true });
  }, [pagina, busca, setSearchParams]);

  return (
    <div>
      <CardProduto pagina={pagina} busca={busca} categoriaSelecionada={categoriaSelecionada} />
    </div>  
  );
};

export default ProdutoPagina;
