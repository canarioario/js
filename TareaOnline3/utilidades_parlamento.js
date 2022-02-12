//Partidos instanciados por el usuario
let partidos = new Array();
//Parlamento instanciado por el usuario
let parlamento = new Parlamento();


/*
Puedes apoyarte en este método para la generación aleatoria de los datos a tratar. Puedes modificar lo que necesites pero debes manejar los datos en un Set de Diputados.
Entrada:
partidos: Array de elementos de tipo Partido.
parlamento_dipu: Número que indica el número de diputados que tiene un parlamento.
Salida:
Set(Diputado)
*/
function genera_camara(partidos, parlamento_dipu) {

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
        let dni=generarDNI();//Opcional, comprobar que el DNI no existe para otro candidato
        //Año de nacimiento empezando en 1930
        let anio_nacimiento = Math.floor(Math.random() * (new Date().getFullYear() - 19 - 1930)) + 1930;
        // Instanciar el nuevo candidato con los datos anteriores o cualquier otro dato necesario y añadirlo al conjunto de candidatos
        //COMPLETAR
        //let diputado = new Diputado(...
    }
    return diputados;
}


/*
Entrada:
parlamento: Objeto parlamento
elect: Set de Diputados (objeto que devuelve el método genera_camara)
Salida: void --> Setea las propiedades del objeto Parlamento.
*/
function investidura(parlamento, elect) {
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



// IMPLEMENTA AQUÍ LAS FUNCIONES LANZADAS POR EL USUARIO
// Usa los eventos de los botones onClick para lanzarlas