/*
Crea un script que defina un objeto llamado Producto_alimenticio.
Este objeto debe presentar las propiedades código, nombre y precio, además del método imprime_datos, 
que escribirá por pantalla los valores de sus propiedades de la siguiente forma:
Producto: [Código] – [Nombre]. Precio unidad/kg: [Precio] €
Producto: 0482W – Lechuga iceberg. Precio unidad/kg: 2,23 €
Posteriormente, crea tres instancias del tipo Producto_alimenticio y guárdalas en un array.
Con la ayuda del bucle for, utiliza el método imprime_datos para mostrar por pantalla los valores de los objetos instanciados.
*/

class Productos {
    constructor(producto) {
        this.misProductos = new Array();
        for (let i = 0; i < arguments.length; i++) { // let crea una variable local del bloque.     
            this.misProductos.push(arguments[i]); // Se añaden los argumentos al final      
        }
    }



}