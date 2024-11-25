function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    // Aplica el texto al contenedor del enunciado
    let enun = "<p><b>Ejercicio 10.</b> Realiza una aplicación web dónde se muestren dos botones: </p>"
        + "<ul><li>Encriptar mensaje</li><li>Desencriptar mensaje</li></ul>"
        + "<p>Una vez pulsado el botón la aplicación solicitará por pantalla, mediante una ventana emergente, al usuario un mensaje y una clave numérica.</p>"
        + "<p>La aplicación empleará el alfabeto UNICODE para codificar/ decodificar el mensaje, dependiendo del botón clickado desplazando, cada carácter un número de veces igual al número que corresponda en la clave.</p>"
        + "<p>Muestra en la parte destinada para tal efecto de la aplicación web el mensaje encriptado/desencriptado.</p>"
        + "<p>El procedimiento manual para cifrar el mensaje sigue la siguiente heurística.</p>"
        + "<ul><li>Mensaje: Este es el mensaje</li><li>Clave: 12345</li><li>Mensaje cifrado: Fuwi%fu#iq!ohrxblh</li></ul>"
        + "<p><b>Ejemplo: </b></p>"
        + "<table><tr><th>ENTRADA</th><th>SALIDA</th></tr>"
        + "<tr><td>Este es el mensaje<br>12345</td><td><b>Mensaje cifrado:</b> Fuwi%fu#iq!ohrxblh</td></tr>"
        + "<tr><td>Fuwi%fu#iq!ohrxblh<br>12345</td><td><b>Mensaje descifrado:</b> Este es el mensaje</td></tr></table>";

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


// Función para la impresión del resultado en la tabla
function impresion(input1, input2, mensaje) {

    let tabla = document.getElementById("bodyTabla");

    tabla.innerHTML += `<tr><td>${input1}<br>${input2}</td><td>${mensaje}</td></tr>`;


}


function encriptar() {

    let frase = "Este es el mensaje";
    let clave = prompt("Introduce la clave: ");
    let mensaje = "";

    if (clave == "12345") {

        // encriptar el mensaje
        // para ello debemos sacar el caracter unicode
        let mensajeEncriptado = "";
        let desplazamiento = 0;
        for (let i = 0; i < frase.length; i++) {

            desplazamiento++;
            // Obtener el caracter actual
            let c = frase.charAt(i);

            // Calcular el nuevo carácter sumando el desplazamiento al código Unicode
            let cNew = String.fromCharCode(c.charCodeAt(0) + desplazamiento);
            mensajeEncriptado += cNew;

            console.log(`El caracter: ${c}, el desplazamiento: ${desplazamiento}`);

            // Si es un espacio, reiniciar pero transformando antes el espacio
            if (c === " ") {
                desplazamiento = 0;
            }


        }

        mensaje = `<b>Mensaje cifrado:</b> ${mensajeEncriptado}`;

    } else {
        mensaje = "<b>Error: </b>Clave erronea.";
    }

    impresion(frase, clave, mensaje);

}

function desencriptar() {

    let frase = "Fuwi%fu#fn#ngqwfpl";
    let clave = prompt("Introduce la clave: ");
    let mensaje = "";

    if (clave == "12345") {

        // encriptar el mensaje
        // para ello debemos sacar el caracter unicode
        let mensajeDesencriptado = "";
        let desplazamiento = 0;
        for (let i = 0; i < frase.length; i++) {

            desplazamiento++;
            // Obtener el caracter actual
            let c = frase.charAt(i);

            // Calcular el nuevo carácter sumando el desplazamiento al código Unicode
            let cNew = String.fromCharCode(c.charCodeAt(0) - desplazamiento);
            mensajeDesencriptado += cNew;

            console.log(`El caracter: ${c}, el desplazamiento: ${desplazamiento}`);

            // Si es un espacio, reiniciar pero transformando antes el espacio
            if (cNew === " ") {
                desplazamiento = 0;
            }

        }

        mensaje = `<b>Mensaje descifrado:</b> ${mensajeDesencriptado}`;

    } else {
        mensaje = "<b>Error: </b>Clave erronea.";
    }

    impresion(frase, clave, mensaje);

}



/**
 * Author: @Dreddsoft
 * Exercise: AE3.2 - ejercicio 10
 * Date: 24/11/2024 (dd/MM/yyyy)
 * Version: 1.0
 * */

