class Empresa {
    constructor(nombre_em, edad) {
        this.nombre = nombre_em;
        this.edad = edad;
        this.empleados = new Array();
    }
    get nombreEmpresa() {
        return 'Nomnbre empresa: ' + this.nombre;

    }

}