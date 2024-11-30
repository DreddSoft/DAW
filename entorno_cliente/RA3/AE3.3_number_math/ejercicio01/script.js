function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    // Aplica el texto al contenedor del enunciado
    let enun = "<p><b>Ejercicio 1.</b> Realiza una aplicación web que simule el comportamiento del juego de La Primitiva propiedad de Loterías y Apuestas del Estado.</p>"
        + "<p><b><i>Nota:</i></b> La finalidad de este ejercicio es puramente académica, juega responsablemente sólo si eres mayor de edad. En ningún caso se pretende fomentar la ludopatía.</p>"
        + "<p>La aplicación solicitará al usuario, mediante una ventana emergente, un número del 1 al 8 correspondiente a una cantidad de combinaciones.</p>"
        + "<p>A continuación, se mostrará en la parte destinada para tal efecto, un boleto con el número de combinaciones, introducido por el usuario, generadas de forma aleatoria.</p>"
        + "<p>Cada combinación consta de 6 números del 1 al 49. En una combinación, los números no se pueden repetir. Cada boleto tiene un número del 1 al 10, correspondiente al reintegro.</p>"
        + "<p>A continuación, se muestra una captura de la aplicación web <a src='https://juegos.loteriasyapuestas.es/jugar/la-primitiva/apuesta/' target='_blank'>https://juegos.loteriasyapuestas.es/jugar/la-primitiva/apuesta/</a>, para que sirva de inspiración y ayuda.</p>"
        + "<img src='quiniela.jpg' alt='Ejemplo de juegos' style='place-self: center'>";

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


function jugar() {

    //* La aplicación solicitará al usuario, mediante una ventana emergente, un número del 1 al 8 correspondiente a una cantidad de combinaciones.

    let numCombinaciones = combinaciones();
    let combinacion = [];
    let contenido = "";

    let tabla = document.getElementById("bodyTabla");

    for (let i = 0; i < numCombinaciones; i++) {

        combinacion = crearCombinacion(combinacion);

        // Impresion
        contenido += `<div class="capa-combinaciones">`
            + `<strong>${i + 1}</strong>`
            + `<div class="listado-combinacion">`
            + `<input type="text" name="item-combinacion${0}" id="item-combinacion${0}" value="${combinacion[0]}" class="item-combinacion">`
            + `<input type="text" name="item-combinacion${1}" id="item-combinacion${1}" value="${combinacion[1]}" class="item-combinacion">`
            + `<input type="text" name="item-combinacion${2}" id="item-combinacion${2}" value="${combinacion[2]}" class="item-combinacion">`
            + `<input type="text" name="item-combinacion${3}" id="item-combinacion${3}" value="${combinacion[3]}" class="item-combinacion">`
            + `<input type="text" name="item-combinacion${4}" id="item-combinacion${4}" value="${combinacion[4]}" class="item-combinacion">`
            + `<input type="text" name="item-combinacion${5}" id="item-combinacion${5}" value="${combinacion[5]}" class="item-combinacion">`
            + `</div></div><br>`;

    }

    // Añadir el reintegro al contenido
    contenido += `<input type="text" name="reintegro" id="reintegro" value="${reintegro()}" class="reintegro">`;


    // Cerrar la celda, la fila y la tabla
    tabla.innerHTML += `<tr><td>Numero de combinaciones: ${numCombinaciones}</td><td>${contenido}</td><tr>`;

}

// Función complementaria para sacar el número de combinaciones y controlar errores
function combinaciones() {

    // Pedir un numero
    let num = parseInt(prompt("Introduce un número de combinaciones entre 1 y 8, ¿Cuántas combinaciones?"));

    while (isNaN(num) || num < 1 || num > 8) { // Mientras que sea menor que 1 y mayor que 8

        // Volvemos a pedir e informamos
        num = parseInt(prompt("Error, recuerda un número entre 1 y 8. ¿Qué número eliges?"));
    }

    return num;

}

function crearCombinacion() {

    let combinacion = [];

    for (let i = 0; i < 6; i++) {
        // Random entero entre 1 y 49
        let randomNum = parseInt((Math.random() * 49) + 1);
        console.log(`El primer numero random es: ${randomNum}`);

        // Seguimos creando random hasta que no este en combinaciones, asi evitamos la repeticion
        while (combinacion.includes(randomNum)) {

            randomNum = parseInt((Math.random() * 49) + 1);
            console.log(`EL random estaba repetido, el nuevo es: ${randomNum}`);

        }

        // Insertamos en combinaciones
        combinacion.push(randomNum);
    }

    return combinacion;

}

function reintegro() {

    // Crear un numero random del 0 al 9
    return parseInt((Math.random() * 9) + 1);
    
}


/**
 * Author: @Dreddsoft
 * Exercise: AE3.3 - ejercicio 01
 * Date: 28/11/2024 (dd/MM/yyyy)
 * Version: 1.0
 * */

