import express from 'express'
import 'express-async-errors'
import routes from './routes'
import path from 'path'

import errorHandler from './errors/handler'
import './database/connection'
import cors from 'cors'

const app = express()
const PORT = 3333
app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..','uploads')))
app.use(errorHandler)

app.listen(PORT, ()=>{
  console.log(`🚀 Server started on Port ${PORT}`)
})