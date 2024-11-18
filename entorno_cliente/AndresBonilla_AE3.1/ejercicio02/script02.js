function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    // Aplica el texto al contenedor del enunciado
    let enun = `<p><b>Ejercicio 2.</b> Realiza una aplicación web dónde se simule la pantalla de registro de una web. Para ello la aplicación solicita por pantalla, mediante una ventana emergente, al usuario un email y una contraseña.<p>En primer lugar se le solicita que escuja un mail válido, cuyas características son:</p><ul><li><b>Nombre de usuario</b>, compuesto por letras mayúsculas o minúsculas, o números, o puntos, o guión bajo o algo.</li><li><b>Una arroba.</b></li><li><b>El nombre del servidor</b>, que puede contener mayúsculas o minúsculas, o números.</li><li><b>El dominio</b>, que podrá estar formado por uno o dos grupos de 2 a 4 letras separados por puntos.</li></ul><p>Se le pedirá que lo haga dos veces, en caso de no coincidir, se volverá a solicitar dicho email hasta que coincida.</p><p>Una vez ingresado el email, la aplicación solicitará que se escoja una contraseña válida cuyas características son:</p><ul><li>Una minúscula.</li><li>Una mayúscula</li><li>Un digito.</li><li>No puede incluir espacios.</li><li>Un carácter especial de entre los siguientes: #$@!%&</li><li>Debe contener mínimo 8 caracteres y máximo 16.</li></ul><p>Se le pedirá que lo haga dos veces, en caso de no coincidir, se volverá a solicitar dicha contraseña hasta que coincida.</p><p>Posteriormente se pedirá que se introduzca esa combinación de email/contraseña con un máximo de 3 intentos, si el usuario acierta aparecerá un mensaje de desbloqueo exitoso, en caso contrario, saldrá un mensaje de usuario bloqueado en la parte destinada para tal efecto.</p>`;

    enunciado.innerHTML = enun;

    // Mostrar enunciado
    enunciado.style.display = "block";

    // Ocultar botón ver
    document.getElementById("ver").style.display = "none";

    // Mostrar botón ocultar
    document.getElementById("ocultar").style.display = "block";

}

function ocultarEnunciado() {

    // Ocultar enunciado
    let enunciado = document.getElementById("enunciado");
    enunciado.style.display = "none";

    // Ocultar el botón ocultar
    document.getElementById("ocultar").style.display = "none";

    // Mostar el botón ver
    document.getElementById("ver").style.display = "block";

}

function introducir() {

    // Variables
    let email;
    let password;
    let mensaje = "";

    // Pedimos el primer mail
    email = pedirEmail(null);

    if (email != null) {

        // Pedimos el segundo email que se guarda en la misma variable.
        email = pedirEmail(email);

        // Pedimos la passw la primera vez
        password = pedirPassw(null);

        // Condicional por si han gastado todos los intentos al meter la contraseña
        if (password == null) {
            mensaje = `La especificada para email y contraseña NO VALIDAS. Contraseña no cumple requisitos.`;
            exit;
        } else {
            // Pedimos la password por segunda vez
            password = pedirPassw(password);

            // Mensaje correcto
            mensaje = "La especificada para email y contraseña VALIDAS";
        }

    } else {
        // Informamos
        alert("Ha agotado todos los intentos de registrar el EMAIL. Se cerrara el programa.");
        mensaje = "La especificada para email y contraseña NO VALIDAS. Email no cumple requisitos.";
    }

    // Impresion
    impresion(email, password, mensaje);


}
// Funcion para comprobar que el email coincide con los requisitos
function esEmailValido(email) {

    const regex = /^([A-Za-z0-9._-]+)@([A-Za-z0-9]+)\.([a-z]{2,4})(\.[a-z]{2,4})?$/;

    return (regex.test(email))
        ? true
        : false;

}

// Funcion para comprobar si la password coincide con los requisitos
function esPassValida(password) {

    const REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&?])[^\s]{8,16}$/;
    // Esto ?= es un lookahead: verifica si una condicion cumple algun punto de la cadena
    // (?=.*[a-z]) verifica que haya al menos una minuscula
    // [^\s] \s representa espacio y junto significa cualquier caracter menos espacio

    return (REGEX.test(password))
        ? true
        : false;

}

function pedirEmail(primerEmail) {

    // Si email esta vacio (no se ha introducido la primera vez)
    if (primerEmail == "" || primerEmail == null) {

        // Tiene 3 intentos para introducir el primer mail
        let intentos = 3;

        while (intentos != 0) {

            // Pedimos el mail
            intentos--;
            primerEmail = prompt("Por favor, introduzca por primera vez su email: ");

            // Evaluamos si el mail es correcto
            if (esEmailValido(primerEmail)) {

                // informamos y devolvemos
                alert("El email escogido es válido.");
                return primerEmail;
            } else {

                // Informamos
                alert("El email introducido no cumple las caracteristicas.");

            }

        }

    } else {    // Si es la segunda vez que se introduce el mail

        let segundoEmail = "";
        let intentos = 0;

        // Bucle se repite hasta que coincida
        while (true) {

            // Pedimos el segundo email
            segundoEmail = prompt("Introduzca de nuevo el email para verificar: ");

            if (segundoEmail == primerEmail) {

                // Informamos y devolvemos
                alert("Los emails coinciden.");
                return segundoEmail;
            } else {
                // aumentan los intentos e informamos
                intentos++;
                alert(`Error, los emails no coinciden. Intento: ${intentos}.`);
                // y se repite el bucle
            }
        }

    }

    // informamos y retornamos null
    alert("Has superado los intentos, error al registro.");
    return null;

}

function pedirPassw(primerPassw) {

    // Si email esta vacio (no se ha introducido la primera vez)
    if (primerPassw == "" || primerPassw == null) {

        // Tiene 3 intentos para introducir el primer mail
        let intentos = 3;

        while (intentos != 0) {

            // Pedimos el mail
            intentos--;
            primerPassw = prompt("Por favor, introduzca la contraseña: ");

            // Evaluamos si el mail es correcto
            if (esPassValida(primerPassw)) {

                // informamos y devolvemos
                alert("La contraseña escogida es válida.");
                return primerPassw;

            } else {

                // Informamos
                alert("La contraseña introducida no cumple los requisitos.");

            }

        }

    } else {    // Si es la segunda vez que se introduce el mail

        let segundoPassw = "";
        let intentos = 0;

        // Bucle se repite hasta que coincida
        while (true) {

            // Pedimos el segundo email
            segundoPassw = prompt("Introduzca de nuevo la contraseña: ");

            if (segundoPassw == primerPassw) {

                // Informamos y devolvemos
                alert("Las contraseñas coinciden.");
                return segundoPassw;
            } else {
                // aumentan los intentos e informamos
                intentos++;
                alert(`Error, las contraseñas no coinciden. Intento: ${intentos}.`);
                // y se repite el bucle
            }
        }

    }

    // informamos y retornamos null
    alert("Has superado los intentos, error al registro.");
    return null;

}

function impresion(email, password, mensaje) {

    // Capturamos tabla
    let tabla = document.getElementById("bodyTabla");

    tabla.innerHTML += `<tr><td>${email}<br>${password}</td><td>${mensaje}</td></tr>`;

}

/**
 * Author: @Dreddsoft
 * Date: 12/11/2024 (dd/MM/yyyy)
 * Version: 1.0
 * */ 

