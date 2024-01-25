function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:

  for (var i = 1; i < 2; i++){
    if (booleano1 == true && booleano1 == true){
      return true;
    } else if (booleano2 == false && booleano2 == false){
      return false;
    } else if (booleano1 != booleano2){
      return false;
    }
  }
}

console.log(esVerdaderoYFalso(false, true));
