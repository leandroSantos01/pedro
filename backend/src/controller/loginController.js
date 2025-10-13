import { Router } from "express";
import { Login } from "../repository/loginRepository.js";
const endpoint = Router()


endpoint.post('/login', async (req,resp) => {
    let novo = req.body
    let id = await Login(novo)
    resp.send({NovoId:id});
})


export default endpoint