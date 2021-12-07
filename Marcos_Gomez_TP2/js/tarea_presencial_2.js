/*********************************
Autor: Marcos Gomez Martin
Fecha creación: 02/12/2021
 ***********************************/
var nombres = []; // array nombres
var dias = []; // array dias
var meses = []; // array meses
var anos = []; // array años
var exit = false; //condicion de salida
var cont = ""; // contenido
var i = 0; // contador 
var regex = /^[a-zA-Z ü, é, á, í, ó, ú, ñ, Ñ, Ü, É, Á, Ó,Ú]+$/;
// bucle para introducir datos en array
do { // permanece en bucle mientra exit sea distinto a true
    var nombre = prompt("Ingresa tu nombre:"); // pide nombre
    if (nombre == "final" || nombre == "FINAL" || nombre == "Final") { // comprobamos si es final para salir
        exit = true; // si es final pone a true
    } else if (nombre == null || nombre == "" || nombre.trim() == "") { // comprobar que el nombre no esta vacio o solo es espacios en blanco
        alert(`debe insertar nombres o la palabra FINAL.`);
        nombre = prompt("Ingresa tu nombre:"); // pide nombre // si es asi muestra alerta
    } else if (regex.test(nombre)) { // comprobamos que no contiene numero
        nombres[i] = nombre; // si no es final guardamos en array
    } else {
        alert("debe insertar nombres o la palabra FINAL."); // alerta por introducir numeros
    }
    var dia = prompt("Dia de nacimiento:") || "Sin dia"; // pedimos dia
    if (dia == "final" || dia == "FINAL" || dia == "Final") { // si se introduce final en dia 
        alert(`fecha inválida.`); // si es asi muestra alerta
    } else if (dia <= "0" || dia > "31") {
        alert(`El dia debe de ser de 1 a 31 segun el mes.`); // si es asi muestra alerta
    } else {
        dias[i] = dia; // si no guardamos en  array dias
    }
    var mes = prompt("Mes de nacimiento:") || "Sin mes"; // pedimos mes
    if (mes == "final" || mes == "FINAL" || mes == "Final") { // si se introduce final en mes 
        alert(`fecha inválida.`); // muestra alerta
    } else if (mes < "01" || mes > "12") {
        alert(`El mes debe de ser de 1 a 12.`); // si es asi muestra alerta
    } else {
        meses[i] = mes; // si no guardamos en  array meses
    }
    var ano = prompt("Año de nacimiento:") || "Sin año"; // pedimos año
    if (ano == "final" || ano == "FINAL" || ano == "Final") { // si se introduce final en año 
        alert(`fecha inválida.`); // si es asi muestra alerta
    } else if (ano <= "1901" || ano > "2021") {
        alert(`El año debe de ser minimo 1901 maximo 2021.`); // si es asi muestra alerta
    } else {
        anos[i] = ano; // si no guardamos en array años

    }

    i++; // incrementamos contador
}
while (exit != true); // fin bucle

// .charAt(0).toUpperCase() + nombres[i].slice(1).toLowerCase() // POR AQUI PONIENDO LA MAYUSCLA AL NOMBRE

// bucle para mostrar array 
for (var i = 0; i < nombres.length - 1; i++) { // quitamos uno para que no muestre el final
    cont += "<li>Nombre: " + nombres[i] + "</li>" + "<li> Fecha de nacimiento: " + dias[i] + "/" + meses[i] + "/" + anos[i] +
        " </li> -------------------------------------------------------------------------------- </br>"; // guardamos con este formato
}

// Imprimo el nombre en la página usando template String
document.write(`${cont}`);

//En la consola usando template String
console.log(`${cont}`);


// //Usando el Contenedor Bootstrap
// const elemento = document.getElementById("contenedor");
// elemento.innerHTML += `<p>Nombre: ${cont}</p>`;