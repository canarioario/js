/*
Plantea una clase persona, que almacene el nombre, los apellidos y la edad.
Por otro lado crear una clase empresa que tenga como atributos el nombre
de la empresa y la edad tope para que una persona pueda ingresar como
trabajador en la misma. Confecciona un script que defina 4 objetos de la
clase persona y 1 de la clase empresa. Muestra cuántas de esas personas
están inhabilitadas para ingresar como trabajadores, así como sus datos
(nombre, apellidos y edad).

La empresa debe tener una lista con los empleados.
La empresa tendra un metodo contratar en el que añadira el empleado a la lista si cumple las condiciones.

Crear un metodo imprimir empleado, que muestre su informacion.
Crear un metodo imprimir empresa, que muestre su informacion.
Nombre empresa, edad tope y lista de empleados.
*/

class Persona {
    constructor(nombre_in, apellido_in, edad_in) {
        this.nombre = nombre_in;
        this.apellido = apellido_in;
        this.edad = edad_in;
    }

    nombreCompleto() {
        return this.nombre + ' ' + this.apellido;

    }

    set nombreCompleto(nombre_completo) {
        const palabras = nombre_completo.split(' ');
        if (palabras.length == 2) {
            this.nombre = palabras[0];
            this.apellido = palabras[1];

        } else {
            alert("El nombre introducido es incorrecto.")
        }
    }
}