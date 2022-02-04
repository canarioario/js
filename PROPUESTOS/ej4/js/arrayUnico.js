/* Creee una funcion unique(arr) que deberia de devolver un array con elementos unicos*/
let nombres = new Array("Paco", "Luis", "Jose", "Paco", "Pepe", "Felix", "Jose");
let coches = new Array("Ford", "Volvo", "Ford", "Renault", "Ferrari", "Volvo");

function Arrayunico(arr) {
    let unicoArr = Array.from(new Set(arr));
    return unicoArr;
}
document.write("-----------ARRAY DE NOMBRES--------<br>");
document.write(Arrayunico(nombres) + "<br>");
document.write("-----------ARRAY DE COCHES--------<br>");
document.write(Arrayunico(coches));
console.log(Arrayunico(nombres));