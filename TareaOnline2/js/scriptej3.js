var url = window.location; // obtener url
var nombre = location.hostname; // obtener hostname
var camino = location.pathname; // obtener el camino al recurso
var protocolo = location.protocol; // obtener protocolo utilizado
var navegador; // declaramos navegador
// para comprobar que navegador es ya navigator.appName esta en desuso
if (navegador = navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    navegador = "chrome";
} else if (navegador = navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    navegador = "firefox";
} else if (navegador = navigator.userAgent.toLowerCase().indexOf('opera')) {
    navegador = "opera";
} else if (navegador = navigator.userAgent.indexOf("MSIE") > -1) {
    navegador = "Internt explore";
}
var idioma = navigator.language; // declaramos y guardamos idioma
var izquierdo = window.screenLeft; //declaramos y guardamos la distancia en píxels entre el borde izquierdo de la ventana y el de la pantalla.
var arriba = window.screenTop; //declaramos y guardamos istancia en píxels entre el borde superior de la ventana y el de la pantalla.
var java = window.navigator.javaEnabled(); // en desuso
if (window.navigator.javaEnabled() == true) {
    java = "Si tiena java";

} else {
    java = "No tiena java";

}

// definimos plantilla 
platilla1 = (`<li>La url de pagina actual es: ${url}</li> 
<li>Nombre del host: ${nombre}</li> 
<li>El camino al recurso, dentro de la URL es: ${camino} </li> 
<li>Protocolo utilizado: ${protocolo} </li>
<li>Nombre en código del navegador: ${navegador}</li>
<li>Lenguaje usado por el navegador: ${idioma}</li>
<li>La distancia izquierdo ${izquierdo} y superior de la ventana ${arriba}</li>
<li>${java}</li>

`);
// Mostramos plantillas usando template String
document.write(` ${platilla1}`);

//En la Consola
console.log(`Hola ${platilla1}`);