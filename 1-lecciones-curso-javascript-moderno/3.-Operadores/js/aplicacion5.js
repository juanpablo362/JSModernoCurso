// OPERADORES LÓGICOS

// OPERADOR AND (&&), devuelve true si ambos operandos son verdaderos
let x = 5;
let y = 10;
console.log(x>3 && y<20); // true
console.log(x<3 && y<20); // false

// OPERADOR OR (||), devuelve true si al menos uno de los operandos es verdadero
console.log(x>3 || y<20); // true
console.log(x<3 || y<20); // true

// OPERADOR NOT (!), devuelve true si el operando es falso y false si el operando es verdadero
let z = 5;
console.log(!(z>3)); // false
console.log(!(z<3)); // true
