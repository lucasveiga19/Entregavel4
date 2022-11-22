function numPrimo (valor){
    var valor = 0;
    for (var i = 0; i <= valor; i++){
        if ((valor % 1 === 0) && (valor % valor === 0)){
            return (numPrimo(i));
        }
    }
}

function validarNumPrimo(valor){
    if(numPrimo(valor)){
        return "O numero"+valor+" e primo";
    } else {
        return "O numero"+valor+" nao e primo";
    }
}

module.exports = validarNumPrimo;