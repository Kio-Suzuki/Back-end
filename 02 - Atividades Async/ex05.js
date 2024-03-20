const fs = require('fs').promises
const path = require('path')

async function listaDiretorio(dnome) {
    let lista = await fs.readdir(dnome)
    for(let i = 0; i < lista.length; i++)
    let obj = fs.stat(path.join(dnome, lista))
    if(obj.isDirectory(){
        console.log(lista[i])
    })
}