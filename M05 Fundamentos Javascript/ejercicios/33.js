function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  if (numero <= 1) {
    return false; // Los números menores o iguales a 1 no son primos
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false; // Si es divisible por algún número menor que él, no es primo
        }
    }
    return true; // Si no es divisible por ningún número menor que él, es primo
}
}

// Ejemplo de uso
let miNumero = 12;
console.log(esNumeroPrimo(miNumero)); // Esto imprimirá true, ya que 13 es primo