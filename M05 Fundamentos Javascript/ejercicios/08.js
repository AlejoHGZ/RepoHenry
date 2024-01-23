function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:

  return Number.isInteger(numero) && numero % 1 === 0; 
}

var miNumero = 42.5; 
var esEntero = esNumeroEntero(miNumero); 

console.log(esEntero);
//Esta función utiliza Number.isInteger() para verificar si el número es
//un entero y también verifica que su parte decimal sea cero para asegurarse de que no sea un número decimal. El resultado de la función se almacena en la variable esEntero, que será true si el número es un entero y false si no lo es.