// Ésta es la primera instrucción que se ejecutará cuando el documento esté cargado.
// Se hará una llamada a la función iniciar()
// De esta manera nos aseguramos que las asignaciones de eventos no fallarán ya que
// todos los objetos están disponibles.

window.onload = iniciar;

//----------------------------------------------------------//

function iniciar() {
    // Al hacer click en el botón de enviar tendrá que llamar a la la función validar que se encargará
    // de validar el formulario.
    // El evento de click lo programamos en la fase de burbujeo (false).
    document.getElementById("enviar").addEventListener('click', validar, false);
}

//----------------------------------------------------------//

function validar(eventopordefecto) // En la variable que pongamos aquí gestionaremos el evento por defecto 
{ // asociado al botón de "enviar" (type=submit) que en este caso
    // lo que hace por defecto es enviar un formulario.

    // Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
    if (validarcampostexto(this) && validarExpediente() && validarNif() && validarAp1() && validarAp2() && validarNombre() && validarTelefono() && validarCorreo() && validarTurno() && confirm("¿Deseas enviar el formulario?"))
        return true;
    else {
        // Cancelamos el evento de envío por defecto asignado al boton de submit enviar.
        eventopordefecto.preventDefault();
        return false; // Salimos de la función devolviendo false.
    }
}

//----------------------------------------------------------//

function validarcampostexto(objeto) {
    // A esta función le pasamos un objeto (que en este caso es el botón de enviar.
    // Puesto que validarcampostexto(this) hace referencia al objeto dónde se programó ese evento
    // que fue el botón de enviar.
    var formulario = objeto.form; // La propiedad form del botón enviar contiene la referencia del formulario dónde está ese botón submit.

    for (var i = 0; i < formulario.elements.length; i++) {
        // Eliminamos la clase Error que estuviera asignada a algún campo.
        formulario.elements[i].className = "";
    }

    // De esta manera podemos recorrer todos los elementos del formulario, buscando los que son de tipo texto.
    // Para validar que contengan valores.
    for (var i = 0; i < formulario.elements.length; i++) {
        if (formulario.elements[i].type == "text" && formulario.elements[i].value == "") {
            alert("El campo: " + formulario.elements[i].name + " no puede estar en blanco");
            formulario.elements[i].className = "error";
            formulario.elements[i].focus();
            return false;
        }
    }
    return true; // Si sale de la función con esta instrucción es que todos los campos de texto y la edad son válidos.
}

//----------------------------------------------------------//
function validarExpediente() {
    // 4 Números 1 guion (-) 4 numero y H o M
    var patron = /(^[0-9]{4})([-])([0-9]{4})([\/])((H)|(M))$/;
    if (patron.test(document.getElementById("expediente").value)) {
        document.getElementById("expediente").className = "";
        return true;
    } else {
        alert("El campo: expediente no está correcto.");
        // Situamos el foco en el campo expediente y le asignamos la clase error.
        document.getElementById("expediente").focus();
        document.getElementById("expediente").className = "error";
        return false;
    }
}

//----------------------------------------------------------//


function validarNombre() {
    //  Con una longitud máxima de 10 caracteres. Sólo puede contener caracteres y guiones bajos.
    var v_nombre = /([A-Za-z_])$/;
    if (v_nombre.test(document.getElementById("nombre").value)) {
        document.getElementById("nombre").className = "";
        return true;
    } else {
        alert("El campo: nombre no está correcto.");

        // Situamos el foco en el campo nombre y le asignamos la clase error.
        document.getElementById("nombre").focus();
        document.getElementById("nombre").className = "error";
        return false;
    }
}
//----------------------------------------------------------//


function validarAp1() {
    //  Con una longitud máxima de 10 caracteres. Sólo puede contener caracteres y guiones bajos.
    var v_ap1 = /([A-Za-z_])$/;
    if (v_ap1.test(document.getElementById("ap1").value)) {
        document.getElementById("ap1").className = "";
        return true;
    } else {
        alert("El campo: apellido 1 no está correcto.");

        // Situamos el foco en el campo apelldio 1 y le asignamos la clase error.
        document.getElementById("ap1").focus();
        document.getElementById("ap1").className = "error";
        return false;
    }
}
//----------------------------------------------------------//



function validarAp2() {
    //  Con una longitud máxima de 10 caracteres. Sólo puede contener caracteres y guiones bajos.
    var v_ap2 = /([A-Za-z_])$/;
    if (v_ap2.test(document.getElementById("ap2").value)) {
        document.getElementById("ap2").className = "";
        return true;
    } else {
        alert("El campo: apellido 2 no está correcto.");

        // Situamos el foco en el campo apelldio 2 y le asignamos la clase error.
        document.getElementById("ap2").focus();
        document.getElementById("ap2").className = "error";
        return false;
    }
}
//----------------------------------------------------------//

function validarCorreo() {
    var v_email = /(^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[\.][a-z])$/;
    if (v_email.test(document.getElementById("correo").value)) {
        document.getElementById("correo").className = "";
        return true;
    } else {
        alert("El campo: correo no está correcto.");
        // Situamos el foco en el campo correo y le asignamos la clase error.
        document.getElementById("correo").focus();
        document.getElementById("correo").className = "error";
        return false;
    }
}
//----------------------------------------------------------//

function validarNif() {
    // 4 Números 1 guion (-) opcional y una letra mayuscula o minuscula
    var v_nif = /(^[0-9]{8})([-]?)([A-Za-z]{1})$/;
    if (v_nif.test(document.getElementById("nif").value)) {
        document.getElementById("nif").className = "";
        return true;
    } else {
        alert("El campo: nif no está correcto.");

        // Situamos el foco en el campo nif y le asignamos la clase error.
        document.getElementById("nif").focus();
        document.getElementById("nif").className = "error";
        return false;
    }
}

//----------------------------------------------------------//

function validarTurno() {
    // Comprueba que la opción seleccionada sea diferente a 0.
    // Si es la 0 es que no ha seleccionado ningún nombre de turno.
    if (document.getElementById("turno").selectedIndex == 0) {
        alert("Atención!: Debes seleccionar un turno.");

        // Situamos el foco en el campo turno y le asignamos la clase error.
        document.getElementById("turno").focus();
        document.getElementById("turno").className = "error";
        return false;
    } else
        return true;
}

//----------------------------------------------------------//
function validarTelefono() {
    // empieza por 6 o 7 y depsues 8 numero entre el 0 y 9
    var v_tel = /(^[6-7]{1})([0-9]{8})$/;
    if (v_tel.test(document.getElementById("telefono").value)) {
        document.getElementById("telefono").className = "";
        return true;
    } else {
        alert("El campo: telefono no está correcto.");
        // Situamos el foco en el campo telefono y le asignamos la clase error.
        document.getElementById("telefono").focus();
        document.getElementById("telefono").className = "error";
        return false;
    }
}

//----------------------------------------------------------//