import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import routerApi from '../routes'

dotenv.config()
const app = express()

//middlewares
app.use(cors())
app.use(express.json())

routerApi(app)
app.listen(process.env.PORT,()=>console.log('Server is listening on port', process.env.PORT))

