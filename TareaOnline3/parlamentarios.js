class Persona {
    constructor(nombre_in, apellido_in, dni_in, anio_nac_in) {
        var fecha = new Date();
        var anio_actual = fecha.getFullYear();
        let result = (anio_actual - anio_nac_in);
        if (result >= 18) {
            this.anio_nac = anio_nac_in;
            var nombre_completo = nombre_in + " " + apellido_in;
            const palabras = nombre_completo.split(' ');
            if (palabras.length == 2) {
                this.nombre = palabras[0];
                this.apellido = palabras[1];
            } else {
                alert("El nombre introducido es incorrecto.");
            }
            var numero;
            var letr;
            var letra;
            var expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
            if (expresion_regular_dni.test(dni_in) == true) {
                numero = dni_in.substr(0, dni_in.length - 1);
                letr = dni_in.substr(dni_in.length - 1, 1);
                numero = numero % 23;
                letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
                letra = letra.substring(numero, numero + 1);
                if (letra != letr.toUpperCase()) {
                    alert('Dni erroneo, la letra del NIF no se corresponde');
                } else {
                    this.dni = dni_in;
                }
            } else {
                alert('Dni erroneo, formato no válido');
            }
            return true;
        } else {
            alert("La edad es menor a 18.");
            return false;
        }
    }

    get _mostrarDatos() {
        return 'P: ' + this.nombre.toUpperCase() + ' ' + this.apellido.toUpperCase() + ' ' + this.dni + ' ' + this.anio_nac;
    }

    set nombreCompleto(nombre_completo) {
        const palabras = nombre_completo.split(' ');
        if (palabras.length == 2) {
            this.nombre = palabras[0];
            this.apellido = palabras[1];
        } else {
            alert("El nombre introducido es incorrecto.");
        }
    }

    set validarDni(dni_in) {
        var numero
        var letr
        var letra
        var expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
        if (expresion_regular_dni.test(dni_in) == true) {
            numero = dni_in.substr(0, dni_in.length - 1);
            letr = dni_in.substr(dni_in.length - 1, 1);
            numero = numero % 23;
            letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
            letra = letra.substring(numero, numero + 1);
            if (letra != letr.toUpperCase()) {
                alert('Dni erroneo, la letra del NIF no se corresponde');
            } else {
                this.dni = dni_in;
            }
        } else {
            alert('Dni erroneo, formato no válido');
        }
    }

    set validarEdad(anio_nac) {
        var fecha = new Date();
        var anio_actual = fecha.getFullYear()
        let result = (anio_actual - anio_nac);
        if (result >= 18) {
            return true;
        } else {
            alert("La edad es menor a 18.");
            return false;
        }
    }
    get _edad() {
        var fecha = new Date();
        var anio_actual = fecha.getFullYear()
        let result = (anio_actual - this.anio_nac);
        return result;
    }
}


class Diputado extends Persona {
    constructor(nombre_in, apellido_in, dni_in, anio_nac_in, partido_in) {
        super(nombre_in, apellido_in, dni_in, anio_nac_in);
        this.partido = partido_in;
        this.cargo = "";
    }

    toString() {
        var retorno;
        if (this.cargo == "") {
            retorno = "- Diputado/a: " + this.nombre + ' ' + this.apellido + ' ' + " edad: " +
                super._edad + " partido: " + Utilidades.sacarSiglas(this.partido).toLocaleUpperCase();
        } else {
            retorno = " - Diputado/a:" + this.nombre + ' ' + this.apellido + ' ' + " edad: " +
                super._edad + " partido: " + Utilidades.sacarSiglas(this.partido).toLocaleUpperCase() + " cargo: " + this.cargo;
        }
        return retorno;
    }
}

class Partido {
    constructor(nombre_in, anio_in) {
        this.nombre = nombre_in;
        this.anio = anio_in;
        this.siglas = Utilidades.sacarSiglas(this.nombre);
        this.miEquipo = new Array();
        this.vontante = 0;
    }


    toString() {
        var mostrar = "* Partido: " + this.nombre + ' ' + ", año de fundacion: " +
            this.anio + " siglas: " + this.siglas.toLocaleUpperCase() + "</br>" +
            "&nbsp; &nbsp;Lista de diputados:";
        for (let index = 0; index < this.miEquipo.length; index++) {
            const element = this.miEquipo[index];
            mostrar += "</br>" + element.toString();
        }
        return mostrar;
    }

    añadir_a_equipo(diputado) {
        this.miEquipo.push(diputado);
        return true;
    }

}

class Parlamento {
    constructor(lugar_in, num_diputados_in) {
        if (Utilidades.esNum(lugar_in) == false) {
            this.lugar = lugar_in;
        }
        if (Utilidades.esNum(num_diputados_in) == true) {
            this.num_diputados = num_diputados_in;
        }
        this.diputados = new Array();
    }

    toString() {
        var mostrar = "* Parlamento de: " + this.lugar + ", nº maximo de diputados: " + this.num_diputados + "</br>" +
            "&nbsp; &nbsp;Lista de diputados:";
        for (let index = 0; index < this.diputados.length; index++) {
            const element = this.diputados[index];
            mostrar += "</br>" + element.toString();
        }
        return mostrar;
    }

    get _presidente() {
        var maximo = 0;
        for (let index = 0; index < this.diputados.length; index++) {
            const element = this.diputados[index];
            if (maximo < element._edad) {
                maximo = element._edad;
            }
        }
        return maximo;
    }

    set diputado(diputado) {
        if (this.diputados.length < this.num_diputados) {
            this.diputados.push(diputado);
            return true;
        } else {
            alert("El cupo del parlamento esta al maximo");
            return false;
        }

    }

}

class Utilidades {
    static sacarSiglas(partido) {
        var array = partido.split(" ");
        var total = array.length;
        var resultado = "";
        for (var i = 0; i < total; resultado += array[i][0], i++);
        return resultado;
    }
    static esNum(a) {
        var validar;
        if (isNaN(a)) {
            validar = false;
        } else {
            validar = true;
        }
        return validar;
    }



}



//document.write(diputado.sacarSiglas("Partido popular"));
// document.write(persona1.validarEdad = 2002);
//document.write(persona1.validarDni = "49113346c");
//document.write(persona1.nombreCompleto = "Jose Perez");
// document.write(persona1._nombreCompleto());
//document.write(persona1._edad);