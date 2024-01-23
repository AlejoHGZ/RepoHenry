function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  if (fechaNacimiento >= 18){
    return true;
  } else {
    return false;
  }
}

var edad = 20;
var Mayor = esMayorDeEdad(edad);

console.log("es mayor: " + Mayor);


function esMayor(fechaDeNacimiento) {
  // Obtener la fecha actual
  var fechaActual = new Date();
  
  // Obtener el año de nacimiento de la fecha de nacimiento
  var añoNacimiento = fechaDeNacimiento.getFullYear();
  
  // Obtener el año actual
  var añoActual = fechaActual.getFullYear();

  // Calcular la edad restando el año de nacimiento del año actual
  var edad = añoActual - añoNacimiento;

  // Verificar si la persona tiene 18 años o más
  return edad >= 18;
}

// Ejemplo de uso:
var fechaNacimientoPersona = new Date('2000-01-01'); // Puedes pasar la fecha de nacimiento como argumento
var esMayor = esMayor(fechaNacimientoPersona);

console.log(esMayor);  // Devolverá true si la persona es mayor de edad
