import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import connection from './database/database.js'
import router from './router/characterRouter.js'

const port = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

connection()

app.listen(port, () => {
  console.log(`server rodando http://localhost:${port}`)
})
