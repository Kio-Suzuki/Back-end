const express = require('express')
const router = express.Router()

router.get("/listar/:id", (req, res) => {
    let id = req.params.id
    res.end("Produto: " + id)
})

router.get("/:categoria/:produto", (req, res) => {
    let {produto, categoria} = req.params
    res.end("Produto: "+ produto + " - Categoria: "+categoria)
})

router.get("/comprar/:produto/:quantidade", (req, res) => {
    let {produto, quantidade} = req.params
    res.end("Produto: " + produto + " QTD: " + quantidade)
})

module.exports = router