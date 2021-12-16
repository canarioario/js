/* SCRIPT PARA EL EJERCICIO DE LA UNIDAD 2 */
/* MARCOS GOMEZ MARTIN */
var multi = "";
var caracter = "";
var valido;
var a;
var b;
var resultado;
multi = prompt("Introduzca multiplicacion:"); // pedimos mutliplicacion
if (multi.trim() != "") { // si con el metodo trim no se queda vacia que haga el resto 
    for (var i = 0; i < multi.length; i++) { // bucle para recorrer multi hasta el final
        caracter = multi.charAt(i); // guardamos cada caracter es nuestras variable caracter
        if (caracter == "x" || caracter == "X" || caracter == "*") { // si contine alguna de estas opciones
            console.log("contiene el caracter de multiplicar");
            valido = true; // pone true a valido
        } else {
            valido = false; // sino a false
        }
    }
} else { // sino muestra alerta
    alert(`No has introducido nada.`);
}
var a = multi[0]; // asignamos valor de la posicion 0 a 
var b = multi[2]; // asignamos valor de la posicion 0 b 
var validarA;
var validarB;
if (isNaN(a)) { // comprobamos si a es un numero
    console.log("NO ES UN NUMERO")
    validarA = false;
} else {
    console.log("SI ES UN NUMERO")
    validarA = true;


}
if (isNaN(b)) { // y si b tambien es lo es
    console.log("NO ES UN NUMERO")
    validarB = false;
} else {
    console.log("SI ES UN NUMERO")
    validarB = true;

}
if (validarA == true && validarB == true) {

    for (var j = 0; j < 11; j++) { // bucle para la tabla de multiplicar
        resultado = a * j; // variable que guarda resultado 
        var texto = a + " x " + j + " = " + resultado; // texto para mostrar
        const elemento = document.getElementById("cabecera");
        //console.log(a + "x" + j + "=" + a * j);
        if (j == b) { // cuando el valor de j es igual que b
            elemento.innerHTML += `<li>${texto.bold() }</li>`; // ponemos en negrita  
        } else if (j != b) { // sino es 
            elemento.innerHTML += `<li>${texto}</li>`; // mostramos el texto normal
        }
    }

} else {

    console.log("multiplicacion no valida.")
}
document.getElementById("titulo").innerHTML = "Se ha solicitado una multiplicacion por " + a; // mostramos titulo
document.getElementById("cancelado").innerHTML = " ";
//console.log("Numero 1: " + a)
//console.log("Numero 2: " + b)