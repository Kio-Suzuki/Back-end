const express = require('express')
const path = require('path')


const engine = require("mustache-express")
const app = express()
app.engine = ('mustache', engine)

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'mustache')

app.get('/home', (req, res) => {
    query = []
    keys = Object.keys(req.query)
    for(let i = 0; i < keys.length; i++) {
        query.push({key:keys[i], value:req.query[key[i]]})
    }

    args = {
        'titulo': 'Ola mundo dos templates',
        'descricao' : 'Texto aleatório para ilustrar o caso!',
        'params': query
    }
    res.render('home', args)
})