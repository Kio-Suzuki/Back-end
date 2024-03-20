const fs = require('fs').promises
const fss = require('fs')
const path = require('path')

async function copiarArquivo(original, copia) {
    if(fss.existsSync(copia)) {

    }
    try {
        await fs.copyFile(original, copia +'.bkp')
        return true 
    } catch (error) {
       return false 
    }
}

(async () => {
    let resposta = await copiarArquivo('ArquivoEX01.txt', 'ArquivoEX02-aula');
    if(resposta) {
        console.log('Arquivo copiado')
    } else {
        console.log('Arquivo não criado')
    }
})()
