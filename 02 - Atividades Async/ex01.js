const fs = require('fs').promises
const path = require('path')


async function criarArquivo(name, data) {
    await fs.writeFile(name, data);
}

criarArquivo('ArquivoEX01.txt', 'Texto criado pela função criarArquivo.\n');