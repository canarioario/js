class Persona_Trabajdora extends Persona {
    constructor(nombre_in, apellido_in, edad_in) {
        super(nombre_in, apellido_in);
        this.edad = edad_in;
    }

    get_mostrar() {
        return super.get_nombreCompleto() + " edad: " + this.edad;

    }
}