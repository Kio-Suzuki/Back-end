const fs = require("fs")
const path = require("path")

fs.readFile('Arquivo1.txt', (err, data) => {
    let l = 0, c = 0;
    if (err) throw err;
    data.toString().split('').forEach((element) => {
        if(element == ' ') c--;
        c++;
        if(element == '\n') l++
    })
    console.log('Caracteres: ' + c);
    console.log('Linhas: ' + l);
    console.log(data.toString());
});
