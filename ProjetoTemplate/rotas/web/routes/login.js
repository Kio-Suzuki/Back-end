const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    let html = `
        <h1>Login</h1>
        <form action='/usuario/login/entrar' method='post'>
            <p>Usuario: <input type='text' name='usuario'></p>
            <p>Senha: <input type='password' name='senha'></p>
            <p><input type='submit' value='Entrar'></p>
        </form>
    `
    res.end(html)
})

router.post('/entrar', (req, res) => {
    console.log(req.body)
    let {usuario, senha} = req.body
    res.end("Usuario: " + usuario + "<br>Senha: "+senha)
})


module.exports = router