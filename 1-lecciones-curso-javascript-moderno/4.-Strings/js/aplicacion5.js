// EXTRAER FRAGMENTOS DE UNA CADENA DE TEXTO

let extraer = "William Shakespeare es reconocido como el mejor escritor de todos los tiempos." 

// Método substring(): extrae caracteres desde indiceA hasta indiceB sin incluirlo. Sintaxis: cadena.substring(indiceA[, indiceB'])
console.log(extraer.substring(8)); // Shakespeare es reconocido como el mejor escritor de todos los tiempos.
console.log(extraer.substring(0, 15)); // William Shakes
console.log(extraer.substring(8, 8)); // Devuelve un string vacío
console.log(extraer.substring(0, 1)); // devuelve "W"
console.log(extraer.substring(extraer.length-1)); // Devuelve "."
console.log("Hola mundo".substring(-9)); // devuelve "Hola mundo"
console.log("Hola mundo".substring(3, -5)); // devuelve "la"
console.log("Hola mundo".substring(-4, -2)); // devuelve "un"

// Método slice(): Devvuelve la parte del string desde comienzo hasta el final (sin incluirlo). Sintaxis : cadena.slice(iniciostring[, finstring])
console.log(extraer.slice(8));
console.log("Hola mundo".slice(-9));
console.log("Hola mundo".slice(-1, -1));
console.log("Hola mundo".slice(0, -1));

// Método split(): Dividir un texto en partes. Sintaxis: cadena.split([separador][,limite])
console.log("JavaScript".split(""));
console.log("Aprender desarrollo web".split(" "));
console.log("Buenos días, bienvenidos al curso de JavaScript".split(" ", 4));