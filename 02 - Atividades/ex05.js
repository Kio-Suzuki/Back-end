const fs = require("fs")
const path = require("path")

let caminho = path.dirname(__dirname);

console.log(caminho)

fs.readdir(caminho, (err, files) => {
    if(err) throw err;
    
    files.forEach(files => {
        let caminhoArquivo = path.join(caminho, files)
        fs.stat(caminhoArquivo, (err, stats) => {
            if(err) throw err;

            if(stats.isDirectory()) console.log(files)
        })

    });
})