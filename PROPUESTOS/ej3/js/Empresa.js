class Empresa {
    constructor(nombre_em, edad) {
        this.nombre = nombre_em;
        this.edad = edad;
        this.empleados = new Array();
    }
    mostrarEmpresa() {
        var mostrar = "Nombre empresa " + this.nombre + " edad maxima: " + this.edad + "</br>";
        for (let index = 0; index < this.empleados.length; index++) {
            const element = this.empleados[index];
            mostrar += "</br>" + element.mostrar();

        }
        return mostrar;

    }




    contratar(personaT) {
        if (personaT.edad < this.edad) {
            this.empleados.push(personaT);
            return true;
        } else {
            alert("El trabajador no cumple las condiciones");
            return false;
        }

    }
}