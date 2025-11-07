import { connection } from "./connection.js"


export async function cadastrar(novo) {
    const [info] = await connection.query(
        `Insert into lOGIN (nome,email,senha)
        values(?,?,MD%(?))`,
        [novo.nome, novo.email, novo.senha]
    )

    return info.insertId

}



export async function verificar(pessoa) {
    const comando = `
selectnome,
       email
  from login
 where email = ?
   and senha = MD5(?)
`

    const [info] = await connection.query(comando, [pessoa.email, pessoa.senha])
    return info[0]
}

export async function Listar() {
    const comando = `
        SELECT * FROM Login
    `

    const [linhas] = await connection.query(comando)
    return linhas
}