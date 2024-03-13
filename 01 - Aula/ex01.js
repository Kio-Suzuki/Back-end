function trocaVogal(x, y) {
    let separa = x.toLowerCase().split('');
    separa.forEach((letra, index) => {
        if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
            separa[index] = y;
        }
    });
    x = separa.join('');
    return x;
};

console.log(trocaVogal('Starbucks', 2));
