class Rectangulo {
    constructor(base_in, altura_in) {
        this.base = base_in;
        this.altura = altura_in;
    }
}

class Cuadrado extends Rectangulo {
    constructor(lado_in) {
        super(base_in, altura_in);
        this.lado = lado_in;
    }

}