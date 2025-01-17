// FORMAS DE CREAR NÚMEROS

// Notación literal
let numeroEntero = 5; 
console.log(numeroEntero);

let decimal = 15.86;
console.log(decimal); 

// Notación con objetos (No recomendada)
let numeroEnteroObjeto = new Number(5);
console.log(numeroEnteroObjeto);

let decimalObjeto = new Number(15.86);
console.log(decimalObjeto);

// NÚMEROS HEXADECIMALES, BINARIOS Y OCTALES
// Números hexadecimales
let hexadecimal = 0xff;
console.log(hexadecimal); // resultado: 255

//  Números octales
let octal = 0o10;
console.log(octal); // resultado: 8

//  Números binaros
let binarios = 0b11111111;
console.log(binarios); // resultado: 255

// FORMAS DE ESCRIBIR NÚMEROS EN JS
// Simplicar valores grandes mediante guiones bajos
let milMillones = 1_000_000_000;
console.log(milMillones); // resultado: 1000000000

// Simplicar mediante notación científica
let dosMilMillones = 2e9;
console.log(dosMilMillones); // resultado: 2000000000

let microseg = 1e-6;
console.log(microseg); // resultado: 0.000001

// TRABAJAR CON NÚMEROS Y CADENAS DE TEXTO
let a = 5;
let b = 10;
console.log(a + b); // resultado: 15

let c = "10";
let d = "20";
console.log(c + d); // resultado: 1020

let e = 30;
let f = "40";
console.log(e + f); // resultado: 3040

let g = "10";
let h = "2";
console.log(g / h); // resultado: 5
console.log(g * h); // resultado: 20
console.log(g - h); // resultado: 8
console.log(g ** h); // resultado: 100 