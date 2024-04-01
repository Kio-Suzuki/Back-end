const express = require('express')
const app = express() //criando servidor

app.get('/main', (req, res) => {
   res.sendFile(__dirname + '/html/index.html')
})

app.get('/public', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
  });

app.listen(3000, () => {
    console.log('funcionando...')
})