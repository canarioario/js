/*
 * Utiliza este archivo para la resolucion del ejercicio 1.
 * MARCOS GÓMEZ MARTÍN 
 */

var fecha = new Date();

function devolverDiaSemana(fecha) {
    var dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    console.log(dias[fecha.getDay()]);
    console.log(fecha)
    document.getElementById("dia").innerHTML = dias[fecha.getDay()];
}
devolverDiaSemana(fecha);