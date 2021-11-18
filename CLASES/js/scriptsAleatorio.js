function aleatorio(maximo, minimo) {
    var maximo = 0;
    var minimo = 0;
    var aleato = Math.random();
    var resultado = Math.round((aleato * (max - min)) + min);


    return resultado;
}
var min = Number(prompt("Introduzca el minimo:") || "Sin minimo");
var max = Number(prompt("Introduzca el maximo:") || "Sin maximo");
var num = aleatorio(num);
// Imprimo el cadena en la página
document.write(`el numero aleatorio es: ${num}</br>`);

// consola
console.log(`el numero aleatorio es: ${num}`);

//Usando el Contenedor Bootstrap
const elemento = document.getElementById("contenedor");
elemento.innerHTML += `<p>el numero aleatorio es: ${num}</p>`;