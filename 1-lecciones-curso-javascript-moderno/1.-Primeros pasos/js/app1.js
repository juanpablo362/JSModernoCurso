// Crea una ventana modal para que el usuario ponga su nombre
let nombre = prompt("Escribe tu nombre y luego presiona OK");


if(nombre){
    alert("Hola " + nombre + ", bienvenido a este curso de JavaScript");
}
else if(nombre == ""){
    alert("Hola anonimo, presiona OK para continuar");
}

console.log(nombre);

console.warn("Este es un mensaje de advertencia");

console.error("Este es un mensaje de error");

