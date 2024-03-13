const fs = require("fs");
const path = require("path");

//let newFile = path.join(__dirname, "novoarquivo.txt")
/*
fs.readFile("teste.txt", function(err, data){
    if(err) {
        console.log('Erro');
    } else {
        console.log(data.toString());
    }
});

fs.appendFile('teste.txt', ' Novo texto passado pela função\n', function(err){
    if(err) {
        console.log('Erro')
    } else {
        console.log('Arquivo salvo')
    }
})


fs.unlink('teste.txt', function(err){
    if(err) throw err;
    console.log('Arquivo deletado')
});
*/

fs.readdir(__dirname, function(err, files){
    if(err) {
        console.log('erro')
    } else {
        for(let i = 0; i < files.length; i++) {
            console.log(files[i])
        }
    }
})

async function funcao() {
    return 3
}

(async () => {
    let result = funcao();
    console.log(result)
})()