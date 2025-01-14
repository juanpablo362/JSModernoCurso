// La consola de js

console.log("Hola te damos la bienvenida a nuestra página web");

// Variables con la palabra reservada let
let sumando1 = 150;
let sumando2 = 350;
console.log(sumando1 + sumando2);

// Con la palabra reservada let np podemos declarar varias  veces la misma variable
let descuento = 120;
descuento = 125;
console.log(descuento);

// No es obligatorio inicializar una variable, podermos declararles y asignarlle un valor después
let nombre = "Cynthia";
let edad;
edad = 25;
console.log(nombre, edad);

// Declaración masivas de variables: Metodo 1
let usuario = "Thomas", nacionalidad = "Canadiense", puesto = "Analista de datos Senior";

// Declaración masivas de variables: Metodo 2
let producto = "Laptop",
narca ="xioami",
precio = 1000;

//Actualización de variables
let oferta = 49.99;
oferta = 29.99;
console.log(oferta);

// JavaScript es un lenguaje de programación de tipado dinámico, lo que significa que no es
//  necesario declarar el tipo de dato de una variable

let z = "Eston es un texto";
console.log(typeof z);

z=50;
console.log(typeof z);

z = "50";
console.log(typeof z);

z = 6<2;
console.log(typeof z);

z={nombre: "Juan", edad: 25, usuarioRegistrado: true};
console.log(typeof z);