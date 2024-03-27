const express = require('express')
const app = express()
app.page = 1

//Habilitando o uso do req.body
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req, res) => {
    res.end("Ola Mundo!")
})

app.use('/exemplo', require('./routes/atv'))
app.use('/usuario', require('./routes/querystring'))
app.use('/produto', require('./routes/params'))
app.use('/usuario/login', require('./routes/login'))

app.listen(3000, () => {
    console.log("Funcionando")
    console.log("Page: " + app.page)
})