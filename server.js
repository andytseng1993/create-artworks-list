import express from 'express'
import dotenv from 'dotenv'
import materialOption from './routes/api/material.js'
import typeOption from './routes/api/type.js'
import path from 'path'

dotenv.config()
const app = express()
const port = process.env.PORT || 3002

app.use(express.json())
app.use('/api/material', materialOption)
app.use('/api/type', typeOption)

app.use(express.static(path.join(__dirname, './client/dist')))
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/dist/index.html'))
})
app.listen(port, () => console.log(`Sever started on port ${port}`))
