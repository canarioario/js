/* Creee una funcion unique(arr) que deberia de devolver un array con elementos unicos*/
let nombres = new Array("Paco", "Luis", "Jose", "Paco", "Pepe", "Felix", "Jose");

function Arrayunico(arr) {
    let unicoArr = Array.from(new Set(arr));
    return unicoArr;
}

document.write(Arrayunico(nombres))
console.log(Arrayunico(nombres));