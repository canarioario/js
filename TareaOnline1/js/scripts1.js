// Ejercicio 1. Defina un script que cree dos variables cuyo nombre sea “uno” y “dos” he imprímelas por pantalla.
// Ponga un comentario con el tipo de dato que contienen.var uno;
var uno = 1;
var dos = 2; // usamos en ambas variables tipo var
// Imprimo el nombre en la página
document.write("Variable uno " + uno + " es tipo var");
//En la Consola
console.log("Variable uno " + uno + "<br/>" + "variable dos " + dos);
//Usando el Contenedor Bootstrap
const elemento = document.getElementById("contenedor");
elemento.innerHTML += `<p>Variable uno  ${uno} <br/> variable dos ${dos}</p>`;