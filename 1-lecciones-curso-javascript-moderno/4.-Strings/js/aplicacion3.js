// MÉTODOS PARA OBTENER LA POSICIÓN O ÍNDICE DE UN CARACTER O TEXTO

let texto = "Nuestra galaxia, la Vía Lactea, pertenece a un Grupo Local de 46 galaxias que a su vez pertenece a un supercúmulo de 5000 galaxias."

// Método charAt: Devuelve la posición de un caracter en una cadena de texto. Sintaxis: string.charAt(index)
console.log('El caracter que se encuentra en el índice 3 es ' + texto.charAt(3)); // devuelve "e"
console.log(texto.charAt()); // Devuelve el primer caracter
console.log(texto.charAt(texto.length-1)); // Devuelve el último caracter
console.log(texto.charAt(350)); // Devuelve un espacio en blanco porque no existe el índice 350

// Método indexOf(): Devuelve la posición de la primera vez que aparece una palabra o caracter. Sintaxis: string.indexOf(caracter, posición)
console.log(texto.indexOf("galaxia")); // Devuelve 8
console.log(texto.indexOf("a", 16)); // Devuelve 18
console.log(texto.indexOf("ñ")); // Devuelve -1 porque no existe la letra "ñ"
console.log(texto.indexOf("Galaxia")); // Devuelve -1 porque no existe la palabra "Galaxia" en el texto

// Método lastIndexOf(): Devuelve la posición de la última vez que aparece una palabra o carácter. Sintaxis: string.lastIndexOf(caracter, posición)
console.log(texto.lastIndexOf("i")); // Devuelve 127 porque la letra "i" por ultima vez aparece en la posición 127 
console.log(texto.lastIndexOf("a", 50)); // Devuelve 42 porque la letra "a" por ultima vez aparece en la posición 42

// Método search(): Devuelve la posición de un caracter en una cadena de texto. Sintaxis: string.search(caracter)
console.log(texto.search("pertenece")); // Devuelve 32 porque la palabra "pertenece" se encuentra en la posición 32