var nombre;
nombre = prompt("Nombre:") || "Sin Nombre";

// Imprimo el nombre
//En la página
document.write("Hola " + nombre + "<br/>");
document.write(`Hola ${nombre}`); // Usando template String

//En la Consola
console.log("Hola " + nombre);
console.log(`Hola ${nombre}`); // Usando template String

//Usando el Contenedor Bootstrap
const elemento = document.getElementById("contenedor");
elemento.innerHTML += `<p>Hola ${nombre}</p>`;

var opcSalir = confirm("Desea salir?");
if (opcSalir) {
  console.log(`Adióssss ${nombre}!!!:()`);
  alert(`Adióssss ${nombre}!!!:()`);
} else {
  console.log(`Muy bien, ${nombre}! valiente:)!!`);
  alert(`Muy bien, ${nombre}! valiente:)!!`);
}
