// Imports
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
// Variables
const app = express()

app.use(cors())
app.use(express.json()) // converte todas as requisições do express de JSON para Objetc
app.use(routes)
app.listen(3333, () => {
    console.log("Servidor iniciado na porta: 3333...")
})