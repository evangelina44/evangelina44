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

console.log(Math.round(7.5));
console.log(Math.round(7.4));

console.log(Math.floor(7.9));
console.log(Math.ceil(7.1));

console.log(Math.abs(-42));
console.log(Math.abs(42));

console.log(Math.max(1, 5, 3, 9, 2));
console.log(Math.min(1, 5, 3, 9, 2));

console.log(Math.pow(2, 8));
console.log(Math.sqrt(144));

function tirarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

for (let i = 0; i < 10; i++) {
  const resultado = tirarDado();
  console.log(resultado);
}
function areaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}

// Pruebas

console.log(areaCirculo(5));
console.log(areaCirculo(10));

function areaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}

console.log(areaCirculo(5));
console.log(areaCirculo(10));
