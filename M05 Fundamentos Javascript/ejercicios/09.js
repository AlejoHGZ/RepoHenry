// Función que verifica si un valor es null o undefined
function esNuloOIndefinido(valor) {
  // Compara el valor con null y con undefined usando el operador de igualdad estricta (===)
  // Si el valor es igual a null o undefined, la expresión devuelve true; de lo contrario, devuelve false
  return valor === null || valor === undefined;
}

// Ejemplos de uso
//console.log(esNuloOIndefinido(null));      // true
//console.log(esNuloOIndefinido(undefined)); // true
//console.log(esNuloOIndefinido(0));         // false
//console.log(esNuloOIndefinido(""));        // false
//console.log(esNuloOIndefinido(false));      // false


