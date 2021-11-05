/*
Ejercicio 4. Escribir un programa que calcule el factorial de 5.
El factorial de un número entero N es una operación matemática que consiste en multiplicar todos los factores N x (N-1) x (N-2) x ... x 1.
Así, la factorial de 5 escrito como 5 es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120

*/
var num = 5;
var factorial = 1;
for (i = 1; i <= num; i++) {
    factorial *= i;

}


// Imprimo el nombre en la página

document.write(`El factorial de 5 es: ${factorial}`); // Usando template String

//En la Consola
console.log(`${factorial}`); // Usando template String

//Usando el Contenedor Bootstrap
//const elemento = document.getElementById("contenedor");
//elemento.innerHTML += `<p>El factorial de 5 es: ${factorial}</p>`;