//* Elementos capturados
// const iptNombre = document.getElementById("name");
// const iptApe1 = document.getElementById("");
const form = document.getElementById("miForm");
const alertError = document.getElementById("alert-error");
const btnSend = document.getElementById("btn-send");
const btnShowPedido = document.getElementById("btn-showPedido");
const btnDelete = document.getElementById("btn-delete");
const btnLogout = document.getElementById("btn-logout");

let arrProducts = [];

//* Eventos

window.addEventListener("DOMContentLoaded", () => {


    if (document.cookie.indexOf('usuario=') != -1) {
        let user = localStorage.getItem('nombre') + " " + localStorage.getItem('ape1');
        let cnt = localStorage.getItem("contador");

        document.getElementById("btn-logout").textContent = "Log out";

        if (cnt == "1") {
            document.getElementById("welcome").innerHTML = `¡Bienvenido ${user}, que delicatessen deseas probar hoy!`;
            cnt++;
            localStorage.setItem("contador", cnt);
        } else {
            document.getElementById("welcome").innerHTML = `¡Bienvenido de nuevo ${user}!, ¿repetimos?`;
            
        }

        // Aplicamos valores a la tabla
        showDataIfInStorage();

    } else {
        document.getElementById("welcome").innerHTML = `Nuestras delicatessen ahora te las llevamos a casa.`;

    }
});

// Evento click en el botón ver pedido
btnShowPedido.addEventListener("click", () => {
    document.getElementById("pedido").scrollIntoView({ behavior: 'smooth' });
}, false);

// Evento para borrar la información del pedido en LocalStorage
btnDelete.addEventListener("click", clearShitFromStorage, false);


form.elements[0].addEventListener("focusout", validarNombre, false);
form.elements[1].addEventListener("focusout", validarPrimerApellido, false);
form.elements[2].addEventListener("focusout", validarSegundoApellido, false);
form.elements[3].addEventListener('input', formatearTelefono, false);
form.elements[4].addEventListener("focusout", validarEmail, false);
form.elements[5].addEventListener("focusout", validaDireccion, false);

btnSend.addEventListener("click", checkEnvioForm, false);

btnLogout.addEventListener("click", logout, false);



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

    let nomCompleto = name + " " + lastName;
    // Creamos la cookie del usuario
    let d = new Date();
    d.setTime(d.getTime() + 30 * 60 * 1000);
    let exp = "expires=" + d.toUTCString();
    document.cookie = "usuario=" + nomCompleto + ";" + exp + ";path=/";

    let precioTotal = 0;
    let prodsNombres = [];

    arrProducts.forEach(producto => {

        prodsNombres.push(producto.nombre);
        precioTotal += producto.precio;
    });

    prodsNombres = prodsNombres.join(', ');

    localStorage.setItem('productos', prodsNombres);
    localStorage.setItem('precio', precioTotal);

    // El contador por el primer inicio de sesion
    alert("Pasa por aquí, que es guardar el contador");
    localStorage.setItem("contador", "1");

}

function logout() {
    // Eliminar la cookie del usuario
    document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("Has cerrado sesión.");
    window.location.reload();
}


function showDataIfInStorage() {

    const nombre = localStorage.getItem('nombre');
    const ape1 = localStorage.getItem('ape1');
    const ape2 = localStorage.getItem('ape2');
    const tel = localStorage.getItem('tel');
    const productos = localStorage.getItem('productos');
    const precio = parseFloat(localStorage.getItem('precio'));

    const dir = localStorage.getItem('dir');

    if (nombre) document.getElementById('nombre-display').innerText = nombre;
    if (ape1) document.getElementById('nombre-display').innerText += " " + ape1;
    if (ape2) document.getElementById('nombre-display').innerText += " " + ape2;
    if (tel) document.getElementById('tel-display').innerText = tel;
    if (dir) document.getElementById('dir-display').innerText = dir;
    if (productos) document.getElementById('pedido-display').innerText = productos;
    if (precio) document.getElementById('precio-display').innerText = precio.toFixed(2) + " €";

}

function buy(nombre, precio) {
    let producto = {
        nombre: nombre,
        precio: precio
    };
    arrProducts.push(producto);
    console.log(`Producto añadido: ${nombre}, Precio: ${precio}`);
}

// Función que elimina toda la información en webstorage
function clearShitFromStorage() {
    localStorage.clear();
    alert("Toda la información del pedido ha sido eliminada.");
    window.location.reload();
}

// Función para eliminar sólo la información del pedido
function clearShitFromPedido() {
    localStorage.removeItem('productos');
}




