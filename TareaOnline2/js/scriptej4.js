//	Ejercicio 4. Implemente una aplicación en JavaScript que muestre la siguiente información:
var nombre = prompt("Introduzca su nombre y apellidos:"); // pedimos y guardamos nombre y apellidos
var dia = prompt("Dia de nacimento:"); // pedimos y guardamos dia de nacimiento
var mes = prompt("Mes de nacimento:  (Se introduce un número de 1 a 12)"); // pedimos y guardamos mes de nacimiento
var ano = prompt("Año de nacimento:"); // pedimos y guardamos año de nacimiento
var fecha = new Date(); // guardo fecha acutal
var year = fecha.getFullYear(); // guardo año acutal con getFullYear
var anoresul;
var estacion; // para guardar la estacion
// comprobamos que estacion era
if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4 || dia >= 21 && mes == 4) || (dia <= 21 && mes == 5 || dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)) {
    estacion = "Primavera";
} else if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10) || (dia >= 24 && mes == 10) || (dia <= 22 && mes == 11) || (dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) {
    estacion = "Otoño";

} else if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1) || (dia >= 21 && mes == 1) || (dia <= 19 && mes == 2) || (dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)) {

    estacion = "Invierno";
} else if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7) || (dia >= 24 && mes == 7) || (dia <= 23 && mes == 8) || (dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) {

    estacion = "Verano";
}
var seno = 180; // seno
var calSeno = Math.sin(seno); // calculo del seno
var num = [34, 67, 23, 75, 35, 19]; // definimos valores
var maximo = Math.max(...num); // calculmos el valor mayor
const min = 1; // definimos un minimo
const max = 100; // difinimos un maximo
var aleatorio = Math.random() * (max - min); // generamos num aleatorio y luego redondeamos al mostrarlo
var hora = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds(); // guardamos hora (Se mostrará la hora en formato de 24 horas o sea: 18:00 y no 06:00.)
var options = { year: 'numeric', month: 'long', day: 'numeric' }; // definimos formato de la fecha con options
var forFecha = fecha.toLocaleDateString("es-ES", options); //devuelve una cadena con una representación de la fecha sensible al lenguaje
const radio = 2.5; // definimos el radio
var area = Math.PI * Math.pow(radio, 2);
const lado1 = 1; // definimos el lado 1 
const lado2 = 2; // definimos el lado 2 
var hipo = Math.sqrt(lado1 * lado1 + lado2 * lado2) // calculamos la hipotenusa
platilla1 = (`<li>Buenos dias ${nombre}</li>
<li>Tu nombre tiene ${ nombre.length} caracteres, incluidos espacios.</li>
<li>La primera letra A de tu nombre esta en la posicion: ${ nombre.indexOf("a")} </li>
<li>La ultima letra A de tu nombre esta en la posicion: ${ nombre.lastIndexOf("a")} </li>
<li>Tu nombre menos las 5 primera es: ${ nombre.slice(5)} </li>
<li>Tu nombre en mayusculas es: ${ nombre.toUpperCase() } </li>
<li>Tu nombre en color rojo es: ${ nombre.fontcolor("red") } </li>
<li>Tu nombre en cursiva es: ${ nombre.italics() } </li>
`);
// definimos plantilla 2
platilla2 = (`<li>Tu edad es ${anoresul = year - ano}  años</li> 
<li>Naciste un/una feliz ${estacion} (invierno, primavera, verano, otoño) del año ${ano}. </li>
`);
// definimos plantilla 3
platilla3 = (`<li>	El seno de ${seno} es:${calSeno}</li> 
<li>El número mayor de (34,67,23,75,35,19) es: ${maximo} </li>
<li>Ejemplo de número aleatorio entre 1 y 100: ${Math.round(aleatorio)}</li> 
<li>La hora actual es: ${hora} </li> 
<li>La fecha actual es: ${forFecha}.</li> 
<li>El área de la circunferencia de radio 2.5 es: ${area.toFixed(2)}.</li> 
<li>La hipotenusa de un triángulo rectángulo de lados 1 y 2 es: ${hipo.toFixed(2)}</li>
`);

// Mostramos plantillas usando template String
document.write(` ${platilla1}`);
document.write(` ${platilla2}`);
document.write(` ${platilla3}`);
//En la Consola
console.log(`Hola ${platilla1}`);
console.log(`Hola ${platilla2}`);
console.log(`Hola ${platilla3}`);