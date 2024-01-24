function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:

  let numero; 

  numero = num % 3 === 0 == true || num % 2 === 0 == false; 

  return numero;
}

let impar = 1; 
console.log("El numero ingresado es impar?: " + esImpar(impar));