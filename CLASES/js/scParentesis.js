/*
    Pedimos una cadena de texto que sabmos que puede contener parentesis.
    al realiza un script que extraiga la cadena que se encuerta ente los parenteis.
    ejemplo: si escribimos el texto "Hola (que) tal se mostra "que"
    si no existe el signo "(" mostrara una cadena vacia y si exite el signo "("
    pero no el signo ")" mostrara desde el primer parentesis hasta le final 
*/


var texto = prompt("Introduzca una palabra:") || "Sin palabra";
if (isNaN(texto)) {
    console.log("no es numero")
} else {

    console.log("si es numero")
}