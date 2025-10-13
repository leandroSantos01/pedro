import { connection } from "./connection.js"

export async function Login(novo) {
    const comando = `
        insert into login(usuario, senha)
        values
        (?,MD5(?))
    `

    const [info] = await connection.query(comando,[novo.usuario, novo.senha])
    return info.insertId
}