const fs = require('fs').promises
const path = require('path')

async function copiarArquivo(original, copia) {
    await fs.copyFile(original, copia)
}

copiarArquivo('ArquivoEX01.txt', 'ArquivoEX02.bkp');