var nombre, dia, mes, anio, sigue = true;
var simples = new Array();
var compuestos = new Array();
var letras = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Á', 'É', 'Í', 'Ó', 'Ú', 'Ü'];

do {
    // Se introduce el nombre
    nombre = prompt("Introduce el nombre");
    if (null == nombre || undefined == nombre || nombre.trim() === "") {
        //si el nombre es vacio
        alert("Introduce nombres o la palabra final");
    } else if (nombre.toUpperCase() == "FINAL") {
        //Si se introduce FINAL
        sigue = false;
    } else {
        //Si se introduce un caracter especial
        let nombre_ok = true;
        for (let index = 0; index < nombre.length; index++) {
            let char = nombre.toUpperCase().charAt(index);
            if (!letras.includes(char)) {
                alert("Introduce nombres o la palabra final");
                nombre_ok = false;
                break;
            }
        }
        //si el nombre es valido pide la fecha
        if (nombre_ok) {
            dia = prompt("Introduce el dia de nacimiento");
            mes = prompt("Introduce el mes de nacimiento");
            anio = prompt("Introduce el anio de nacimiento");

            if (!comprueba_fecha(dia, mes, anio)) {
                alert("la fecha es erronea");
            } else {
                var nombre_mostrar = imprimir_nombre(nombre.trim());
                var fecha_mostrar = imprimir_fecha(dia, mes, anio);
                var es_mayor = mayor_de_edad(dia, mes, anio);
                var linea = nombre_mostrar + ", " + fecha_mostrar + ";<br>";
                if (es_compuesto(nombre_mostrar)) {
                    if (!compuestos.includes(nombre_mostrar)) {
                        compuestos.push(nombre_mostrar);
                    }
                    if (!es_mayor) {
                        linea = '<li style="color:red;">' + linea + '</li>';
                    } else {
                        linea = '<li>' + linea + '</li>';
                    }
                    document.getElementById("compuestos").innerHTML += linea;
                } else {
                    if (!simples.includes(nombre_mostrar)) {
                        simples.push(nombre_mostrar);
                    }
                    if (!es_mayor) {
                        linea = '<li style="color:red;">' + linea + '</li>';
                    } else {
                        linea = '<li>' + linea + '</li>';
                    }
                    document.getElementById("simples").innerHTML += linea;
                }
            }
        }
    }
} while (sigue);

document.getElementById("cuenta").innerHTML = `Se introdujeron ${compuestos.length + simples.length} nombres distintos.
Entre ellos hay ${simples.length} nombres simples distintos y ${compuestos.length} nombres compuestos distintos.`

//Devuelve true si la fecha es correcta y false en caso contrario
function comprueba_fecha(day, month, year) {
    let fecha_ok = true;

    if (Number(day) == day && Number(month) == month && Number(year) == year) {
        // en la fecha solo se han introducido numeros
        day = Number(day);
        month = Number(month);
        year = Number(year);

        if (day < 1 || day > 31 || year < 1901 || year > 2021) {
            fecha_ok = false;
        } else {
            switch (month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    //no hacemos nada porque ya sabemos que el num esta entre 1 y 31
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    if (day > 30) {
                        fecha_ok = false;
                    }
                    break;
                case 2:
                    if (((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) && day > 29) {
                        fecha_ok = false;
                    } else if (day > 28) {
                        fecha_ok = false;
                    }
                    break;
                default:
                    fecha_ok = false;
                    break;
            }
        }
    } else {
        //la fecha no es valida
        fecha_ok = false;
    }
    return fecha_ok;
}

//Devuelve true si es un nombre compuesto y false en caso contrario
function es_compuesto(name) {
    var nombre_array = name.trim().split(" ");
    //ver si es simple o compuesto
    if (nombre_array.length == 1) {
        //nombre simple
        return false;
    } else {
        //nombre compuesto
        return true;
    }
}

//Devuelve una cadena con el nombre en el formato indicado.
//Primera letra en mayuscula y el resto en minuscula
function imprimir_nombre(name) {
    var nombre_array = name.split(" ");
    var name_to_print = "";
    //ver si es simple o compuesto
    if (nombre_array.length == 1) {
        //nombre simple
        name_to_print = name.charAt(0).toUpperCase();
        for (let index = 1; index < name.length; index++) {
            const element = name.charAt(index).toLowerCase();
            name_to_print += element;
        }
    } else {
        //nombre compuesto
        for (let palabra_ind = 0; palabra_ind < nombre_array.length; palabra_ind++) {
            const palabra = nombre_array[palabra_ind];
            if (palabra_ind != 0) {
                name_to_print += " ";
            }
            name_to_print += palabra.charAt(0).toUpperCase();
            for (let letra_ind = 1; letra_ind < palabra.length; letra_ind++) {
                const letra = palabra.charAt(letra_ind).toLowerCase();
                name_to_print += letra;
            }
        }
    }
    return name_to_print;
}

//Devuelve una cadena con la fecha en el formato indicado.
//En este caso dd/mm/aaaa
function imprimir_fecha(day, month, year) {
    var fecha_to_print = "";
    if (Number(day) == day && Number(month) == month && Number(year) == year) {
        // en la fecha solo se han introducido numeros
        day = Number(day);
        month = Number(month);
        year = Number(year);
        if (day < 10) {
            fecha_to_print += "0" + day;
        } else {
            fecha_to_print += day;
        }
        fecha_to_print += "/";
        if (month < 10) {
            fecha_to_print += "0" + month;
        } else {
            fecha_to_print += month;
        }
        fecha_to_print += "/";
        fecha_to_print += year;
    }
    return fecha_to_print;
}

//Devuelve true si hace mas de 18 años de esa fecha y false en caso contrario
function mayor_de_edad(day, month, year) {
    if (Number(day) == day && Number(month) == month && Number(year) == year) {
        // en la fecha solo se han introducido numeros
        day = Number(day);
        month = Number(month);
        year = Number(year);
    }
    var fecha = new Date(year, month, day);
    //1000 * 60 * 60 * 24 * 365 * 18 = milisegundos en 18 años
    var fecha_18 = new Date().getTime() - 1000 * 60 * 60 * 24 * 365 * 18;
    return fecha.getTime() < fecha_18;
}