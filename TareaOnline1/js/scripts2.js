//Ejercicio 2. Defina un script que solicite un nombre, la edad y muestre por consola el mensaje "Hola ____, tienes ____ años 
// y el año que viene tendrás ____ años"
var nombre;
nombre = prompt("Nombre:") || "Sin Nombre";

// Imprimo el nombre en la página
document.write("Hola " + nombre + "<br/>");
// document.write(`Hola ${nombre}`); // Usando template String

//En la Consola
console.log("Hola " + nombre);
// console.log(`Hola ${nombre}`); // Usando template String

//Usando el Contenedor Bootstrap
const elemento = document.getElementById("contenedor");
elemento.innerHTML += `<p>Hola ${nombre}</p>`;

var opcSalir = confirm("Desea salir?");
if (opcSalir) {
    console.log(`Adiós ${nombre}!`);
    alert(`Adiós ${nombre}!`);
} else {
    console.log(`Muy bien, ${nombre}!`);
    alert(`Muy bien, ${nombre}!`);
}