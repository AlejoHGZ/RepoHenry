function esPalindromo(str) {
  // Eliminamos espacios y convertimos a minúsculas para hacer la comparación insensible a mayúsculas y minúsculas
  const strSinEspacios = str.replace(/\s/g, '').toLowerCase();
  
  // Invertimos el string
  const strInvertido = strSinEspacios.split('').reverse().join('');

  // Comparamos el string original con su versión invertida
  return strSinEspacios === strInvertido;
}

// Ejemplo de uso:
const resultado = esPalindromo('Anita lava la tina');
console.log(resultado); // Salida: true

