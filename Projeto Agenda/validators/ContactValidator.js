const Joi = require('joi');

const ContactSchema = Joi.object({
    id: Joi.number()
        .integer()
        .greater(0),
    nome: Joi.string()
        .min(3)
        .max(50)
        .required(),
    telefone: Joi.string()
        .min(9)
        .max(15)
        .required(),
    email: Joi.string()
        .min(11)
        .max(30)
        .required(),
    endereco: Joi.string()
        .min(10)
        .max(50)
        .required(),
})

module.exports = ContactSchema;




