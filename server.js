import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT || 3002

app.use(express.json())

app.listen(port, () => console.log(`Sever started on port ${port}`))
