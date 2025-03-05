// Usamos la función para captar el nivel
let nFilas = parseInt(captarNivel());
let nColumnas = parseInt(captarNivel());

// Bombas
bombas = generaBombas(nFilas);

idBomba1 = `f${bombas[0][0]}c${bombas[0][1]}`;
idBomba2 = "fc";
console.log(idBomba1);
if (nFilas > 2) {
    idBomba2 = `f${bombas[1][0]}c${bombas[1][1]}`;
    console.log(idBomba2);
}


console.log(`Numero de filas: ${nFilas} y columnas: ${nColumnas}`);

addEventListener('DOMContentLoaded', () => {

    impresionTablero(nFilas, nColumnas);

    document.querySelector("#hNivel").innerHTML = `Nivel ${nFilas}`;


});


// Función generar tablero
function impresionTablero(nFilas, nColumnas) {

    let tbody = document.getElementById("tbody");

    for (let f = 0; f < nFilas; f++) {

        // Abrimos etiqueta de fila
        let fila = `<tr id='r${f}'>`;
        for (let c = 0; c < nColumnas; c++) {
            fila += `<td><button type="button" class="pulsa" id="f${f}c${c}" onclick="pulsar(this.id);"></button></td>`;
        }

        fila += `</tr>`;    // cerramos fila
        tbody.innerHTML += fila;
    }



}


//* Función para recibir el nivel
function captarNivel() {

    // Capturamos el parámetro nivel
    let nivelStr = window.location.search;

    // Depurar
    const REGEX = /\d/;
    let nivel = nivelStr[nivelStr.search(REGEX)];

    if (nivel == "" || nivel == null) {
        // Si no hay parametro nivel, establecemos le nivel base en 3
        nivel = 5;
    }

    // Devolvemos el nivel
    return parseInt(nivel);

}

//* Función para generar bomba en las coordenadas
function generaBombas(nFilas) {

    // Variable
    bombas = [];
    bombas[0] = [0, 0];
    bombas[1] = [0, 0];

    // El tablero del juego es una matriz, cogemos el número de filas, que será el mismo que el columnas
    if (nFilas <= 2) {
        // Generamos una bola
        bombas[0] = [
            Math.floor(Math.random() * nFilas),
            Math.floor(Math.random() * nFilas)
        ];
    } else {
        // Generamos dos bombas
        do {


            bombas[0] = [
                Math.floor(Math.random() * nFilas),
                Math.floor(Math.random() * nFilas)
            ];


            bombas[1] = [
                Math.floor(Math.random() * nFilas),
                Math.floor(Math.random() * nFilas)
            ];


        } while (bombas[0][0] === bombas[1][0] && bombas[0][1] === bombas[1][1]);
    }



    console.log(`Bomba 0: ${bombas[0]}`);
    console.log(`Bomba 1: ${bombas[1]}`);

    return bombas;

}

//* Función pulsar
function pulsar(id) {

    // Capturar boton
    let btn = document.getElementById(id);

    // Si es una bomba
    if (id == idBomba1 || id == idBomba2) {

        // Aplicamos estilo bomba
        btn.classList.add("bomba");
        btn.classList.remove("pulsa");

        // Ejecutamos la funcion FIN DEL JUEGO
        finDelJuego();
    } else {
        // Aplicamos estilo pulsado
        btn.classList.add("pulsado");
        btn.classList.remove("pulsa");

    }

}

//* Funcion fin del juego
function finDelJuego() {

    // Como el tablero es una matriz, recorremos en un doble bucle for el nFilas
    for (let i = 0; i < nFilas; i++) {

        for (let j = 0; j < nFilas; j++) {
            // Desactivamos todos los botones
            document.getElementById(`f${i}c${j}`).setAttribute("disabled", "disabled");
        }

    }

    // Mensaje de impresion de fin del juego
    document.getElementById("finDelJuego").innerHTML = "FIN DEL JUEGO";

}