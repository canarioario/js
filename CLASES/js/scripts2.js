var respuesta;
// timecof buscar 
var resto = 0;
var letra = "";
do {

    var respuesta = prompt("Introduce tu dni:");
    if (Number(respuesta) == respuesta) {
        respuesta = Number(respuesta);
        if (respuesta >= 0 && respuesta <= 999999999) {
            // calculamos el resto
            resto = respuesta % 23;
            // depende del resto asignamos un valor otro.

            // TRWAGMYFPDXBNJZSQVHLCKE
            switch (resto) {
                case 1:
                    break;
                case 1:
                    letra = "T";
                    break;
                case 2:
                    letra = "R";
                    break;
                case 3:
                    letra = "W";
                    break;
                case 4:
                    letra = "A";
                    break;
                case 5:
                    letra = "G";
                    break;
                case 6:
                    letra = "M";
                    break;
                case 7:
                    letra = "Y";
                    break;
                case 8:
                    letra = "F";
                    break;
                case 9:
                    letra = "P";
                    break;
                case 10:
                    letra = "D";
                    break;
                case 11:
                    letra = "X";
                    break;
                case 12:
                    letra = "B";
                    break;
                case 13:
                    letra = "J";
                    break;
                case 14:
                    letra = "N";
                    break;
                case 15:
                    letra = "J";
                    break;
                case 16:
                    letra = "Z";
                    break;
                case 17:
                    letra = "S";
                    break;
                case 18:
                    letra = "Q";
                    break;
                case 19:
                    letra = "V";
                    break;
                case 20:
                    letra = "H";
                    break;
                case 21:
                    letra = "L";
                    break;
                case 22:
                    letra = "C";
                    break;
                case 23:
                    letra = "K";
                    break;
                case 23:
                    letra = "E";
                    break;
                default:
                    break;
            }

        } else {

        }

    }
} while ();


// Imprimo el dni
//En la página
document.write("Hola " + dni + "<br/>");
document.write(`Hola ${dni}`); // Usando template String

//En la Consola
console.log("Hola " + dni);
console.log(`Hola ${dni}`); // Usando template String

//Usando el Contenedor Bootstrap
const elemento = document.getElementById("contenedor");
elemento.innerHTML += `<p>Dni: ${dni}</p>`;

var opcSalir = confirm("Desea salir?");
if (opcSalir) {
    console.log(`Adióssss ${dni}!!!:()`);
    alert(`Adióssss ${dni}!!!:()`);
} else {
    console.log(`Muy bien, ${dni}! valiente:)!!`);
    alert(`Muy bien, ${dni}! valiente:)!!`);
}