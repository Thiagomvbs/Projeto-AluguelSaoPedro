import { Link } from "react-router";
import estilos from './Navbar.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";
import Carrinho from "../Carrinho";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

const Navbar = () => {
    const [carrinhoAberto, setCarrinhoAberto] = useState(false);
    const { state } = useCarrinhoContext();
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const toggleCarrinho = () => {
        setCarrinhoAberto(prev => !prev); 
    };

    return (
        <nav className={estilos.Link}>
            <h1>Aluguel São Pedro</h1>
            
            <ul className={`${estilos.NavItem} ${openMenu ? estilos.open : ''}`}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/rent'>Como Alugar</Link></li>
                <li><Link to='/products'>Produtos</Link></li>
                <li><Link to='/budget'>Orçamento</Link></li>
                <li className={estilos.LinkMobile}><Link to='/cart'>Carrinho</Link></li>
            </ul>

            <div className={estilos.Container}>
                <button onClick={toggleCarrinho} className={estilos.ButtonCart}>
                    <ShoppingCartIcon className={estilos.IconCart} />
                </button>
                {state.produtos.length >= 0 && <span className={estilos.Count}>{state.produtos.length}</span>}
                <Carrinho carrinhoAberto={carrinhoAberto} toggleCarrinho={toggleCarrinho}/>
            </div>

            <button onClick={() => setOpenMenu(!openMenu)} className={estilos.ButtonBurguer}>
                {openMenu ? <ClearIcon className={estilos.Close}/> : <MenuIcon className={estilos.Burguer}/>}
            </button>

        </nav>
    );
};

export default Navbar;
