//Ejercicio 2. Defina un script que solicite un nombre, la edad y muestre por consola el mensaje "Hola ____, tienes ____ años 
// y el año que viene tendrás ____ años"
var edad;
var nombre;
nombre = prompt("nombre:") || "Sin nombre";
edad = prompt("edad:") || "Sin edad";

//En la Consola
console.log("Hola " + nombre + " Tienes " + edad + " y el año que viene tendras " + (++edad) + " años");

//Usando el Contenedor Bootstrap
const elemento = document.getElementById("contenedor");
elemento.innerHTML += `<p>Hola ${nombre} hemos recibidos tus datos.</p>`