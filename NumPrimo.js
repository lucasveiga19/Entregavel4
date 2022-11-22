function numPrimo (valor){
    var valor = 0;
    for (var i = 0; i <= valor; i++){
        if ((valor % 1 === 0) && (valor % valor === 0)){
            return (numPrimo(i));
        }
    }
}