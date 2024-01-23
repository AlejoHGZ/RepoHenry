function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

  const dateObject = new Date(fecha);
  return !isNaN(dateObject.getTime());
}

var data = esFechaValida("2023-31-11");
console.log(data);



function FechaValida(fecha0){
  var FechaObj = new Date(fecha0);
  return !isNaN(FechaObj.getTime());
}

var validar = FechaValida("1970-1-11");
console.log(validar);


/*
Esta función verifica si un objeto de fecha (`dateObject`) es una fecha válida. 

1. `dateObject.getTime()`: El método `getTime()` es un método de los objetos `Date` en JavaScript que devuelve el tiempo transcurrido desde el 1 de enero de 1970 00:00:00 UTC (Coordinated Universal Time) hasta la fecha representada por el objeto. Este valor se devuelve en milisegundos.

2. `isNaN(...)`: La función `isNaN()` en JavaScript significa "Is Not a Number" (No es un número). Devuelve `true` si el valor proporcionado no es un número y `false` si es un número.

3. `!isNaN(dateObject.getTime())`: Aquí, `dateObject.getTime()` devuelve el tiempo en milisegundos, y `!isNaN(...)` verifica si ese valor no es NaN. En otras palabras, verifica si `dateObject` representa una fecha válida, ya que el tiempo en milisegundos es un número válido. Si es una fecha válida, `!isNaN(...)` devolverá `true`; de lo contrario, devolverá `false`.

Entonces, la función `!isNaN(dateObject.getTime())` se utiliza para determinar si un objeto de fecha es válido o no.

*/ 