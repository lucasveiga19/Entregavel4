function fibonacci(quantidadeNumero){
  
  // Fibonacci: onde N > 1. Os primeiros termos são: 0, 1, 1, 2, 3, 5, 8, 13 …. Cada termo, além dos dois primeiros, é derivado da soma de seus dois antecessores mais próximos.
      
  var termo1 = 0;
  var termo2 = 1;
  var termo3;
  
  var resultado = [];
  
  resultado+= [termo1, termo2];
  
  if(quantidadeNumero <= 0){
    return [];
  } else if (quantidadeNumero == 1){
    resultado = [termo1];
    return resultado;
  } else if (quantidadeNumero == 2){
    resultado = [termo1, termo2];
    return resultado;
  }
  
  for(i=3; i<=quantidadeNumero; i++){
      termo3 = termo1+termo2;
      resultado+= [,termo3];
      termo1 = termo2;
      termo2 = termo3;
  }
  
  return [resultado];
  
}

module.exports = fibonacci;