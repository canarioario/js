/*
Ejercicio 6. Defina un script que imprima por pantalla los cuadrados (el número multiplicado por sí mismo) de los 20 primeros números naturales.
*/
var cuadrado = 0;
for (i = 1; i < 20; i++) {
    cuadrado = i * i;
    document.write(`${cuadrado}</br>`); // Usando template String

    console.log(` ${cuadrado}`);
}

// Imprimo el nombre en la página




//Usando el Contenedor Bootstrap
const elemento = document.getElementById("contenedor");
elemento.innerHTML += `<p>Defina un script que imprima por pantalla los cuadrados (el número multiplicado por sí mismo) de los 20 primeros números naturales.</p>`;