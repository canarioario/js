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
                //console.log('Dni correcto');
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
            retorno = "Diputado/a: " + this.nombre + ' ' + this.apellido + ' ' + " edad: " +
                super._edad + " parido: " + this.partido;
        } else {
            retorno = "Diputado/a:" + this.nombre + ' ' + this.apellido + ' ' + " edad: " +
                super._edad + " parido: " + this.partido + " cargo: " + this.cargo;

        }
        return retorno;

    }

}



var persona1 = new Persona("juan", "gomez", "49113346c", 2004);
var diputado = new Diputado("Paco", "Perez", "49113346c", 2004, "Yo");
document.write(persona1._mostrarDatos);
document.write("<br>" + diputado.toString());
// document.write(persona1.validarEdad = 2002);
//document.write(persona1.validarDni = "49113346c");
//document.write(persona1.nombreCompleto = "Jose Perez");
// document.write(persona1._nombreCompleto());
//document.write(persona1._edad);