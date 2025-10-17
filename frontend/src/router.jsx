import { BrowserRouter,Route,Routes } from "react-router";
import App from './pages/home/index.jsx'
import Sobre from "./pages/contatos/Sobre.jsx";
import Login from "./pages/Login/Index.jsx";


export default function Navegar(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<App/>}/>
            <Route path="/sobre" element = {<Sobre/>}/>
            <Route path="/login" element = {<Login/>}/>
        </Routes>
        </BrowserRouter>
    )
}