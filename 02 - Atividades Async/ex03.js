const fs = require('fs').promises
const path = require('path')

async function lerArquivo(file) {
    let dados = await fs.readFile(file);
    console.log(dados.toString())
}

lerArquivo('ArquivoEX01.txt');