/*
Crea un script que defina un objeto llamado Producto_alimenticio.
Este objeto debe presentar las propiedades código, nombre y codigo, además del método imprime_datos, 
que escribirá por pantalla los valores de sus propiedades de la siguiente forma:
Producto: [Código] – [Nombre]. codigo unidad/kg: [codigo] €
Producto: 0482W – Lechuga iceberg. codigo unidad/kg: 2,23 €
Posteriormente, crea tres instancias del tipo Producto_alimenticio y guárdalas en un array.
Con la ayuda del bucle for, utiliza el método imprime_datos para mostrar por pantalla los valores de los objetos instanciados.
*/

class Productos {
    constructor(nombre_em, precio_em, codigo_em) {
        this.nombre = nombre_em;
        this.precio = precio_em;
        this.codigo = codigo_em;
        this.producto = new Array();
    }

    mostrar() {
        return this.nombre + ' ' + this.precio + ' ' + this.codigo;

    }


}


var producto1 = new Productos("tomates", 24.56, "cod:001");
var producto2 = new Productos("ajos", 54.56, "cod:002");

document.write(producto1.mostrar());
document.write(producto2.mostrar());