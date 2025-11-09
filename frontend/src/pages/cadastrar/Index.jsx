import './index.scss'
import Cabecalho from '../../components/cadastro/Cabecalho.jsx'
import Rodape from '../../components/rodape/Index.jsx'
import { useState } from 'react'
import api from '../../../api.js'

export default function Cadastrar() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    

    async function Cadastrar() {

        let novo = {
            nome,
            email,
            senha
        }
        try {
            let res = await api.post('/cadastrar', novo)
            console.log(res.data)
        } catch (e) {
            alert('erro ao cadastrar')
        }

    }

    function Enviar(e){
        if(e.key === 'Enter'){
            Cadastrar()
        }
    }

    return (
        <div>
            <Cabecalho />


            <div className="area_login">
                <label htmlFor="">cadastrar</label>
                <input type="text" placeholder='nome' value={nome} onChange={e => setNome(e.target.value)} onKeyUp={Enviar} />
                <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}  onKeyUp={Enviar}/>
                <input placeholder='senha' value={senha} onChange={(e) => setSenha(e.target.value)} onKeyUp={Enviar}/>

                <button onClick={Cadastrar}>clique aqui</button>




            </div>




            <Rodape />

        </div>
    )
}