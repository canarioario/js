/*
 * Utiliza este archivo para la resolucion del ejercicio 2.
 * MARCOS GÓMEZ MARTÍN 
 */

var tamano = prompt("Introduzca su tamaño:"); // pedimos tamaño
var fila = prompt("Numero de filas:"); // pedimos 
var columna = prompt("Numero de columnas: "); // pedimos
var siNum = false;
var con = 0;
if (tamano > 3 && tamano < 30) {
    if (isNaN(tamano)) {
        console.log("NO ES UN NUMERO")
    } else {
        siNum = true;
        console.log("SI ES UN NUMERO")
        con++
    }
    if (isNaN(fila)) {
        console.log("NO ES UN NUMERO")
    } else {
        siNum = true;
        console.log("SI ES UN NUMERO")
        con++
    }
    if (isNaN(columna)) {
        console.log("NO ES UN NUMERO")
    } else {
        console.log("SI ES UN NUMERO")
        con++
        siNum = true;
    }
    var array = new Array(tamano);
    for (j = 0; j < fila; j++) {
        console.log("Fila" + "0")
        for (i = 0; i < columna; i++) {
            console.log("columna" + "0")
        }
    }

} else if (tamano < 3 && tamano < 30) {

    alert("El tamaño de la plantilla estará entre 3 y 30, ambos inclusive.");
}