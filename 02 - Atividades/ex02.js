const fs = require("fs")
const path = require("path")

fs.copyFile('Arquivo1.txt', 'Arquivo1.bkp', (err) => {
    if(err) console.log('Arquivo já existe');
    console.log('Arquivo criado com sucesso');
})