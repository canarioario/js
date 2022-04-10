// Selecciona los Elementos
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// nombres de clases
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST, id;

// obtener el artículo del almacenamiento local
let data = localStorage.getItem("TODO");

// comprobar si los datos no están vacíos
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length; // Establece el id al último de la lista
    loadList(LIST); // carga la lista en la interfaz de usuario
} else {
    // si los datos no están vacíos
    LIST = [];
    id = 0;
}

// cargar elementos en la interfaz de usuario
function loadList(array) {
    array.forEach(function(item) {
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

// borrar el almacenamiento local
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

// Mostrar la fecha de hoy
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("es", options);

// añadir a la función de hacer

function addToDo(toDo, id, done, trash) {

    if (trash) { return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;

    const position = "beforeend";

    list.insertAdjacentHTML(position, item);
}

// agregar un elemento a la lista usuario la tecla enter
document.addEventListener("keyup", function(even) {
    if (event.keyCode == 13) {
        const toDo = input.value;

        // si la entrada no está vacía
        if (toDo) {
            addToDo(toDo, id, false, false);

            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            });

            // agregue el elemento al almacenamiento local (este código debe agregarse donde se actualiza la matriz LIST)
            localStorage.setItem("TODO", JSON.stringify(LIST));

            id++;
        }
        input.value = "";
    }
});


// // Completa para hacer
function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// quitar para hacer
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

//apuntar a los elementos creados dinámicamente

list.addEventListener("click", function(event) {
    const element = event.target; // devuelve el elemento seleccionado dentro de la lista
    const elementJob = element.attributes.job.value; // completar o borrar

    if (elementJob == "complete") {
        completeToDo(element);
    } else if (elementJob == "delete") {
        removeToDo(element);
    }

    // agregue el elemento al almacenamiento local (este código debe agregarse donde se actualiza la matriz LIST)
    localStorage.setItem("TODO", JSON.stringify(LIST));
});