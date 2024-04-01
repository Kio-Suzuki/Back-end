const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/users', (req, res) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Se chegou aqui, os dados são válidos
    // Faça algo com os dados, como salvar em um banco de dados

    res.send('Usuário criado com sucesso');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
