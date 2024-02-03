function sonAnagramas(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  // Elimina espacios y convierte a minúsculas para comparación
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  // Verifica si las longitudes son diferentes
  if (str1.length !== str2.length) {
    return false;
  }

  // Convierte las palabras a arreglos de caracteres, ordena y compara
  const arregloStr1 = str1.split('').sort();
  const arregloStr2 = str2.split('').sort();

  // Compara los arreglos
  for (let i = 0; i < str1.length; i++) {
    if (arregloStr1[i] !== arregloStr2[i]) {
      return false;
    }
  }

  return true;
}

// Ejemplo de uso:
const palabra1 = "Listen";
const palabra2 = "Silent";

if (sonAnagramas(palabra1, palabra2)) {
  console.log(`${palabra1} y ${palabra2} son anagramas.`);
} else {
  console.log(`${palabra1} y ${palabra2} no son anagramas.`);
}



