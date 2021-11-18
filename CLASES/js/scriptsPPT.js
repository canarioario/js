// si nosotros elegimos piedra papel o tijero con un cuadro de texto 
// o hacemos un menu con 1 2 3 o palabra tal cual y reconocerlo o array o switc case
// si no hay valor preguntar otravez 
// recoger la jugada del jugadors
// conseguir la jugafa de la computadora con aleatorio entre 1 y 3 o 0 y 2 y cada num tiene un valor (piedra o papel )
// mostrar si hemos ganado o perdido 
// y contador de las veces que hemos ganados y la veces que hemos perido
// boton para jugar otra vez
function aleatorio(maximo, minimo) {
    var maximo = 0;
    var minimo = 0;
    var aleato = Math.random();
    var resultado = Math.round((aleato * (max - min)) + min);


    return resultado;
}

var opcion = prompt("Introduzca su mano(piedra,papel o tijera):") || "Sin jugada";
var jugada = ["piedra", "papel", "tijera"]
if (opcion.e) {

}
var num = aleatorio(num);
// Imprimo el cadena en la página
document.write(`el numero aleatorio es: ${num}</br>`);

// consola
console.log(`el numero aleatorio es: ${num}`);

//Usando el Contenedor Bootstrap
const elemento = document.getElementById("contenedor");
elemento.innerHTML += `<p>el numero aleatorio es: ${num}</p>`;