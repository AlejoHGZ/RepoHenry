function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:

  let nombreApellido = nombre + " " + apellido;
  return nombreApellido;
}

console.log(combinarNombres("alejo","Gutierrez"));
