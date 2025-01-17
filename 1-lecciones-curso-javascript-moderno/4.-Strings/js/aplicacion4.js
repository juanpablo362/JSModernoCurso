// COMPROBACIÓN EN TEXTOS

let comprobar = "Ser o no ser, esa es la cuestión";

// Método startsWith(): Comprueba si el texto comienza con una palabra o caracter. Sintaxis: str.startsWith(stringBuscada[, posicion])
console.log(comprobar.startsWith("Ser")); // true
console.log(comprobar.startsWith("ser")); // false por que es case sensitive osea que es sensible a mayúsculas y minúsculas
console.log(comprobar.startsWith("es", 18)); // true por que empieza en la posición 18

// Método endsWith(): Comprueba si el texto termina con una palabra o caracter. Sintaxis: str.endsWith(StringBuscada[, longitud])
console.log(comprobar.endsWith("cuestión")); // true porque termina con la palabra "cuestion"
console.log(comprobar.endsWith("s", 20)); // true porque termina con la letra "s" en la posición 20
console.log(comprobar.endsWith("Cuestión")); // false por que es case sensitive

// Método includes(): Comprueba si el texto contiene otro texto. Sintaxis: str.includes(stringBuscada[, posicion])
console.log(comprobar.includes("esa es")); // true
console.log(comprobar.includes("Esa es", 14)); // false