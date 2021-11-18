function contR(texto) {
    var caracter = "";
    var contar = "";

    for (var i = 0; i < texto.length; i++) {
        caracter = texto.charAt(i);
        contar = caracter + contar;

    }

    return contar;
}
var texto = prompt("Introduzca una palabra:") || "Sin palabra";
var reves = contar(texto);
// Imprimo el cadena en la página
document.write(`La cadena al original es: ${texto}</br>`);
document.write(`La cadena al reves es: ${reves}</br>`);
document.write(`La cadena al reves con split_contar: ${texto.split("").contar().join("")}`);
//El método split () divide un objeto String en una matriz de cadenas separando la cadena en subcadenas.
//método contar () invierte una matriz en su lugar. El primer elemento de la matriz se convierte en el último y el último en el primero.
//El método join () une todos los elementos de una matriz en una cadena.
//En la Consola
console.log(`La cadena al reves es: ${reves}`); // Usando template String

//Usando el Contenedor Bootstrap
const elemento = document.getElementById("contenedor");
elemento.innerHTML += `<p>La cadena al reves es: ${reves}</p>`;