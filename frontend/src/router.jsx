import { BrowserRouter,Route,Routes } from "react-router";
import App from './pages/home/index.jsx'
import Sobre from "./pages/contatos/Sobre.jsx";


export default function Navegar(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<App/>}/>
            <Route path="/sobre" element = {<Sobre/>}/>
        </Routes>
        </BrowserRouter>
    )
}