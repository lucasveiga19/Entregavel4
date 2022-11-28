function contagem(valor1, valor2){
    var cont = 0;
    for(var i = valor1; i<valor2; i++){
        if(i>0){
            cont++;
        }
    }

    for(var i = valor2; i<valor1; i++){
        if(i>0){
            cont++;
        }
    }

    return cont;
}

module.exports = contagem;