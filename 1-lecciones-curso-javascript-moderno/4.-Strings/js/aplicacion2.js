// MÉTODOS Y PROPIEDADES DE LOS STRINGS

// Propiedad Length: número de caracteres que contiene un texto (Sintaxis: string.length)
let caracteres = "Bienvenidos al curso de JavaScript Moderno";
console.log(caracteres.length); // 42

//  -------- MÉTODOS PARA MODIFICAR EL CONTENIDO DE UN STRING --------

// Método .concat(): concatena cadenas de texto (Sintaxis: string.concat())
let unir1 = "Hola a todos,"; 
let unir2 = "vamos a comenzar la lección";
let union = unir1.concat(" ",+ unir+2); 
console.log(union); // Hola a todos, vamos a comenzar la lección

// Método .repeat(): repite un texto un determinado número de veces (Sintaxis: string.repeat(count))
let repeticion = "Buenos días! ";
console.log(repeticion.repeat(5)); // Repite 5 veces el texto "Buenos días! "

// Método toUpperCase(): Cambia a mayúsculas (Sintaxis: string.toUpperCase())
let convertirMayusculas = "Bienvenidos al curso de JavaScript Moderno";
console.log(convertirMayusculas.toUpperCase()); //BIENVENIDOS AL CURSO DE JAVASCIPT MODERNO

// Método toLowerCase(): Cambia a minúsculas (Sintaxis: string.toLowerCase())
let convertirMinusculas = "Bienvenidos al curso de JavaScript Moderno";
console.log(convertirMinusculas.toLowerCase()); // bievenidos al curso de javascripr moderno

// Método trimStart(): Elimina los espacios en blanco al principio de la cadena de texto (Sintaxis: string.trimStart()), se parte de la izquierda
// Método trimEnd(): Elimina los espacios en blanco al final de la cadena de texto (Sintaxis: string.trimEnd()) se parte de la derecha
// Método trim(): Elimina los espacios en blanco en ambos extremos de la cadena de texto (Sintaxis: string.trimS())
let recortar = "                      info@email.com                            ";
console.log(recortar.trim()); // Elimina los espacios en blanco al principio y al final de la cadena de texto 

// Método replace(): Reemplaza fragmentos de una cadena de texto (Sintaxis: string.replace(searchValue, newValue))
let reemplazar = "La señora Graham vive en una casa de color azul y tiene un automóvil de color azul";
// console.log(reemplazar.replace("azul", "verde")); // Reemplaza la primera ocurrencia de la palabra "azul" por "verde"

// Método replaceAll()
console.log(reemplazar.replaceAll("azul", "verde")); // Reemplaza todas las ocurrencias de la palabra "azul" por "verde"