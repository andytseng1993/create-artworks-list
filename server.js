import express from 'express'
import dotenv from 'dotenv'
import materialOption from './routes/api/material.js'
import typeOption from './routes/api/type.js'
import { PrismaClient } from '@prisma/client'

dotenv.config()
const app = express()
const port = process.env.PORT || 3002

app.use(express.json())
app.use('/api/material', materialOption)
app.use('/api/type', typeOption)

app.listen(port, () => console.log(`Sever started on port ${port}`))
