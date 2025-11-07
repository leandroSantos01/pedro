import { Router } from "express";
import { cadastrar, Listar, verificar } from "../repository/loginRepository.js";
import { generateToken } from "../utils/jwt.js";
const endpoint = Router()


endpoint.post('/cadastrar', async (req,resp)=>{
    let body = req.body
    let reg = await cadastrar(body)

    resp.send({novoId:reg})
})



endpoint.post('/login', async (req,resp)=>{
    let body = req.body
    let reg = await verificar(body)

    if(!reg){
        resp.status(401).send({erro:'Login inválido'})
    }

    resp.send({
        usuario: body.email,
        token: generateToken(body)
    })

})



endpoint.get('/listar', async (req,resp)=>{
    let reg = await Listar()
    resp.send(reg)
})


export default endpoint