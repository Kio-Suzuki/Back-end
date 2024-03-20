const fs = require('fs').promises
const path = require('path')

async function criarArquivo(name, data) {
    try {
        await fs.writeFile(name, data);
        return true
    } catch (e) {
        return false
    }
}


(async () => {
    let resposta = await criarArquivo('ArquivoEX01.txt', 'Texto criado pela função criarArquivo.\n');
    if(resposta) {
        console.log("Arquivo criado")
    } else {
        console.log('Arquivo não criado')
    }
})()