const express = require('express')
const app = express() //criando servidor

app.get('/main', (req, res) => {
    res.send('Página com express')
})

app.get('/pag2', (req, res) => {
    res.send('Segunda página')
})

app.listen(3000, () => {
    console.log('funcionando...')
})