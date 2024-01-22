const mayorQueCincuenta = require("../ejercicios/16");

test('Debe devolver True si el número es mayor a cincuenta', function () {
  expect(mayorQueCincuenta(15)).toBe(false);
  expect(mayorQueCincuenta(50)).toBe(false);
  expect(mayorQueCincuenta(60)).toBe(true);
});

test('Debe devolver False si el número no es mayor a cincuenta', function () {
  expect(mayorQueCincuenta(15)).toBe(false);
  expect(mayorQueCincuenta(50)).toBe(false);
  expect(mayorQueCincuenta(60)).toBe(true);
});
