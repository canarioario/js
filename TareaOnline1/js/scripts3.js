/*
Ejercicio 3. Defina un script que multiplique los 20 primeros números naturales.
*/
var num = 1;
var cont = 0;
var acum = 1;

for (i = 1; i <= 20; i++) {
    acum *= i;
}

// Imprimo el nombre en la página
document.write("La multplicacion de los 20 primeros numeros naturales " + acum + "<br/>");
// document.write(`Hola ${nombre}`); // Usando template String