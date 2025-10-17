import { Router } from "express";
import { Listar, Login } from "../repository/loginRepository.js";
const endpoint = Router()


endpoint.post('/login', async (req,resp) => {
    let novo = req.body
    let id = await Login(novo)
    resp.send({NovoId:id});
})

endpoint.get('/listar', async (req,resp)=>{
    let reg = await Listar()
    resp.send(reg)
})


export default endpoint