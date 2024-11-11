function jugar() {

    // Primero pintar la tabla completa
    let tbody = document.getElementById("tbody");
    let coordenadas = [];
    // coordenadas de las bombas
    const bombas = [0, 1];
    // En el ejercicio hemos decidido que 3x3
    let nFilas = 3;
    let nColumnas = 3;

    //tablero 
    let tablero = [];

    // Rellenar tableero
    for (let i = 0; i < nFilas; i++) {
        tablero[i] = [];
        for (let j = 0; j < nColumnas; j++) {
            tablero[i][j] = "📦";
        }

    }

    // Imprimimos el tablero con cajas
    for (let i = 0; i < tablero.length; i++) {
        // Abrimos etiqueta de fila
        let fila = `<tr id='r${i}'>`;

        // Celdas
        for (let j = 0; j < tablero[i].length; j++) {
            fila += `<td id='r${i}c${j}'>${tablero[i][j]}</td>`;

        }

        fila += `</tr>`;    // cerramos fila
        tbody.innerHTML += fila;
    }

    //* Funcion anonima para saber si coinciden las coordenadas con la bomba
    let esBomba = (coordenadas, bombas) => {

        if (coordenadas[0] == bombas[0] && coordenadas[1] == bombas[1]) {
            return true;
        }


        return false;;

    }

    let exit = false;

    do {

        // Pedimos las coordenadas
        while (true) {

            // Alert
            alert(`Recuerda, numeros enteros menores que ${nFilas - 1} para la primera coordenada y ${nColumnas - 1} para la segunda coordenada.`);

            // primera coordenada
            coordenadas[0] = parseInt(prompt("Introduce la primera coordenada: "));

            // segunda coordenada
            coordenadas[1] = parseInt(prompt("Introduce la segunda coordenada: "));

            if ((coordenadas[0] >= 0 && coordenadas[0] < nFilas) && (coordenadas[1] >= 0 && coordenadas[1] < nColumnas)) {
                // Se cumplen las condiciones salimso del bucle
                break;
            }

        }

        if (esBomba(coordenadas, bombas)) {
            // Coge la celda e imprime una bomba
            document.getElementById(`r${coordenadas[0]}c${coordenadas[1]}`).innerHTML = "💣";
            alert("BOMBA! has fallado y has pulsado sobre una mina.");

            // Se sale del juego
            exit = true;
        } else {

            // Coge la celda e imprime 
            document.getElementById(`r${coordenadas[0]}c${coordenadas[1]}`).innerHTML = "☁️";
            alert("Perfecto, continua.");

        }

    } while (!exit);

    //* Fin del juego
    alert("FIN DEL JUEGO.");
    

}