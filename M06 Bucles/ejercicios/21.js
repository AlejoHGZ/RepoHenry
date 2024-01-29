function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código

  if (numero <= 0) {
    return false;
  }

  while (numero > 1) {
    if (numero % 2 !== 0) {
      return false;
    }
    numero = numero / 2;
  }

  return true;
}

console.log(esPotenciaDeDos(8));   // Devolverá true, ya que 8 es 2^3
console.log(esPotenciaDeDos(16));  // Devolverá true, ya que 16 es 2^4
console.log(esPotenciaDeDos(12));  // Devolverá false, ya que 12 no es una potencia de 2
