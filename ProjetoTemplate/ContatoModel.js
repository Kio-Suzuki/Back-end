let ids = 0;
let contacts = [];

module.exports = {
    newContact(nome, telefone, email, endereco) {
        let contact = {id: ++ids, nome: nome, telefone: telefone, email: email, endereco: endereco};
        contacts.push(contact);
        return contact;
    },
    updateContact(id, nome, telefone, email, endereco) {
        let pos = this.getPositionById(id);
        if (pos >= 0) {
            let contact = contacts[pos];
            contact.nome = nome;
            contact.telefone = telefone;
            contact.email = email;
            contact.endereco = endereco;
        }
    },
    listContacts() {
        return contacts;
    },
    getContactById(id) {
        let pos = this.getPositionById(id);
        if (pos >= 0) {
            return contacts[pos];
        }
        return null;
    },
    getPositionById(id) {
        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].id == id) {
                return i;
            }
        }
        return -1;
    },
    deleteContact(id) {
        let i = this.getPositionById(id);
        if (i >= 0) {
            contacts.splice(i, 1);
            return true;
        }
        return false; 
    }
}