import { Router } from "express";
import { BuscarAdmin, Cadastrar,verificar } from "../repository/loginRepository.js";
import { generateToken } from "../utils/jwt.js";
const endpoint = Router()


endpoint.post('/cadastrar', async (req,resp)=>{
    let body = req.body
    let reg = await Cadastrar(body)

    resp.send({novoId:reg})
})


endpoint.post('/admin', async (req,resp)=>{

    let admin = req.body
    let reg = await BuscarAdmin(admin)  
    if(!reg){
        resp.status(401).send({erro:'Login inválido'})
    }

    resp.send({
        admin: admin.email,
        token: generateToken(admin)
    })          
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




export default endpoint