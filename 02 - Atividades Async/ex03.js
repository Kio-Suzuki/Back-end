const fs = require('fs').promises
const path = require('path')

async function lerArquivo(file) {
    let l = 0, c = 0;
    let dados = await fs.readFile(file);
    dados.toString().split('').forEach((element) => {
        if(element == ' ') c--;
        c++;
        if(element == '\n') l++
    })
    console.log('Caracteres: ' + c);
    console.log('Linhas: ' + l);
    console.log(dados.toString());
}

lerArquivo('ArquivoEX01.txt');