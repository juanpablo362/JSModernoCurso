// MÉTODOS DE LOS NÚMEROS EN JAVASCRIPT

// toExponential(): Convierte el número a notación exponencial. (Sintaxis: number.toExponential(x)
// La notación exponencial es una forma de representar números muy grandes o muy pequeños de una manera más corta
let num = 5.43210;
console.log(num.toExponential()); // 5.4321e+0
console.log(num.toExponential(2)); // 5.43e+0
console.log(num.toExponential(3)); // 5.432e+0
console.log(typeof num.toExponential()); // string

// toFixed(): redondea el número a n dígitos después del punto decimal. (Sintaxis: number.toFixed(x))
let redondear = 10.9448659;
console.log(redondear.toFixed()); // 11
console.log(redondear.toFixed(3)); // 10.945
console.log(redondear.toFixed(1)); // 10.9
console.log(redondear.toFixed(10)); // 10.9448659000
console.log(typeof +redondear.toFixed()); // number

//  Cálculos imprecisos 
let suma = 0.1 + 0.2; 
console.log(suma.toFixed(1)); // 0.3

// toPrecision(): Definir la precisión de un número. (Sintaxis: number.toPrecision(x))
// La presición de un número es el número total de dígitos que se pueden mostrar en un número	
let precision = 10.9448659;
console.log(precision.toPrecision()); // 10.9448659
console.log(precision.toPrecision(5)); // 10.945
console.log(precision.toPrecision(3)); // 10.9
console.log(precision.toPrecision(2)); // 11

// toPrecision() con números decimales más pequeños
let precision2 = 0.0015543;
console.log(precision2.toPrecision()); // 0.0015543
console.log(precision2.toPrecision(3)); // 0.00155
console.log(precision2.toPrecision(2)); // 0.0016

// toString(): Convierte un número en una cadena de texto. (Sintaxis: number.toString(radix))
let txt = 255;
console.log(txt.toString());
console.log(txt.toString(2)); // binario
console.log(txt.toString(8)); // octal
console.log(txt.toString(16)); // hexadecimal

let txt2 = 123456;
console.log(txt2.toString(36)); // 21ix