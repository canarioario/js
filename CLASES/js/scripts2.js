var respuesta;
var resto = 0;
var letra = "";
do {

    var respuesta = prompt("Introduce tu respuesta:");
    if (Number(respuesta) == respuesta) {
        respuesta = Number(respuesta);
        if (respuesta >= 0 && respuesta <= 99999999) {
            // calculamos el resto
            resto = respuesta % 23;
            // depende del resto asignamos un valor otro.

            // TRWAGMYFPDXBNJZSQVHLCKE
            switch (resto) {
                case 0:
                    letra = "T";
                    break
                case 1:
                    letra = "R";
                    break
                case 2:
                    letra = "W";
                    break
                case 3:
                    letra = "A";
                    break
                case 4:
                    letra = "G";
                    break
                case 5:
                    letra = "M";
                    break
                case 6:
                    letra = "Y";
                    break
                case 7:
                    letra = "F";
                    break
                case 8:
                    letra = "P";
                    break
                case 9:
                    letra = "D";
                    break
                case 10:
                    letra = "X";
                    break
                case 11:
                    letra = "B";
                    break
                case 12:
                    letra = "N";
                    break
                case 13:
                    letra = "J";
                    break
                case 14:
                    letra = "Z";
                    break
                case 15:
                    letra = "S";
                    break
                case 16:
                    letra = "Q";
                    break
                case 17:
                    letra = "V";
                    break
                case 18:
                    letra = "H";
                    break
                case 19:
                    letra = "L";
                    break
                case 20:
                    letra = "C";
                    break
                case 21:
                    letra = "K";
                    break
                case 22:
                    letra = "E";
                    break
                default:
            }

        } else {

        }

    }
} while (resto < 0);


// Imprimo el dni en la página
document.write("DNI con letra " + respuesta + letra + "<br/>");
// document.write(`Hola ${respuesta}`); // Usando template String

//En la Consola
console.log("DNI con letra " + respuesta + letra);
// console.log(`Hola ${respuesta}`); // Usando template String

//Usando el Contenedor Bootstrap
const elemento = document.getElementById("contenedor");
elemento.innerHTML += `<p>DNI: ${respuesta + letra }</p>`;