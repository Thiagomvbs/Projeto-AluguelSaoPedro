import TuneIcon from '@mui/icons-material/Tune';
import estilos from './FiltroProduto.module.scss';

interface CategoriaProps {
  categoriaSelecionadas: string[];
  onCategoriaChange: (novaLista: string[]) => void;
}

const todasCategorias = [
  'PRATOS', 'COPOS', 'RECHAUD', 'GARRAFAS', 'TALHERES', 'VIDROS', 'TRAVESSAS',
  'INOX', 'LOUÇAS', 'XÍCARAS', 'PRATARIA', 'MADEIRA', 'PANELA', 'TOALHAS', 'EQUIPAMENTOS'
];

const FiltroProduto = ({ categoriaSelecionadas, onCategoriaChange }: CategoriaProps) => {

  const handleCheckboxChange = (categoria: string) => {
    const categoriaUpper = categoria.toUpperCase();
    let novaLista;

    if (categoriaSelecionadas.includes(categoriaUpper)) {
      novaLista = categoriaSelecionadas.filter(cat => cat !== categoriaUpper);
    } else {
      novaLista = [...categoriaSelecionadas, categoriaUpper];
    }

    onCategoriaChange(novaLista);
  };
  return (
    <div className={estilos.Container}>
      <div className={estilos.Filtro}>
        <h2>Filtro </h2>
        <TuneIcon style={{ color: 'black' }} />
      </div>
      <ul>
        {todasCategorias.map((categoria) => (
          <li key={categoria}>
            <label>
              <input
                type="checkbox"
                checked={categoriaSelecionadas.includes(categoria)}
                onChange={() => handleCheckboxChange(categoria)}
              />
              {categoria}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FiltroProduto;


