function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:

  for (var i = 1; i < 2; i++){
    if (-a == -b){
      return true;
    } else if ( -a != -b){
      return false;
    }
  }
}

console.log(esIgualYNegativo(1, -1));
