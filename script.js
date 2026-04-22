function calcularPropina(totalCuenta, porcentaje) {
  return totalCuenta * (porcentaje / 100);
}

function totalConPropina(totalCuenta, porcentaje) {
  const propina = calcularPropina(totalCuenta, porcentaje);
  return totalCuenta + propina;
}

const total = 1000;
const porcentaje = 10;

console.log("Propina:", calcularPropina(total, porcentaje)); // 100
console.log("Total a pagar:", totalConPropina(total, porcentaje)); // 1100

console.log(calcularDoble(5)); // 10
console.log(esMayorDeEdad(20)); // true
console.log(esMayorDeEdad(15)); // false
