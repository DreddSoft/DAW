


function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    // Aplica el texto al contenedor del enunciado
    let enun = "<p><b>Ejercicio 5.</b> Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un código de cliente.</p>"
        + "<p>Dicho código contiene tres partes separadas por un guión:</p>"
        + "<ul><li>Dos caracteres:  CP: cliente particular, CE: empresa</li>"
        + "<li>Dos dígitos: 10 Local, 11 Autonómico, 12 Nacional, 20 Internacional</li>"
        + "<li>Una cifra que indica el número de años de antigüedad del cliente.</li></ul>"
        + "<p>Crea una función que decodifique dicho código de cliente. Adicionalmente, si el código es erróneo la función deberá informar del tipo de error o errores.</p>"
        + "<p>Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.</p>"
        + "<p><b>Ejemplo: </b></p>"
        + "<table><tr><th>ENTRADA</th><th>SALIDA</th></tr>"
        + "<tr><td>CP 12 3</td><td><b>Error:</b> Introduce el código separado por guiones</td></tr>"
        + "<tr><td>CP-12-3</td><td>El código introducido pertenece a un cliente particular de origen nacional con 3 años de antigüedad.</td></tr>"
        + "<tr><td>CC-12-3</td><td><b>Error:</b> El tipo de cliente introducido no es correcto</td></tr></table>";

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
    let codigoInput = "";
    let mensajeParts = [];
    let errores = [];
    const REGEX = /^(CP|CE)-((10|11|12|20))-(\d){1,2}$/;
    let mensaje = "";

    // No verificamos el texto introducido por que el cliente puede introducir algo erroneo
    codigoInput = prompt("Introduzca el código: ");

    // Codigo es correcto
    if (REGEX.test(codigoInput)) {

        mensajeParts = decodificarMensajeValido(codigoInput);

        // Se construye el mensaje final con la interpretacion del codigo valido
        //El código introducido pertenece a un cliente particular de origen nacional con 3 años de antigüedad.
        mensaje = `El código introducido pertenece a un ${mensajeParts[0]}, de origen ${mensajeParts[1]} y con ${mensajeParts[2]} años de antigüedad. `;

    } else {

        // Expresiones regulares para casos especiales
        const SINGUION = /^(CP|CE)((10|11|12|20))(\d)$/;
        const CONESPACIOS = /^(CP|CE)\s((10|11|12|20))\s(\d)$/;
        const MINUSCULAS = /^(cp|ce)-((10|11|12|20))-(\d)$/;

        // Error: Introduce el código separado por guiones
        if (SINGUION.test(codigoInput)) {
            mensaje = `<b>Error:</b> Introduce el código separado por guiones.`
        } else if (CONESPACIOS.test(codigoInput)) {
            mensaje = `<b>Error:</b> Introduce el código separado por guiones y no por espacios.`;
        } else if (MINUSCULAS.test(codigoInput)) {
            mensaje = `<b>Error:</b> Introduce el código con las letras principales en MAYUSCULAS.`;
        } else if (codigoInput.length < 7 && codigoInput.length > 8) {
            mensaje = `<b>Error:</b> El código introducido tiene una longitud errónea, recuerda XX-00-00.`;
        } else { // Caso en el que hay un error en alguna parte del codigo pero tiene formato correcto

            errores = decodificarMensajeError(codigoInput);

            // Hacemos una purga si no tienen la palabra error
            for (let i = 0; i < errores.length; i++) {

                if (!errores[i].includes("Error")) {
                    errores[i] = "";
                }

                if (errores[i] != "") {
                    // Creamos el mensaje
                    mensaje = `${errores[i]}<br>`;
                }
            }

        }


    }

    // Impresión
    impresion(codigoInput, mensaje);

}

// Funcion para el significado 
function decodificarMensajeValido(codigo) {

    // Se entiende que es correcto, dividimos por (-)
    let partes = codigo.split("-");
    let msjRetorno = [];

    // Primera parte del codigo
    msjRetorno[0] = primeraParteCodigo(partes[0]);

    // Segunda parte del codigo
    msjRetorno[1] = segundaParteCodigo(partes[1]);

    // Tercera parte del codigo
    msjRetorno[2] = terceraParteCodigo(partes[2]);

    return msjRetorno;

}

// Evaluar primera parte del codigo
function primeraParteCodigo(parte) {

    let tmp = "";

    switch (parte) {
        case "CP":
            tmp = "Cliente Particular";
            break;

        case "CE":
            tmp = "Cliente Empresa";
            break;

        default:
            tmp = "<b>Error:</b> Tipo de cliente NO ES VALIDO.";
            break;
    }

    return tmp;

}

// Evaluar segunda parte del codigo
function segundaParteCodigo(parte) {

    let tmp = "";

    switch (parte) {
        case "10":
            tmp = "Local";
            break;

        case "11":
            tmp = "autonomico";
            break;

        case "12":
            tmp = "nacional";
            break;

        case "20":
            tmp = "internacional";
            break;

        default:
            tmp = "<b>Error: </b> Tipo de digito de zona NO ES VALIDO.";
            break;
    }

    return tmp;

}

// Evaluar tercera parte del codigo
function terceraParteCodigo(parte) {

    // Transformamos parte a int
    let tmp = parseInt(parte);

    return (tmp < 0 || tmp > 15)
        ? "<b>Error:</b> La antiguedad introducida NO ES VALIDA."
        : tmp;

}

// Funcion para decodificarError
function decodificarMensajeError(codigo) {

    // Se entiende que es correcto, dividimos por (-)
    let partes = codigo.split("-");
    let msjRetorno = [];


    if (codigo.length != 7 && codigo.length != 8) {
        msjRetorno[0] = "El codigo introducido no cumple con la longitud requerida.";
        return msjRetorno;
    }

    // Primera parte del codigo
    msjRetorno[0] = primeraParteCodigo(partes[0]);

    // Segunda parte del codigo
    msjRetorno[1] = segundaParteCodigo(partes[1]);

    // Tercera parte del codigo
    msjRetorno[2] = terceraParteCodigo(partes[2]);

    return msjRetorno;
}

// Función para la impresión del resultado en la tabla
function impresion(input, mensaje) {

    let tabla = document.getElementById("bodyTabla");

    tabla.innerHTML += `<tr><td>${input}</td><td>${mensaje}</td></tr>`;


}

/**
 * Author: @Dreddsoft
 * Exercise: AE3.2 - ejercicio 5
 * Date: 20/11/2024 (dd/MM/yyyy)
 * Version: 1.0
 * */

