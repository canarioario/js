let diputado1 = new Diputado("Pepe", "Perez", "49113346c", 1996, "Partido de mi casa");
let diputado2 = new Diputado("Jose", "Lopez", "15637125t", 1978, "Partido de mi casa");
let diputado3 = new Diputado("Felix", "Gomez", "80909565g", 1973, "Partido de mi casa");
let diputado4 = new Diputado("Ana", "Martin", "49044190w", 1986, "Partido del vecino");
let diputado5 = new Diputado("Lisa", "Garcia", "73890803z", 1989, "Partido del vecino");
let diputado6 = new Diputado("Lolo", "Sanchez", "44521447w", 1966, "Partido del vecino");
let diputado7 = new Diputado("Pilar", "Gonzalez", "29142108g", 1976, "Partido del vecino");
let diputado8 = new Diputado("Isabel", "Ruiz", "47960050j", 1986, "Partido del vecino");
let diputado9 = new Diputado("Paco", "Cabreras", "49113346c", 1934, "Partido del vecino");
let partido1 = new Partido("Partido del mi casa", 1963); //bn
let partido2 = new Partido("Partido del vecino", 1949);
let parlamento = new Parlamento("Andalucia", 200); //bn
let partidos = new Array(partido1, partido2);
class Identidad {

    static numDNI(num, length) {
        var r = "" + num;
        while (r.length < length) {
            r = "0" + r;
        }
        return r;
    }
    static generar_letra(respuesta) {
        var resto = 0;
        var letra = "";
        do {
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

                }
            }
        } while (resto < 0);
        return respuesta + letra; // devuelve dni con letra
    }
    static chain = "TRWAGMYFPDXBNJZSQVHLCKET";
    static LetraDNI(dni) {
        var pos = dni % 23;
        var letter = Identidad.chain.substring(pos, pos + 1);
        return letter; // devuelve la letra del dni para recogerla en el motodo 
    }
    static generar_dni() {
        let num = Math.floor((Math.random() * 100000000));
        var sNum = Identidad.numDNI(num, 8);
        return sNum + Identidad.LetraDNI(sNum);
    }

    static comprobarDNI(respuesta) {
        let dni = respuesta.substring(0, respuesta.length - 1);
        let letra_in = respuesta.substr(-1);
        let result;
        if ((dni >= 0) && (dni <= 99999999)) {
            var letra_calculada = Identidad.chain[dni % 23];
            if (letra_in == letra_calculada) {
                result = ('DNI VALIDO: ' + dni + letra_calculada);
            } else {
                result = (' La letra ' + letra_in + ' no coincide deberia ser → ' + letra_calculada);
            }
        } else {
            alert('No es correcto el valor introducido');
        }
        return result;
    }

    /*
    Puedes apoyarte en este método para la generación aleatoria de los datos a tratar. Puedes modificar lo que necesites pero debes manejar los datos en un Set de Diputados.
    Entrada:
    partidos: Array de elementos de tipo Partido.
    parlamento_dipu: Número que indica el número de diputados que tiene un parlamento.
    Salida:
    Set(Diputado)
    */
    static genera_camara(partidos, parlamento_dipu) {

        //Listas de nombres y apellidos para generar Diputados de manera aleatoria
        let array_nombres = new Array("ANTONIO", "MANUEL", "JOSE", "FRANCISCO", "DAVID", "JUAN", "JAVIER", "JOSE ANTONIO", "DANIEL", "JOSE LUIS", "FRANCISCO JAVIER", "CARLOS", "JESUS", "ALEJANDRO", "MIGUEL", "JOSE MANUEL", "RAFAEL", "MIGUEL ANGEL", "PABLO", "PEDRO", "ANGEL", "SERGIO", "JOSE MARIA", "FERNANDO", "JORGE", "LUIS", "ALBERTO", "ALVARO", "JUAN CARLOS", "ADRIAN", "DIEGO", "JUAN JOSE", "RAUL", "IVAN", "JUAN ANTONIO", "RUBEN", "ENRIQUE", "OSCAR", "RAMON", "ANDRES", "VICENTE", "JUAN MANUEL", "SANTIAGO", "JOAQUIN", "VICTOR", "MARIO", "EDUARDO", "ROBERTO", "JAIME", "FRANCISCO JOSE", "MARCOS", "IGNACIO", "HUGO", "ALFONSO", "JORDI", "RICARDO", "SALVADOR", "GUILLERMO", "GABRIEL", "MARC", "EMILIO", "MOHAMED", "GONZALO", "JULIO", "JULIAN", "MARTIN", "JOSE MIGUEL", "TOMAS", "AGUSTIN", "NICOLAS", "JOSE RAMON", "SAMUEL", "ISMAEL", "JOAN", "CRISTIAN", "FELIX", "LUCAS", "AITOR", "HECTOR", "JUAN FRANCISCO", "IKER", "ALEX", "JOSE CARLOS", "JOSEP", "SEBASTIAN", "MARIANO", "CESAR", "ALFREDO", "DOMINGO", "JOSE ANGEL", "FELIPE", "VICTOR MANUEL", "RODRIGO", "JOSE IGNACIO", "MATEO", "LUIS MIGUEL", "JOSE FRANCISCO", "JUAN LUIS", "XAVIER", "ALBERT", "MARIA CARMEN", "MARIA", "CARMEN", "ANA MARIA", "JOSEFA", "MARIA PILAR", "ISABEL", "LAURA", "MARIA DOLORES", "MARIA TERESA", "ANA", "CRISTINA", "MARTA", "MARIA ANGELES", "LUCIA", "FRANCISCA", "MARIA ISABEL", "MARIA JOSE", "ANTONIA", "DOLORES", "SARA", "PAULA", "ELENA", "MARIA LUISA", "RAQUEL", "ROSA MARIA", "PILAR", "MANUELA", "CONCEPCION", "MARIA JESUS", "MERCEDES", "JULIA", "BEATRIZ", "NURIA", "SILVIA", "ALBA", "IRENE", "ROSARIO", "JUANA", "TERESA", "PATRICIA", "ENCARNACION", "MONTSERRAT", "ANDREA", "ROCIO", "MONICA", "ALICIA", "MARIA MAR", "ROSA", "SONIA", "SANDRA", "MARINA", "ANGELA", "SUSANA", "NATALIA", "YOLANDA", "MARGARITA", "MARIA JOSEFA", "CLAUDIA", "SOFIA", "EVA", "CARLA", "MARIA ROSARIO", "INMACULADA", "MARIA MERCEDES", "ANA ISABEL", "ESTHER", "NOELIA", "VERONICA", "NEREA", "CAROLINA", "ANGELES", "DANIELA", "MARIA VICTORIA", "EVA MARIA", "INES", "MIRIAM", "LORENA", "MARIA ROSA", "MARIA ELENA", "ANA BELEN", "VICTORIA", "MARIA CONCEPCION", "AMPARO", "MARTINA", "MARIA ANTONIA", "ALEJANDRA", "LIDIA", "CATALINA", "CELIA", "MARIA NIEVES", "CONSUELO", "FATIMA", "OLGA", "AINHOA", "GLORIA", "CLARA", "MARIA CRISTINA", "MARIA SOLEDAD", "EMILIA");
        let array_apellidos = new Array("GARCIA", "RODRIGUEZ", "GONZALEZ", "FERNANDEZ", "LOPEZ", "MARTINEZ", "SANCHEZ", "PEREZ", "GOMEZ", "MARTIN", "JIMENEZ", "HERNANDEZ", "RUIZ", "DIAZ", "MORENO", "MUÑOZ", "ALVAREZ", "ROMERO", "GUTIERREZ", "ALONSO", "NAVARRO", "TORRES", "DOMINGUEZ", "VAZQUEZ", "RAMOS", "RAMIREZ", "GIL", "SERRANO", "MOLINA", "BLANCO", "MORALES", "SUAREZ", "ORTEGA", "CASTRO", "DELGADO", "ORTIZ", "MARIN", "RUBIO", "NUÑEZ", "SANZ", "MEDINA", "IGLESIAS", "CASTILLO", "CORTES", "GARRIDO", "SANTOS", "GUERRERO", "LOZANO", "CANO", "MENDEZ", "CRUZ", "PRIETO", "FLORES", "HERRERA", "PEÑA", "LEON", "MARQUEZ", "GALLEGO", "CABRERA", "CALVO", "VIDAL", "CAMPOS", "VEGA", "REYES", "FUENTES", "CARRASCO", "DIEZ", "CABALLERO", "AGUILAR", "NIETO", "SANTANA", "PASCUAL", "HERRERO", "MONTERO", "GIMENEZ", "HIDALGO", "LORENZO", "VARGAS", "IBAÑEZ", "SANTIAGO", "DURAN", "BENITEZ", "FERRER", "ARIAS", "MORA", "CARMONA", "VICENTE", "CRESPO", "SOTO", "ROMAN", "ROJAS", "PASTOR", "VELASCO", "SAEZ", "PARRA", "MOYA", "BRAVO", "SOLER", "GALLARDO", "ESTEBAN");

        let diputados = new Set();

        for (let i = 0; i < parlamento_dipu; i++) {
            //Cálculo de nombres y apellidos para generación aleatoria de datos. Elige un nombre y dos apellidos al azar. Son los índices para acceder a los arrays
            let indice_nombre = Math.floor(Math.random() * (array_nombres.length - 0)) + 0;
            let indice_ap1 = Math.floor(Math.random() * (array_apellidos.length - 0)) + 0;
            let indice_ap2 = Math.floor(Math.random() * (array_apellidos.length - 0)) + 0;
            //Elige un partido del array de partidos al azar
            let indice_partido = Math.floor(Math.random() * (partidos.length - 0)) + 0;
            let dni = Identidad.generar_dni(); //Opcional, comprobar que el DNI no existe para otro candidato
            //Año de nacimiento empezando en 1930
            let anio_nacimiento = Math.floor(Math.random() * (new Date().getFullYear() - 19 - 1930)) + 1930;
            // Instanciar el nuevo candidato con los datos anteriores o cualquier otro dato necesario y añadirlo al conjunto de candidatos
            //COMPLETAR
            let diputado = new Diputado(indice_nombre, indice_ap1 + indice_ap2, dni, anio_nacimiento, indice_partido);
        }
        return diputados;
    }


    /*
    Entrada:
    parlamento: Objeto parlamento
    elect: Set de Diputados (objeto que devuelve el método genera_camara)
    Salida: void --> Setea las propiedades del objeto Parlamento.
    */
    static investidura(parlamento, elect) { //añadir array partido y crear el map a partir del array 
        // La idea de este objeto Map es guardar como clave un partido (o sus siglas) y como valor el número de diputados que hay de dicho partido
        let votacion = new Map();
        //DEBE COMPROBAR QUE EL PARLAMENTO ES COMPATIBLE CON EL CONJUNTO DE DIPUTADOS
        // COMPLETAR LA IMPLEMENTACIÓN
        // Con este for recorremos el conjunto o Set de diputados
        for (let diputado of elect) {

        }
        // Asigna el conjunto de diputados al objeto parlamento en su propiedad diputados
        parlamento.diputados = elect;
    }
}


