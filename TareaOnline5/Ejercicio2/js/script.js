var container = document.getElementsByClassName('container')[0],
    tablero = document.getElementById('tablero'),
    secreta = document.getElementsByClassName('secreta')[0],
    letras = document.querySelectorAll('.letras div div'),
    perdida = document.querySelector('.perdida'),
    ganado = document.querySelector('.ganado');

var palabras = ["Cliente", "Servidor", "HLC", "Diseño", "Programacion", "Despliegue", "Empresa", "Lenguajes", "FOL", "Bases", "Redes", "Sistemas"],
    context = tablero.getContext('2d'),
    randomNumber,
    fallos = 0,
    partesCuerpo = [cabeza, cuerpo, brazos, piernas];


// dimensión del lienzo: ancho: 300 px, alto: 300 px
// función para dibujar soporte colgante usando tablero
function lienzo() {
    context.beginPath();
    context.moveTo(60, 300);
    context.lineTo(60, 2);
    context.lineTo(170, 2);
    context.lineTo(170, 25);
    context.lineWidth = 4;
    context.strokeStyle = '#607D8B';
    context.stroke();

}
lienzo();


// funcion para dibujar la cabeza usando tablero
function cabeza() {
    context.beginPath();
    context.arc(170, 60, 35, 0, 2 * Math.PI);
    context.moveTo(155, 50);
    context.arc(155, 50, 2, 0, 2 * Math.PI);
    context.moveTo(185, 50);
    context.arc(185, 50, 2, 0, 2 * Math.PI);
    context.moveTo(160, 75);
    context.lineTo(180, 75);
    context.lineWidth = 3;
    context.strokeStyle = '#C51109';
    context.stroke();

}


// función para dibujar el lomo usando tablero
function cuerpo() {
    context.beginPath();
    context.moveTo(170, 95);
    context.lineTo(170, 200);
    context.lineWidth = 3;
    context.strokeStyle = '#C51109';
    context.stroke();
}

// función para dibujar brazos usando tablero
function brazos() {
    // para dibujar la mano izquierda
    context.beginPath();
    context.moveTo(170, 135);
    context.lineTo(120, 105);
    context.lineWidth = 3;
    context.strokeStyle = '#C51109';
    context.stroke();
    // para dibujar la mano derecha
    context.beginPath();
    context.moveTo(170, 135);
    context.lineTo(220, 105);
    context.lineWidth = 3;
    context.strokeStyle = '#C51109';
    context.stroke();

}


// función para dibujar piernas usando tablero
function piernas() {
    // para dibujar la pierna izquierda 
    context.beginPath();
    context.moveTo(170, 200);
    context.lineTo(220, 230);
    context.lineWidth = 3;
    context.strokeStyle = '#C51109';
    context.stroke();
    // para dibujar la pierna derecha 
    context.beginPath();
    context.moveTo(170, 200);
    context.lineTo(120, 230);
    context.lineWidth = 3;
    context.strokeStyle = '#C51109';
    context.stroke();

}


// generar un número aleatorio - para seleccionar una palabra aleatoria de una matriz de palabras
randomNumber = Math.floor(Math.random() * palabras.length);
var palabra = palabras[randomNumber].split('');

// agregando divs a secreta div - para mostrar la palabra de prueba/conjeturas
// todo estará en blanco para empezar. Se rellenará si se pulsa la tecla de carácter derecha
for (var i = 0; i < palabra.length; i++) {
    var testChar = document.createElement('div');
    testChar.innerHTML = " ";
    secreta.appendChild(testChar);

};

// agregar detector de eventos al hacer clic en cualquier carácter
// - la función del juego es el controlador
for (var i = 0; i < letras.length; i++) {
    letras[i].addEventListener('click', game);
}


// corazón de la aplicación
function game(e) {
    // comprobando si el carácter presionado coincide con el carácter respectivo en la matriz de palabras (no palabras)
    // - si coincide, complete el carácter en '.secreta div'
    // - cambiando el fondo de la tecla a verde
    for (var i = 0; i < palabra.length; i++) {
        if (e.target.innerHTML === palabra[i].toLowerCase()) {
            var guessedChar = document.querySelectorAll('.secreta div');
            guessedChar[i].innerHTML = palabra[i];
            e.target.style.backgroundColor = "#4CAF50";
            e.target.style.color = "#FFF";
        }

    }

    // si el carácter no está presente:
    // - luego marcando la tecla roja
    // - y eliminando el detector de eventos
    // - agregar una parte del cuerpo de la matriz partesCuerpo
    if (palabra.indexOf(e.target.innerHTML.toLowerCase()) === -1 &&
        palabra.indexOf(e.target.innerHTML.toUpperCase()) === -1) {
        e.target.style.backgroundColor = "#E62117";
        e.target.style.color = "#FFF";
        e.target.removeEventListener('click', game);
        partesCuerpo[fallos]();
        fallos++;

    }

    // comprobando si las palabras de prueba y conjeturas han coincidido mediante la creación de una matriz temporal currentStatus
    var currentStatus = [];
    for (var j = 0; j < palabra.length; j++) {
        currentStatus[j] = document.querySelectorAll('.secreta div')[j].innerHTML;
    }

    // si coincide - juego ganado
    // muestra la ventana ganadora y elimina los detectores de eventos
    if (currentStatus.toString() == palabra.toString()) {
        container.style.opacity = 0.3;
        ganado.style.display = "block";

        for (var i = 0; i < letras.length; i++) {
            letras[i].removeEventListener('click', game);
        }
    }

    // fallos = 6 significa que todas las partes del cuerpo están sobre/colgadas y el juego ha terminado
    // muestra la ventana de juego y elimina los detectores de eventos
    // también muestra los caracteres que no fueron adivinados en un color diferente (rojo) 
    if (fallos === 4) {
        for (var i = 0; i < palabra.length; i++) {
            var missedChar = document.querySelectorAll('.secreta div');
            if (missedChar[i].innerHTML == " ") {
                missedChar[i].innerHTML = palabra[i];
                missedChar[i].setAttribute("style", "color: #FF5722;");
            };
        }

        container.style.opacity = 0.3;
        perdida.style.display = "block";

        for (var i = 0; i < letras.length; i++) {
            letras[i].removeEventListener('click', game);
        }

    }

}

// funcion para el boton finalizar
function finalizar() {
    for (var i = 0; i < palabra.length; i++) {
        var missedChar = document.querySelectorAll('.secreta div');
        if (missedChar[i].innerHTML == " ") {
            missedChar[i].innerHTML = palabra[i];
            missedChar[i].setAttribute("style", "color: #FF5722;");
        };
    }

    container.style.opacity = 0.3;
    perdida.style.display = "block";

    for (var i = 0; i < letras.length; i++) {
        letras[i].removeEventListener('click', game);
    }
}

// al ganar o perder se proporciona una opción para recargar la ventana
perdida.addEventListener('click', reload);
ganado.addEventListener('click', reload);

// funcion para cuando termina partida y cuando pulsa boton iniciar
function reload() {
    window.location.reload();
}