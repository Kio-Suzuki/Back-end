const fs = require('fs').promises
const path = require('path')


let dir = path.join(__dirname, '..')
async function criarArquivo(name, data) {
    try {
        await fs.writeFile(name, data);
        return true
    } catch (e) {
        return false
    }
}

async function leDiretorio(dnome, fnome){
    let files = await fs.readdir(dnome)
    let conteudo = ''
    for(let i = 0; i < files.length; i++) {
        conteudo += files[i] + '\n'
    }
    await criarArquivo(fnome, conteudo)
}