// IMPLEMENTA AQUÍ LAS FUNCIONES LANZADAS POR EL USUARIO
// Usa los eventos de los botones onClick para lanzarlas
function mostrarParlamento() {
    document.getElementById("p").innerHTML = parlamento.toString();
}

function mostrarDNIaleatorio() {
    document.getElementById("p").innerHTML = "DNI ALEATORIO: " + Identidad.generar_dni();
}

function mostrarEquipos() {
    document.getElementById("p").innerHTML = partido1.toString() + "<br>" + partido2.toString();
}

function mostrarElecciones() {
    document.getElementById("p").innerHTML = ":( ";
}

partido1.añadir_a_equipo(diputado1);
partido1.añadir_a_equipo(diputado2);
partido1.añadir_a_equipo(diputado3);
partido2.añadir_a_equipo(diputado4);
partido2.añadir_a_equipo(diputado5);
partido2.añadir_a_equipo(diputado6);
partido2.añadir_a_equipo(diputado7);
partido2.añadir_a_equipo(diputado8);
partido2.añadir_a_equipo(diputado9);
//document.write(persona1._mostrarDatos);
//document.write("<br>" + diputado1.toString());
// document.write("<br>" + partido1.toString());
// document.write("<br>" + partido2.toString());
parlamento.diputado = diputado1;
parlamento.diputado = diputado2;
parlamento.diputado = diputado3;
parlamento.diputado = diputado4;
parlamento.diputado = diputado5;
parlamento.diputado = diputado7;
parlamento.diputado = diputado8;
parlamento.diputado = diputado9;
// document.write("<br>" + parlamento.toString());
let elect = Identidad.genera_camara(partidos, parlamento.num_diputados);
//document.write("<br> Edad maxima de presidente:" + parlamento._presidente);
//document.write("<br> DNI Aleatorio: " + Identidad.generar_dni());
//document.write("<br> Generar letra: " + Identidad.generar_letra(49113346));
//document.write("<br> Comporbar DNI Y LETRA: " + Identidad.comprobarDNI("49113346D"));