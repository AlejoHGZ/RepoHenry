function esTipoDato(num1,num2) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:

    let resultado; 
    resultado = num1 + num2; 
    return resultado;
}

var suma = esTipoDato(5,2);
console.log(suma);


function palabras(palabra1,palabra2){ // dentro de los parentesis, van los parametros a recibir 
   var nomCompleto; // luego declaramos alguna variable para utilizar 
   nomCompleto = palabra1 + palabra2;  // utilizamo la variable y asignamos que se va a realizar con los parametros a recibir 
  return nomCompleto;
}

var nombreCompleto = palabras("Alejo ","Gutierrez");
console.log(nombreCompleto);


function sumar(numero1,numero2,nombre){
  
  
  var sumaTot;
  sumaTot= numero1+numero2+nombre;
  return sumaTot;
}

var sumatoria = sumar(10,11," años de edad");
console.log(sumatoria);


function name (first,second){
  return first+second;
}

var nombreCom = name("hola ","Gutierrez","como estas");
console.log(nombreCom);