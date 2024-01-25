function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:

  let palabra = "Hola" + " " + nombre + "!";
  return palabra;
}

console.log(obtenerSaludo("Alejo"));