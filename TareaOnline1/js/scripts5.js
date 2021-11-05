/*
Ejercicio 5. Defina un script que muestre la tabla de multiplicar del número 7 usando los distintos tipos de bucles (3 tipos).
*/
var num = 7;
var tabla1 = 0;
document.write(`<strong>CON FOR:</br></strong>`);
for (i = 1; i <= 10; i++) {
    tabla1 = num * i;
    document.write(`${num}x${i} = ${tabla1}</br>`); // Usando for
}
document.write(`<strong>CON WHILE:</br></strong>`); // Usando while
var cont = 1;
var tabla2 = 0;
while (cont <= 10) {
    tabla2 = num * cont;

    document.write(`${num}x${cont} = ${tabla2}</br>`); // Usando while
    cont++;
}
document.write(`<strong>CON DO WHILE:</strong></br>`); // Usando do while
var cont2 = 1;
var tabla3 = 0;
do {
    tabla3 = num * cont2;

    document.write(`${num}x${cont2} = ${tabla3}</br>`); // Usando do while
    cont2++;
} while (cont2 <= 10);

console.log(`${tabla3}`); // Usando template String

//Usando el Contenedor Bootstrap
const elemento = document.getElementById("contenedor");
elemento.innerHTML += `<p>Tablas de multiplicar del 7 con los distintos tipos de bucles </p>`;