import './index.scss'
import Cabecalho from '../../components/cadastro/Cabecalho'
import Rodape from '../../components/rodape/Index'
import { useState } from 'react'
import api from '../../../api.js'

export default function Login(){
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    async function fazerLogin(){
        await api.post('/login', ({
            "usuario":usuario,
            "senha":senha
        }))
        .then(() => alert('Usuario criado'))
        .catch((e) => alert(e.response.error))
    }

    return(
        <div>
        <Cabecalho/>


            <div className="area_login">
                <label htmlFor="">Login</label>
                <input placeholder='usuario' value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                <input placeholder='senha' value={senha} onChange={(e) => setSenha(e.target.value)}/>

                <button onClick={fazerLogin}>clique aqui</button>
            </div>
        <Rodape/>

        </div>
    )
}