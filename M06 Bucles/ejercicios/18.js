function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  if (a > b) {
    // Intercambiar los valores si a es mayor que b
    [a, b] = [b, a];
  }

  let resultado = 1;

  for (let i = a; i <= b; i++) {
    resultado *= i;
  }

  return resultado;

}
/* 
Este código verifica si a es mayor que b y, en ese caso, intercambia los valores. 
Luego, utiliza un bucle for para multiplicar acumulativamente los números desde a hasta b (inclusive) y devuelve el resultado.
*/
console.log(productoEntreNúmeros(2, 5));  // Resultado: 120 (2 * 3 * 4 * 5)
console.log(productoEntreNúmeros(5, 2));  // También funciona si a es mayor que b
console.log(productoEntreNúmeros(3, 3));  // Resultado: 3 (ya que solo hay un número entre 3 y 3)