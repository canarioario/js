function contar(cadena) {
    var numchar = cadena.length;
    cadena = cadena.toUpperCase();
    var caracter;
    var contar = 0;
    var vocales = ["A", "E", "I", "O", "U"];

    for (var i = 0; i < numchar; i++) {
        caracter = cadena.charAt(i);
        if (vocales.includes(caracter)) {
            contar++;
            console.log(caracter);
            console.log(contar);
        }


    }

    return contar;
}

var texto = prompt("Introduzca una palabra:") || "Sin palabra";
var num = contar(texto);
// Imprimo el cadena en la página
document.write(`${num} vocales en la palabra ${texto} </br>`);

//En la Consola
console.log(`${num} vocales en la palabra ${texto}`);

//Usando el Contenedor Bootstrap
const elemento = document.getElementById("contenedor");
elemento.innerHTML += `<p>nº de vocales ${num}</p>`;