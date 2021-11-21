function minimizar() { // funcion para miminzar 

    var w = window.innerWidth; // calculamos en ancho en pixeles
    var h = window.innerHeight; // calculamos la altura en pixeles
    h -= 20; // le restamos 20 px a la altura
    w -= 20; // y otros 20 px al ancho
    document.getElementById("contenedor").innerHTML = "Width: " + w + "<br>Height: " + h; // mostramos el alto y el ancho en el contenedor
    window.resizeTo(w, h); // se restamos 20 en el alto y en el ancho
    window.focus(); // establece el foco en la ventana actual

}

function maximizar() { // funcion maximizar 

    var w = window.innerWidth; // calculamos en ancho en pixeles
    var h = window.innerHeight; // calculamos la altura en pixeles
    h += 20; // sumamos 20 px a la altura
    w += 20; // y otros 20 px al ancho
    document.getElementById("contenedor").innerHTML = "Width: " + w + "<br>Height: " + h; // mostramos el alto y el ancho en el contenedor
    window.resizeBy(w, h); // sumamos 20 en el alto y ancho
    window.focus(); // establece el foco en la ventana actual.


}

function moverDerecha() { // funcion mover a la derecha
    var w = window.innerWidth; // calculamos en ancho en pixeles
    var h = window.innerHeight; // calculamos la altura en pixeles
    document.getElementById("contenedor").innerHTML = "Width: " + w + "<br>Height: " + h; // mostramos el alto y el ancho en el contenedor
    window.moveBy(20, 0); //  con moveBy desplazados a la derecha indicandole (20,0)
    window.focus(); // establece el foco en la ventana actual.

}

function moverIzquierda() { // funcion mover a la izquierda
    var w = window.innerWidth; // calculamos en ancho en pixeles
    var h = window.innerHeight; // calculamos la altura en pixeles
    document.getElementById("contenedor").innerHTML = "Width: " + w + "<br>Height: " + h; // mostramos el alto y el ancho en el contenedor
    window.moveBy(-20, 0); //  con moveBy desplazados a la izquiera indicandole ( -20,0)
    window.focus(); // establece el foco en la ventana actual.

}

function moverAbajo() { // funcion mover a la abajo
    var w = window.innerWidth; // calculamos en ancho en pixeles
    var h = window.innerHeight; // calculamos la altura en pixeles
    document.getElementById("contenedor").innerHTML = "Width: " + w + "<br>Height: " + h; // mostramos el alto y el ancho en el contenedor
    window.moveBy(0, 20); //  con moveBy desplazados a la abajo indicandole (0,20)
    window.focus(); // establece el foco en la ventana actual.
}

function moverArriba() { // funcion mover a la arriba
    var w = window.innerWidth; // calculamos en ancho en pixeles
    var h = window.innerHeight; // calculamos la altura en pixeles
    document.getElementById("contenedor").innerHTML = "Width: " + w + "<br>Height: " + h; // mostramos el alto y el ancho en el contenedor
    window.moveBy(0, -20); //  con moveBy desplazados a la arriba indicandole (0, -20)
    window.focus(); // establece el foco en la ventana actual.
}