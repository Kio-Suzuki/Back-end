const express = require('express')
const router = express.Router()

router.get("/bemvindo", (req, res) => {
    let nome = req.query.nome
    if (nome) {
        res.end("Ola "+ nome + ", seja bem vindo(a)!")
    } else {
        res.end("Ola anonimo(a)")
    }
})

let nomes = ['Joao', 'Maria', 'Henrique', 'Joice']
router.get("/listar", (req, res) => {
    let html = '<h1>Usuarios</h1>'
    for (let i = 0; i < nomes.length; i++) {
        html += '<p><a href="editar?id='+i+'">'+ nomes[i] +'</a> | <a href="bemvindo?nome='+ nomes[i] +'">Diga oi</a></p>'
    }
    res.end(html)
})

router.get('/editar', (req, res) => {
    id = parseInt(req.query['id'])
    
    if (id < 0 || id >= nomes.length) {
        res.end("ID invalido!")
        return
    }
    res.end("Dados editados: " + nomes[id])
})

module.exports = router