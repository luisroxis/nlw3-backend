import express from 'express'

import './database/connection'

const app = express()
const PORT = 3333
app.use(express.json())

app.listen(PORT, ()=>{
  console.log(`🚀 Server started on Port ${PORT}`)
})