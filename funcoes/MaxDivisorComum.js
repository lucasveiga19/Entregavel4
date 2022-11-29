function maxDivisorComum(valor1, valor2){
    while (valor2 !== 0) {
        var r = valor1 % valor2;
        valor1 = valor2;
        valor2 = r;
    }
    return valor1;
}

module.exports = maxDivisorComum;