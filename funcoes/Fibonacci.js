function fibonacci(quantidadeNumero){
  
  // Fibonacci: onde N > 1. Os primeiros termos são: 0, 1, 1, 2, 3, 5, 8, 13 …. Cada termo, além dos dois primeiros, é derivado da soma de seus dois antecessores mais próximos.
      
  var termo1 = 0;
  var termo2 = 1;
  var termo3;
  
  var resultado = "";
  
  resultado+= termo1+", "+termo2;
  
  if(resultado==0){
    resultado == termo1;
  } else if(resultado==1){
    resultado == termo1+", "+termo2;
  }
  
  for(i=3; i<=quantidadeNumero; i++){
      termo3 = termo1+termo2;
      resultado+=", "+termo3;
      termo1 = termo2;
      termo2 = termo3;
  }
  
  return resultado;
  
}