function obtenerDiasEnMes(numeroMes) {
  let diasEnMes;

  do {
    // Validar que el número de mes esté en el rango correcto
    if (numeroMes >= 1 && numeroMes <= 12) {
      switch (numeroMes) {
        case 1: // enero
        case 3: // marzo
        case 5: // mayo
        case 7: // julio
        case 8: // agosto
        case 10: // octubre
        case 12: // diciembre
          diasEnMes = 31;
          break;
        case 4: // abril
        case 6: // junio
        case 9: // septiembre
        case 11: // noviembre
          diasEnMes = 30;
          break;
        case 2: // febrero
          diasEnMes = 28; // considerando que no es año bisiesto
          break;
      }
    } else {
      console.log("Ingresa un número de mes válido (entre 1 y 12).");
    }
  } while (!diasEnMes);

  return diasEnMes;
}

// Ejemplo de uso:
const numeroMes = 1; // febrero
const diasEnMes = obtenerDiasEnMes(numeroMes);

console.log(`El mes ${numeroMes} tiene ${diasEnMes} días.`);
