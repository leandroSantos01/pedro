import express from 'express'
import cors from 'cors'
import Rotas from './rotas.js'
import multer from 'multer'

const api = express()
api.use(multer(de))
api.use(express.json())
api.use(cors())

Rotas(api)

api.listen(5010, () => console.log('API subiu!'));