function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:

  var longitud;

  longitud = str1.length === str2.length == true || str1.length != str2.length == false;

  return longitud;

}

var Longitud = tienenMismaLongitud("Hol", "Hol");
console.log(Longitud);