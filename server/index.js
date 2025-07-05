import express from 'express'
import path from 'path'

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
})

app.listen(PORT, () => {
    console.log('Server started on port localhost:3000')
})