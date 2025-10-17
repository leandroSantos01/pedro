import { connection } from "./connection.js"

export async function Login(novo) {
    const comando = `
        insert into Login(usuario, senha)
        values
        (?,MD5(?))
    `

    const [info] = await connection.query(comando,[novo.usuario, novo.senha])
    return info.insertId
}


export async function Listar() {
    const comando = `
        SELECT * FROM Login
    `

    const [linhas] = await connection.query(comando)
    return linhas
}