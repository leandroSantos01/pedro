import { Link } from 'react-router'
import logo from '../../assets/images/imagem.png'
import './cabecalho.scss'


export default function Cabecalho(){
    return(
        <div>
            <div className="cabecalho">
                <img src={logo} height="150px"/>

                <h1>Cursos</h1>

                <div className="links">
                    <Link to={'/'}>inicio</Link>
                    <Link to={'/sobre'}>sobre</Link>
                </div>
            </div>
        </div>
    )
}


