// Eventos
// const iptNombre = document.getElementById("name");
// const iptApe1 = document.getElementById("");
const form = document.getElementById("miForm");

form.elements[0].addEventListener("focusout", validarNombre, false);
form.elements[1].addEventListener("focusout", validarPrimerApellido, false);
form.elements[2].addEventListener("focusout", validarSegundoApellido, false);

// Función para comprobar el nombre: 
// - Obligatorio
// - Entre 3 y 10 caracteres
// - Primero en mayúscula
function validarNombre() {

    // Capturamos el div de alert
    let alertNombre = document.getElementById("alert-nombre");

    // Obligatorio
    if (form.elements[0].value.length <= 0) {
        // Mostramos alert
        alertNombre.classList.remove("hidden");
        alertNombre.innerHTML = "<b>El nombre es obligatorio</b>";
        return false;
    } 
    
    // Longitud entre 3 y 10
    // Primera mayus, resto minus
    const pattern = /^[A-Z][a-z]{3,10}$/;

    // Sanitizamos
    let nombre = form.elements[0].value;

    if (!pattern.test(nombre)) {
        // Informamos
        alertNombre.classList.remove("hidden");
        alertNombre.innerHTML = "<b>Primera letra mayúscula, resto minúscula y la longitud debe ser entre 3 y 10 caracteres.</b>";
        return false;
    }

    // Si continua todo ok
    alertNombre.classList.add("hidden");
    alertNombre.innerHTML = "";
    return true;
    
}

// Función validar primerApellido
function validarPrimerApellido() {

    let alertApe1 = document.getElementById("alert-ape1");

    // Obligatorio
    if (form.elements[1].value.length == 0) {
        // Informamos
        alertApe1.classList.remove("hidden");
        alertApe1.innerHTML = "<b>El primer apellido es obligatorio</b>";
        return false;
    }

        // Entre 4 y 8 caracteres
        // Primero mayús
        // En este caso lo comprobamos las dos a la vez
        const patron = /^[A-Z][a-z]{4,8}$/;

                // Sanitizamos en variable
                let ape1 = form.elements[1].value;

        if (!patron.test(ape1)) {
            alertApe1.classList.remove("hidden");
            alertApe1.innerHTML = "<b>Primera letra mayúscula, resto minúscula. Longitud entre 4 y 8 caracteres.</b>";
            return false;
        }

        // Si continúa lo cumple todo
        alertApe1.innerHTML = "";
        alertApe1.classList.add("hidden");

        console.log("Primer apellido OK");
        return true;

}

// Segundo apellido:
// - opcional
// - entre 4 y 8 caracteres.
// - primera mayus
function validarSegundoApellido() {

    // Capturamos el bloque de mensaje
    let alertApe2 = document.getElementById("alert-ape2");

    // Patron
    let pattern = /^[A-Z][a-z]{4,8}$/;

    // Sanitizamos
    let ape2 = form.elements[2].value;

    // Al ser opcional, sólo tenemos que comprobar cuando el length > 0
    if (ape2.length > 0 && !pattern.test(ape2)) {
        // Mostramos alert
        alertApe2.classList.remove("hidden");
        alertApe2.innerHTML = "<b>La primera letra mayúscula y la longitud entre 4 y 8 caracteres.</b>";

        return false;
    }

    alertApe2.classList.add("hidden");
    alertApe2.innerHTML = "";
    return true;


}