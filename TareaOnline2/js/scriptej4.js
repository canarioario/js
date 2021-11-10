var nombre = prompt("Introduzca su nombre y apellidos:");
var dia = prompt("Dia de nacimento:");
var mes = prompt("Mes de nacimento");
var ano = prompt("Año de nacimento:");
var fecha = new Date(); // guardo fecha acutal
var year = fecha.getFullYear(); // guardo año acutal con getFullYear
var anoresul = "";
//if (is_numeric(ano)) {
//   anoresul = year - ano; // POR AQU ESTAS, INTENTNADO SACAR EL AÑO DE NACIMIENTO
//} else {

//}
//is_numeric(ano)
// Imprimo el nombre en la página

platilla1 = (`<li>Buenos dias ${nombre}</li>
<li>Tu nombre tiene ${ nombre.length} caracteres, incluidos espacios.</li>
<li>La primera letra A de tu nombre esta en la posicion: ${ nombre.indexOf("a")} </li>
<li>La ultima letra A de tu nombre esta en la posicion: ${ nombre.lastIndexOf("a")} </li>
<li>Tu nombre menos las 5 primera es: ${ nombre.slice(5)} </li>
<li>Tu nombre en mayusculas es: ${ nombre.toUpperCase() } </li>
<li>Tu nombre en color rojo es: ${ nombre.fontcolor("red") } </li>
<li>Tu nombre en cursiva es: ${ nombre.italics() } </li>
`);
platilla2 = (`<li>Tu edad es años </li> 
<li>Naciste un/una feliz __ (invierno, primavera, verano, otoño) del año ___. </li>

`);


document.write(` ${platilla1}`);
document.write(` ${platilla2}`); // Usando template String

//En la Consola

console.log(`Hola ${nombre}`); // Usando template String

//Usando el Contenedor Bootstrap
// co0nst elemento = document.getElementById("contenedor");
// elemento.innerHTML += `<p>Hola ${nombre}</p>`;

var opcSalir = confirm("Desea salir?");
if (opcSalir) {
    console.log(`Adios ${nombre}!`);
}