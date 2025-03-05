const bombas = [0, 1];
let cnt = 1;
let elecciones = [];

// Generar aleatorios de las bombas
do {
    bombas[0] = [Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1];
    bombas[1] = [Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1];
} while (bombas[0][0] === bombas[1][0] && bombas[0][1] === bombas[1][1]);

//! Comentar el anterior y descomentar esta si quieres intentar ganar
// bombas[0] = [1, 1];
// bombas[1] = [1, 2];

console.log("Bombas creadas!");


function jugar() {

    // coordenadas
    let coordenadas = [];


    // Pedir 2 veces
    for (let i = 1; i <= 2; i++) {

        // Elegimos
        let elegido = parseInt(prompt(`Elige la ${i} coordenada, valores entre 1 y 5: `));

        // Comprobamos
        while (elegido < 1 || elegido > 5) {

            elegido = parseInt(prompt(`Error, el valor debe ser entre 1 y 5. Elige la ${i} coordenada: `));
        }

        // Guardamos la coordenada
        coordenadas[i - 1] = elegido

    }

    // Comprobar si la elección ya ha sido realizada
    for (let i = 0; i < elecciones.length; i++) {
        if (elecciones[i][0] === coordenadas[0] && elecciones[i][1] === coordenadas[1]) {
            alert("Ya has elegido esta coordenada antes, elige otra.");
            return;
        }
    }

    // Guardamos la elección
    elecciones.push(coordenadas.slice());

    // Comprobar si las coordenadas coinciden con alguna bomba
    for (let i = 0; i < bombas.length; i++) {
        if (bombas[i][0] === coordenadas[0] && bombas[i][1] === coordenadas[1]) {
            let fila = coordenadas[0];
            let col = coordenadas[1];
            document.getElementById(`${fila}-${col}`).innerHTML = "💣";
            alert("La caja contiene una mina, GAME OVER!!");
            document.getElementById("btn-jugar").setAttribute("disabled", true);
            return;
        }
    }

    // Comprobar si se han descubierto todas las posiciones sin caer en bomba
    if (elecciones.length === (5 * 5) - bombas.length) {
        alert("No hay más cajas vacías, YOU ARE A WINNER!!!");
        exit = true;
    }

    // Si no es bomba
    let fila = coordenadas[0];
    let col = coordenadas[1];
    console.log(fila);
    console.log(col);

    document.getElementById(`${fila}-${col}`).innerHTML = "☁️";


}