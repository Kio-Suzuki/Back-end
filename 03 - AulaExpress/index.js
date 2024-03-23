const express = require('express')
const app = express() //criando servidor

app.get('/main', (req, res) => {
    res.send("<h1>Página com express</h1> <a href='http://localhost:3000/pag2'> Pagina 2 </a>")
})

app.get('/pag2', (req, res) => {
    res.send("<h1>Segunda página</h1> <a href='http://localhost:3000/main'> Pagina 2 </a>")
})

app.listen(3000, () => {
    console.log('funcionando...')
})