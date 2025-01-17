// OPERADORES DE COMPARACION
let x=5;

// OPERADOR DE ASIGNACIÓN, este operaoor asigna un valor a una variable
console.log(x==5); // true
console.log(x==18); // False
console.log(x=="5"); // true

// OPERADOR DE DESIGUALDAD, este operador compara si dos valores son diferentes
console.log(x!=5); // false
console.log(x!=18); // true
console.log(x!="5"); // false

// OPERADOR DE IDENTIDAD, este operador compara si dos valores son iguales y del mismo tipó
console.log(x===5); // true
console.log(x===18); // false
console.log(x==="5"); // false

// OPERADOR DE DESIGUALDAD DE IDENTIDAD, este operador compara si dos valores son diferentes y de diferente tipo
console.log(x!==5); // false
console.log(x!==18); // true
console.log(x!=="5"); // true, porque x es un número y "5" es un string

// OPERADOR DE MAYOR QUE, este operador compara si un valor es mayor que otro
console.log(x>5); // false
console.log(x>18); // false
console.log(x>"5"); // false

// OPERADOR DE MENOR QUE, este operador compara si un valor es menor que otro
console.log(x<5); // false
console.log(x<18); // true
console.log(x<"5"); // false

// OPERADOR DE MAYOR O IGUAL QUE, este operador compara si un valor es mayor o igual que otro
console.log(x>=5); // true
console.log(x>=18); // false
console.log(x>="5"); // true

// OPERADOR DE MENOR O IGUAL QUE, este operador compara si un valor es menor o igual que otro 
console.log(x<=5); // true
console.log(x<=18); // true
console.log(x<="5"); // true

// OPERADOR TERNARIO
// Los operadores se utilizan para tomar decisiones basadas en condiciones
// Sintaxis: (condicion) ? valor1 : valor2
// Si la condición es verdadera, devuelve valor1, de lo contrario devuelve valor2 
let edad = 18;
let resultado = (edad>=18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(resultado); // Eres mayor de edad