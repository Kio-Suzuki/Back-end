const fs = require("fs")
const path = require("path")

let caminho = path.dirname(__dirname);

console.log(caminho)

fs.readdir(caminho, (err, files) => {
    if(err) throw err;
    files.forEach(f => {
        console.log(f)
        fs.appendFile('SavedFiles.txt', f + '\n', (err) => {
            if(err) throw err;    
        })
    })
})

