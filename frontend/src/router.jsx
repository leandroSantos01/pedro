import { BrowserRouter,Route,Routes } from "react-router";
import App from './pages/home/index.jsx'
import Sobre from "./pages/contatos/Sobre.jsx";

import Admin from "./pages/admin/index.jsx";
import Cadastrar from "./pages/cadastrar/Index.jsx";


export default function Navegar(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<App/>}/>
            <Route path="/sobre" element = {<Sobre/>}/>
            <Route path="/cadastrar" element = {<Cadastrar/>}/>
            <Route path="/loginadmin" element = {<Admin/>}/>
        </Routes>
        </BrowserRouter>
    )
}