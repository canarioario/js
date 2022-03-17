document.addEventListener('DOMContentLoaded', function() {
    // your code here

    var display = document.getElementsByClassName('display')[0];

    var siete = document.getElementsByName('siete')[0];
    var ocho = document.getElementsByName('ocho')[0];
    var nueve = document.getElementsByName('nueve')[0];
    var cuatro = document.getElementsByName('cuatro')[0];
    var cinco = document.getElementsByName('cinco')[0];
    var seis = document.getElementsByName('seis')[0];
    var uno = document.getElementsByName('uno')[0];
    var dos = document.getElementsByName('dos')[0];
    var tres = document.getElementsByName('tres')[0];
    var cero = document.getElementsByName('cero')[0];

    siete.addEventListener('click', clicksiete);
    ocho.addEventListener('click', clickocho);
    nueve.addEventListener('click', clicknueve);
    cuatro.addEventListener('click', clickcuatro);
    cinco.addEventListener('click', clickcinco);
    seis.addEventListener('click', clickseis);
    uno.addEventListener('click', clickuno);
    dos.addEventListener('click', clickdos);
    tres.addEventListener('click', clicktres);
    cero.addEventListener('click', clickcero);

    function clicksiete(event) {
        display.value += this.value;
    }

    function clickocho(event) {
        display.value += this.value;
    }

    function clicknueve(event) {
        display.value += this.value;
    }

    function clickcuatro(event) {
        display.value += this.value;
    }

    function clickcinco(event) {
        display.value += this.value;
    }

    function clickseis(event) {
        display.value += this.value;
    }

    function clickuno(event) {
        display.value += this.value;
    }

    function clickdos(event) {
        display.value += this.value;
    }

    function clicktres(event) {
        display.value += this.value;
    }

    function clickcero(event) {
        display.value += this.value;
    }





});