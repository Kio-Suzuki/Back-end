var express = require('express')
var Contact = require('../model/ContatoModel')
// const ContactSchema = require('../validators/ContactValidator')
// const Joi = require('joi')
var router = express.Router()

router.get('/', function(req, res, next) {
    if(Contact.listContacts().length == 0) {
        Contact.newContact('Akio', '99934-8504', 'kiosuzuki@hotmail.com', 'Paquistão, 73')
    }

    let obj = Contact.getContactById(req.query.tid)
    res.render('agenda', { contacts: Contact.listContacts(), selectedContact: obj })
})



router.post('/contatos', function(req, res) {
    // const {error, value} = ContactSchema.validate(req.body);
    // if (error) {
    //     res.render('agenda', { contacts: Contact.listContacts(), erro: 'Dados incompletos' });
    //     return;
    // }

    // const {id, nome, telefone, email, endereco} = value;

    const {id, nome, telefone, email, endereco} = req.body;
    console.log(req.body)
    if (id === undefined) {
        Contact.newContact(nome, telefone, email, endereco);
    } else {
        Contact.updateContact(id, nome, telefone, email, endereco);
    }

    res.redirect('/');
});

router.get("/contatos/del/:id", function(req, res){
    const { id } = req.params;
  
    // Certifique-se de que id seja um número inteiro maior que 0
    if (isNaN(id) || parseInt(id) <= 0) {
      res.send("ID inválido");
      return;
    }
  
    if (!Contact.deleteContact(parseInt(id))) {
      res.send("Falha ao excluir uma tarefa");
      return;
    }
  
    res.redirect("/");
  });
  
module.exports = router;