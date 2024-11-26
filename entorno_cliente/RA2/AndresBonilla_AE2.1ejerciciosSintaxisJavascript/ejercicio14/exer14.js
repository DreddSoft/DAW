
//* Mostrar enunciado
function mostrarEnunciado() {

    document.getElementById("enunciado").style.display = "block";


    // Ocultamos boton ver
    document.getElementById("ver").style.display = "none";

    // Mostramos el boton ocultar
    document.getElementById("ocultar").style.display = "block";

}

function ocultarEnunciado() {

    // Ocultamos enunciado
    document.getElementById("enunciado").style.display = "none";

    // Ocultamos btn ocultar
    document.getElementById("ocultar").style.display = "none";

    // Mostrar btn ver
    document.getElementById("ver").style.display = "block";

}

function exercise14() {

    // Array de letas
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let dni = "";
    let letra = "";
    let dniNum = 0;

    // Bucle para repetir
    while (true) {

        dniNum = prompt("Introduce el número del dni (sin letra): ");

        // Verificar
        if (isNaN(dniNum) || dniNum < 0 || dniNum > 99999999) {
            alert("El número no es valido. Recuerda, debe ser un número entre 00000001 y 99999999.")
            continue;
        }

        // Letra
        let letra = prompt("Introduce la letra del dni: ");

        // Pasamos a mayus
        letra = letra.toUpperCase();

        // indice
        let idx = parseInt(dniNum % 23);

        // Comparacion
        if (letra !== letras[idx]) {
            alert("La letra indicada no es la correcta.");

        } else {    // Es correcta la letra
            // Creamos dni completo
            dni = dniNum + letra;
            alert("El dni " + dni + " es correcto.");
            break; // salimos del bucle
        }
        
    }

    // Display en la tabla
    let tabla = document.getElementById("bodyTabla");

    tabla.innerHTML += `<tr><td>${dniNum}<br>${letra}</td><td>${dni}</td></tr>`;

}




