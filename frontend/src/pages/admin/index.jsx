import './index.scss'
import { useState,useEffect } from 'react'
import api from '../../../api.js'
import Cabecalho from '../../components/cadastro/Cabecalho';
import { useNavigate } from 'react-router';

export default function Admin(){
    

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();


    function removerToken(){
        localStorage.removeItem('TOKEN')
        localStorage.removeItem('ADMIN')
        navigate('/')
    }


    async function Admin(){
        let admin = {
            email,
            senha
        }

        let res = await api.post('/admin',admin)
        console.log(res.data)

        localStorage.setItem('TOKEN', res.data.token)
        localStorage.setItem('ADMIN', res.data.admin)
        
    }

    function Enviar(e){
        if(e.key === 'Enter'){
            Admin()
        }   
    }

    return(
        <div>
            <Cabecalho/>
             <div className="area_login">
                <label htmlFor="">LOGIN ADMIN</label>
                <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}  onKeyUp={Enviar}/>
                <input type='password' placeholder='senha' value={senha} onChange={(e) => setSenha(e.target.value)} onKeyUp={Enviar}/>
                <button onClick={Admin}>clique aqui</button>




            </div>
            
        </div>
    )
}