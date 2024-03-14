const fs = require("fs")
const path = require("path")

fs.writeFile('Arquivo1.txt', 'Exercício número 1\nTeste\nTeste2', (err) => {
    if (err) throw err;
    console.log('Arquivo criado');
});