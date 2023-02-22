import express from 'express'
import dotenv from 'dotenv'
import material from './routes/api/material'

dotenv.config()
const app = express()
const port = process.env.PORT || 3002

app.use(express.json())
app.use('/api/material', material)
app.listen(port, () => console.log(`Sever started on port ${port}`))
