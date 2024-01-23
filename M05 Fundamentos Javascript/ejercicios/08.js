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

/*
La expresión `numero % 1 === 0` se utiliza para verificar si un número es un entero. La operación `%` (módulo) devuelve el resto de la división de un número por otro. En este caso, si el resultado de `numero % 1` es igual a 0, significa que el número es divisible por 1 sin dejar un residuo, lo que implica que es un número entero.

La expresión `numero % 1 === 0` es otra forma de comprobar si un número es entero, y se usa comúnmente junto con `Number.isInteger()` o como alternativa a dicho método, especialmente en contextos donde no esté disponible o no se desee depender de ECMAScript 6 (ES6) y versiones posteriores de JavaScript, ya que `Number.isInteger()` fue introducido en ES6.

En resumen, `numero % 1 === 0` devuelve `true` si `numero` es un número entero y `false` si no lo es.
*/

function NumeroEntero(num){
  return Number.isInteger(num) && num % 1 === 0; 
}

var miNum = 10;
var Entero = NumeroEntero(miNum);
console.log(Entero);