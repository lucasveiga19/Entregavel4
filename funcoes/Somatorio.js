function somatorio(valores){
    var soma = 0;

    for(var i = 0; i <= valores; i++){
        soma = soma + i;
    }
    
    return [soma];
}

module.exports = somatorio;