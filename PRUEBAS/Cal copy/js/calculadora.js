function escribir(n) {

    var caja2 = document.f1.txtcaja2.value;

    if (caja2 == "0" && n != ".") {

        cajao = caja2.replace("0", "")

        document.f1.txtcaja2.value = cajao + n;

    } else {

        document.f1.txtcaja2.value = caja2 + n;

    }

}

document.addEventListener('DOMContentLoaded', function() {
    // your code here

    var display = document.getElementsByClassName('display')[0];
    var seven = document.getElementsByName('seven')[0];
    var eight = document.getElementsByName('eight')[0];
    var nine = document.getElementsByName('nine')[0];
    var four = document.getElementsByName('four')[0];
    var five = document.getElementsByName('five')[0];
    var six = document.getElementsByName('six')[0];
    var one = document.getElementsByName('one')[0];
    var two = document.getElementsByName('two')[0];
    var three = document.getElementsByName('three')[0];
    var zero = document.getElementsByName('zero')[0];

    seven.addEventListener('click', clickSeven);
    eight.addEventListener('click', clickEight);
    nine.addEventListener('click', clickNine);
    four.addEventListener('click', clickFour);
    five.addEventListener('click', clickFive);
    six.addEventListener('click', clickSix);
    one.addEventListener('click', clickOne);
    two.addEventListener('click', clickTwo);
    three.addEventListener('click', clickThree);
    zero.addEventListener('click', clickZero);

    function clickSeven(event) {
        display.value += this.value;
    }

    function clickEight(event) {
        display.value += this.value;
    }

    function clickNine(event) {
        display.value += this.value;
    }

    function clickFour(event) {
        display.value += this.value;
    }

    function clickFive(event) {
        display.value += this.value;
    }

    function clickSix(event) {
        display.value += this.value;
    }

    function clickOne(event) {
        display.value += this.value;
    }

    function clickTwo(event) {
        display.value += this.value;
    }

    function clickThree(event) {
        display.value += this.value;
    }

    function clickZero(event) {
        display.value += this.value;
    }





});