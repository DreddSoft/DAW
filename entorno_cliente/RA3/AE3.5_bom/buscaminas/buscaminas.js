// Usamos la función para captar el nivel
let nFilas = parseInt(captarNivel());
let nColumnas = parseInt(captarNivel());

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





function jugar() {

    // Primero pintar la tabla completa

    let coordenadas = [];


    // coordenadas de las bombas
    const bombas = generateBomb(nFilas);

    //tablero 
    let tablero = [];

    // Rellenar tableero
    for (let i = 0; i < nFilas; i++) {
        tablero[i] = [];
        for (let j = 0; j < nColumnas; j++) {
            tablero[i][j] = "📦";
        }

    }


    //* Funcion anonima para saber si coinciden las coordenadas con la bomba
    let esBomba = (coordenadas, bombas) => {

        if (coordenadas[0] == bombas[0] && coordenadas[1] == bombas[1]) {
            return true;
        }


        return false;;

    }

    let exit = false;

    // do {

    //     // Pedimos las coordenadas
    //     while (true) {

    //         // Alert
    //         alert(`Recuerda, numeros enteros menores que ${nFilas - 1} para la primera coordenada y ${nColumnas - 1} para la segunda coordenada.`);

    //         // primera coordenada
    //         coordenadas[0] = parseInt(prompt("Introduce la primera coordenada: "));

    //         // segunda coordenada
    //         coordenadas[1] = parseInt(prompt("Introduce la segunda coordenada: "));

    //         if ((coordenadas[0] >= 0 && coordenadas[0] < nFilas) && (coordenadas[1] >= 0 && coordenadas[1] < nColumnas)) {
    //             // Se cumplen las condiciones salimso del bucle
    //             break;
    //         }

    //     }

    //     if (esBomba(coordenadas, bombas)) {
    //         // Coge la celda e imprime una bomba
    //         document.getElementById(`r${coordenadas[0]}c${coordenadas[1]}`).innerHTML = "💣";
    //         alert("BOMBA! has fallado y has pulsado sobre una mina.");

    //         // Se sale del juego
    //         exit = true;
    //     } else {

    //         // Coge la celda e imprime 
    //         document.getElementById(`r${coordenadas[0]}c${coordenadas[1]}`).innerHTML = "☁️";
    //         alert("Perfecto, continua.");

    //     }

    // } while (!exit);

    //* Fin del juego
    alert("FIN DEL JUEGO.");


}

//* Función para recibir el nivel
function captarNivel() {

    // Capturamos el parámetro nivel
    let nivelStr = window.location.search;
    console.log(nivelStr);

    // Depurar
    const REGEX = /\d/;
    let nivel = nivelStr[nivelStr.search(REGEX)];

    console.log(nivel);



    // Devolvemos el nivel
    return parseInt(nivel);

}

//* Función para generar bomba en las coordenadas
function generateBomb(nFilas) {

    // Variable
    bombas = [];
    bombas[0] = [0, 0];
    bombas[1] = [0, 0];

    // El tablero del juego es una matriz, cogemos el número de filas, que será el mismo que el columnas

    // Generamos dos bombas
    do {

        // rellenamos primera bomba
        for (let i = 0; i < bombas.length; i++) {

            for (let j = 0; j < bombas[i].length; j++) {
                let aleatorio = Math.floor(Math.random(nFilas));
            }

        }



    } while (bombas[0] == bombas[1]);

    console.log(`Bomba 0: ${bombas[0]}`);
    console.log(`Bomba 1: ${bombas[1]}`);

    return bombas;

}

//* Función pulsar
function pulsar(id) {

    // Capturar boton
    let btn = document.getElementById(id);

    // Aplicamos estilo pulsado
    btn.classList.add("pulsado");
    btn.classList.remove("pulsa");


    
}