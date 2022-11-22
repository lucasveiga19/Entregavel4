function somatorio(valor){
    var valores;
    var soma = 0;
    var i = 0;
    
    while(i<valor){
        valores = parseInt(prompt("Informe um número"));
        soma = soma + valores;
        i++;
    }
    
    return "A soma dos "+entrada+" números é "+soma;
}