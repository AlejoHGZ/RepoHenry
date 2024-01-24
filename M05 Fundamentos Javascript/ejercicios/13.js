function sonIguales(x, y) {
  // La función recibe dos argumentos "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código:

  var iguales;

  iguales = x === y == true || x != y == false;  
  /* si X es equivalente a Y entonces es igual a True o Si X es distinto de Y entonces es igual a False  */
  
  return iguales;
}

var devoler = sonIguales(7,7);
console.log(devoler);
