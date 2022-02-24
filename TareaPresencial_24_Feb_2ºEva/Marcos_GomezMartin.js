class Videoclub {
    constructor(nombre_in, precio_in) {
        this.nombre = nombre_in;
        this.precio = precio_in;
        this.prestamo = new Map();
        this.videojuegos = new Array();
        this.peliculas = new Array();
        this.socios = new Set();

    }

    set _precionuevo(precionuevo) {
        this.precio = precionuevo;
    }
    añadirPelicula(pelicula) {
        this.peliculas.push(pelicula);
        return true;
    }
    añadirVideojuego(videojuego) {
        this.videojuegos.push(videojuego);
        return true;
    }
    get _mostrarNombre() {
        return this.nombre;
    }
}

function Socio(nombre_soc_in, apellidos_soc_in, fecha_nac_soc_in, email_soc_in, dni_soc_in) {
    this.nombre_soc = nombre_soc_in;
    this.apellidos_soc = apellidos_soc_in;
    this.fecha_nac_soc = fecha_nac_soc_in;
    this.email_soc = email_soc_in;
    this.dni_soc = dni_soc_in;

    var mostrar_edad = function() {
        var actual = new Date().getYear();
        var anio = fecha_nac_soc.getFullYear();
        let result = (actual - anio);
        return result;
    }


}


class Titulo {
    constructor(id_tit_in, nombre_tit_in, publico_tit_in) {
        this.id_tit = id_tit_in;
        this.nombre_tit = nombre_tit_in;
        this.fecha_presatamo_tit;
        this.publico_tit = publico_tit_in;
    }
    get _mostrarTitulo() {
        let mostrar = "Titulo: " + this.nombre_tit + "nombre: " + this.nombre_tit + "publico:" + this.publico_tit;
        return mostrar;
    }

}
class Pelicula extends Titulo {
    constructor(id_tit_in, nombre_tit_in, publico_tit_in, genero_pel_in, director_pel_in, anio_pel_in) {
        super(id_tit_in, nombre_tit_in, publico_tit_in);
        this.genero_pel = genero_pel_in;
        this.director_pel = director_pel_in;
        this.anio_pel = anio_pel_in;
    }
    get _mostrarPelicula() {
        let titulo = super._mostrarTitulo();
        let mostrar = titulo + "genero " + this.genero_pel + "director :" + this.director_pel + "año: " + this.anio_pel;
        return mostrar;
    }
}
class Videojuego extends Titulo {
    constructor(id_tit_in, nombre_tit_in, publico_tit_in, tematica_vid_in, pltaforma_vid_in) {
        super(id_tit_in, nombre_tit_in, publico_tit_in);
        this.tematica_vid = tematica_vid_in;
        this.plataforma_vid = pltaforma_vid_in;
    }
    get _mostrar_vj() {
        let titulo = super._mostrarTitulo();
        let mostrar = titulo + "tematica " + this.tematica_vid + "plataforma :" + this.plataforma_vid;
        return mostrar;
    }
}

class Videoclub_Util {
    static alta_socio(socio) {
        this.socios.add(socio);
        return true;
    }
    static prestamo_a_socio(socio, titulo) {
        if (socio.mostrar_edad < titulo.publico_tit) {
            alert("Titulo no adecuado");
        } else {
            this.prestamo.set(titulo, socio);
        }
    }

}

let videoclub = new Videoclub("Laguna Seca", 2);
let pelicula1 = new Pelicula("P001", "Peli-1", "TP", "Comedia", "Directo-1", 2020);
let pelicula2 = new Pelicula("P002", "Peli-2", "+13", "Accion", "Directo-2", 2018);
let pelicula3 = new Pelicula("P003", "Peli-3", "+18", "Drama", "Directo-3", 2019);
let pelicula4 = new Pelicula("P004", "Peli-4", "TP", "Aventuras", "Directo-4", 2010);
let pelicula5 = new Pelicula("P005", "Peli-5", "+18", "Ficcion", "Directo-5", 2001);
let videojuego1 = new Videojuego("V001", "Videojuego-1", "+18", "Guerra", "EA");
let videojuego2 = new Videojuego("V002", "Videojuego-2", "TP", "Deportes", "SONY");
let videojuego3 = new Videojuego("V003", "Videojuego-3", "+18", "Mental", "STREAM");
let videojuego4 = new Videojuego("V004", "Videojuego-4", "TP", "Mental", "XBOX");
let videojuego5 = new Videojuego("V005", "Videojuego-5", "+13", "Deportes", "EPIC GAME");
let socio1 = new Socio("Socio1", "Ap1 Ap2", (02, 02, 1996), "socio1@gmail.com", "44113322C");
let socio2 = new Socio("Socio2", "Ap1 Ap2", (01, 12, 2001), "socio2@gmail.com", "11223344D");
let socio3 = new Socio("Socio3", "Ap1 Ap2", (13, 05, 1980), "socio3@gmail.com", "44556677E");
videoclub.añadirPelicula(pelicula1);
videoclub.añadirPelicula(pelicula2);
videoclub.añadirPelicula(pelicula3);
videoclub.añadirPelicula(pelicula4);
videoclub.añadirPelicula(pelicula5);
videoclub.añadirVideojuego(videojuego1);
videoclub.añadirVideojuego(videojuego2);
videoclub.añadirVideojuego(videojuego3);
videoclub.añadirVideojuego(videojuego4);
videoclub.añadirVideojuego(videojuego5);