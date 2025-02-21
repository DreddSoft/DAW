//* Elementos capturados
// const iptNombre = document.getElementById("name");
// const iptApe1 = document.getElementById("");
const form = document.getElementById("miForm");
const alertError = document.getElementById("alert-error");
const btnSend = document.getElementById("btn-send");

//* Eventos

form.elements[0].addEventListener("focusout", validarNombre, false);
form.elements[1].addEventListener("focusout", validarPrimerApellido, false);
form.elements[2].addEventListener("focusout", validarSegundoApellido, false);
form.elements[3].addEventListener('input', formatearTelefono, false);
form.elements[4].addEventListener("focusout", validarEmail, false);
form.elements[5].addEventListener("focusout", validaDireccion, false);

btnSend.addEventListener("click", checkEnvioForm, false);


function validarNombre() {

    let nombre = form.elements[0].value;
    let mensaje = "";

    // Obligatorio
    if (nombre.length === 0) {
        mensaje = "Es un campo obligatorio.";
        error("Nombre", mensaje);
        return false;
    }

    // Comprobamos el checkValidity
    if (!form.elements[0].checkValidity()) {
        // Informamos
        let mensaje = "El nombre no cumple el formato requerido. Primer carácter mayúscula, resto minúsculas. Longitud entre 3 y 10 caracteres y es requerido.";
        error("Nombre", mensaje);
        return false;
    }

    // Si continua todo ok
    cancelError();
    console.log("Nombre OK");

    return true;

}

// Función validar primerApellido
function validarPrimerApellido() {

    // Vars
    let lastName = form.elements[1].value;
    let msj = "";

    // Required
    if (lastName.length === 0) {
        // Esto lo hago porque me gusta mas asi
        msj = "Es un campo obligatorio.";
        error("Primer Apellido", msj);
        return false;
    }

    // Si no checkea la validity
    if (!form.elements[1].checkValidity()) {
        msj = "El campo no cumple los requisitos: Primera letra mayúscula y una longitud de 4 a 8 caracteres.";
        error("Primer Apellido", msj);
        return false;
    }

    // const patron = /^[A-Z][a-z]{3,7}$/;

    // Si continúa lo cumple todo
    cancelError();

    console.log("Primer apellido OK");
    return true;

}

// Segundo apellido:
// - opcional
// - entre 4 y 8 caracteres.
// - primera mayus
function validarSegundoApellido() {

    if (!form.elements[2].checkValidity()) {
        error("Segundo Apellido", "El campo no cumple las condicones: Primera letra mayúscula y una longitud entre 4 y 8 caracteres.");
        return false;
    }

    // Todo ok
    console.log("Apellido 2 OK");
    cancelError();
    return true;

}


// formato: +99 999-999-999
function validarTelefono() {

    // No va a entrar nunca en esta comprobacion, porque modifico el input
    if (!form.elements[3].checkValidity()) {
        error("Teléfono", "El campo teléfono tiene que cumplir el siguiente formato: +99 999-999-999.");
        return false;
    }

    console.log("telefono OK");
    cancelError();
    return true;
}

// Función para validar el email
function validarEmail() {

    let email = form.elements[4].value;

    // Obligatorio
    if (email.length === 0) {
        error("Email", "El campo email es obligatorio.");
        return false;
    }

    if (!form.elements[4].checkValidity()) {
        error("Email", "El campo email tiene que cumplir el formato de email.");
        return false;
    }


    cancelError();
    return true;
}

function validaDireccion() {

    if (!form.elements[5].checkValidity()) {
        error("Dirección", "El campo dirección es obligatorio.");
        return false;
    }

    cancelError();
    return true;

}


// Función para permitir en input del teléfono sólo números y con formato
function formatearTelefono(event) {
    let input = event.target;
    // Cambiamos todos los valores no numéricos
    let value = input.value.replace(/\D/g, '');

    // Vamos formateando el value según longitud
    if (value.length > 0) {
        value = '+' + value;
    }
    if (value.length > 3) {
        value = value.slice(0, 3) + ' ' + value.slice(3);
    }
    if (value.length > 7) {
        value = value.slice(0, 7) + '-' + value.slice(7);
    }
    if (value.length > 11) {
        value = value.slice(0, 11) + '-' + value.slice(11);
    }
    if (value.length > 15) {
        value = value.slice(0, 15) + '-' + value.slice(15, 18);
    }

    input.value = value;
}

function error(title, mensaje) {

    // Lanzamos el mensaje en el alert-error
    alertError.classList.remove("hidden");
    alertError.innerHTML = `<h4>Error: ${title}</h4>`;
    alertError.innerHTML += `<p>${mensaje}</p>`;

}

function cancelError() {
    alertError.classList.add("hidden");
    alertError.innerHTML = "";
}

function checkEnvioForm() {

    if (validarNombre && validarPrimerApellido && validarSegundoApellido && validarTelefono && validarEmail && validaDireccion) {
        // Capturamos los valores en variables
        let name = form.elements[0].value;
        let lastName = form.elements[1].value;
        let lastName1 = form.elements[2].value;
        let phone = form.elements[3].value;
        let email = form.elements[4].value;
        let dir = form.elements[5].value;



        let ok = confirm("¿Quieres continuar con el envío del formulario?");

        if (ok) {

            // Guardamos
            saveShitInLocalStorage(name, lastName, lastName1, phone, email, dir);

            // Recargamos
            window.location.reload();
        } else {
            return;
        }

    } else {
        return;
    }

}
function saveShitInLocalStorage(name, lastName, lastName1, phone, email, dir) {

    localStorage.setItem('nombre', name);
    localStorage.setItem('ape1', lastName);
    localStorage.setItem('ape2', lastName1);
    localStorage.setItem('tel', phone);
    localStorage.setItem('email', email);
    localStorage.setItem('dir', dir);

}



