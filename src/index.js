import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import connection from './database/database.js'
import characterRouter from './router/characterRouter.js'
import userRouter from './router/userRouter.js'

const port = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())
connection()

app.use(characterRouter)
app.use(userRouter)

app.listen(port, () => {
  console.log(`server rodando http://localhost:${port}`)
})
