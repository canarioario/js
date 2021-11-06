/*
Ejercicio 7.  Defina un script que permita calcular el área de 3 figuras geométricas distintas: triángulo, rectángulo y círculo.
 En primer lugar, se preguntará de qué figura se desea calcular el área y, a continuación, 
 se solicitarán los datos necesarios para calcular su área: triángulo = b*h/2; rectángulo = b* h  y  círculo = π*r2 (pi*radio al cuadrado).
Realice la implementación utilizando if y switch
*/

var respuestas;
var base = 0;
var altura = 0;
var radio = 0;
var solucion = 0;
var PI = 3.14159;

respuestas = prompt("Figura para calcular el area:");
if (respuestas == "triangulo" || respuestas == "TRIANGULO") {
    base = prompt("Introduce base:");
    altura = prompt("Introduce altura:");
    solucion = ((base * altura) / 2);
    // Imprimo el nombre en la página
    document.write(`El area del triangulo con base ${base} y altura ${altura} es  ${solucion}`);
    // Imprimo en consola
    console.log(solucion);

} else if (respuestas == "rectangulo" || respuestas == "RECTANGULO") {
    base = prompt("Introduce base:");
    altura = prompt("Introduce altura:");
    solucion = (base * altura);
    document.write(`El area del rectangulo con base ${base} y altura ${altura} es  ${solucion}`);
    // Imprimo en consola
    console.log(solucion);
} else if (respuestas == "circulo" || respuestas == "CIRUCLO") {
    radio = prompt("Introduce radio:");
    var cuadrado = Math.pow(radio, 2);
    solucion = (PI * cuadrado);
    document.write(`El area del circulo con radio ${radio} es  ${solucion}`);

}

//console.log(`Hola ${nombre}`); // Usando template String

//Usando el Contenedor Bootstrap
//const elemento = document.getElementById("contenedor");
//elemento.innerHTML += `<p>Hola ${nombre}</p>`;