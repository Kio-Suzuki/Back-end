const express = require('express')
const { body, validationResult } = require('express-validator')
const app = express()

app.use(express.json())

app.post('/user', [
    body('email').isEmail().withMessage('Insira um e-mail válido'),
    body('senha').isLength({ min: 5 }).withMessage('A senha deve ter no mínimo 6 caracteres').matches(/[a-zA-Z]/).withMessage('A senha deve conter pelo menos uma letra'),
], (req, res) => {
    const erro = validationResult(req);
    if (!erro.isEmpty()) {
        return res.status(400).json({ errors: erro.array() })
    }
    res.send('Usuário criado')
});

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})