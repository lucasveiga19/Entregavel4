function numPrimo (valor){
    var verificar = true;
    for(var i = 2; i < valor;  i++){
        if (valor % i == 0){
            verificar = false;
            break;
        }
    }

    return verificar;
}

function validarNumPrimo(valor){
    if(!numPrimo(valor)){
        return ["O numero "+valor+" nao e primo"];
    } else {
        return ["O numero "+valor+" e primo"];
    }
}

module.exports = validarNumPrimo;