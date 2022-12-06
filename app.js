const express = require('express')
const { dbConnection } = require('./database/config')
require('dotenv').config()
const cors = require('cors')

const app = express()

// Base de datos
dbConnection()

// CORS - Para que sólo se puede consumir la API del dominio que yo permita
app.use(cors())

// Directorio público
app.use(express.static('public'))

// Lectura y parseo del body
app.use(express.json())

app.use('/impresoras', require('./routes/impresoras'))
app.use('/sucursales', require('./routes/sucursales'))
app.use('/ciudades', require('./routes/ciudades'))
app.use('/marcas', require('./routes/marcas'))

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})