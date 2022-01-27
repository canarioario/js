/*
Crea un script que defina un objeto llamado producto_alimenticio.
Este cojunto debe presentar las propiedades codigo, nombre y precio,
ademas del metodo imprime_datos, que escribira por pantalla los valores
de sus propiedades de la siguiente forma:
Producto [Codigo] - [Nombre]. Precio unidad/kg :[Precio] €
Producto [084W] - [Lechuga iceberg]. Precio unidad/kg:[2,23] €
*/
class Productos {
    constructor(producto) {
        this.misProductos = new Array();
        for (let i = 0; i < arguments.length; i++) { // let crea una variable local del bloque.     
            this.misProductos.push(arguments[i]); // Se añaden los argumentos al final      
        }
    }



}