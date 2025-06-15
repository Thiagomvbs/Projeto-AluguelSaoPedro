import { Link } from 'react-router'
import estilos from './Rodape.module.scss'


const Rodape = () => {
    return (<footer className={estilos.Rodape}>
        <div>
            <p className={estilos.Copyright}>Todos os direitos reservados a Aluguel São Pedro &copy; {new Date().getFullYear()}</p>
        </div>
        <div>
            <p>Rua General Belford, 12 - Rocha - Rio de Janeiro - RJ - Tel.:(21) 2578-9248</p>
        </div>
        <div>
            <ul> 
                <li>
                    <Link to='https://www.facebook.com/aluguelsaopedro/'><i className="fa-brands fa-facebook"></i></Link>
                </li>
                <li>
                    <Link to='https://www.instagram.com/aluguelsaopedro/'><i className="fa-brands fa-instagram"></i></Link>
                    
                </li>
            </ul>
        </div>
    </footer>)
}

export default Rodape