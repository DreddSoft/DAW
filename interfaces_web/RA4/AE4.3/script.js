let canvas = null, lienzo = null;

let x = 50, y = 50;

let lastPress = null;

const KEY_LEFT = "ArrowLeft";
const KEY_UP = "ArrowUp";
const KEY_RIGHT = "ArrowRight";
const KEY_DOWN = "ArrowDown";


canvas = document.getElementById("lienzo");

function iniciar() {

    lienzo = canvas.getContext("2d");

    run();
    
}

function run() {

    requestAnimationFrame(run);
    accionesJuego();
    pintarLienzo(lienzo);
    
}

function accionesJuego() {

    if (lastPress === KEY_RIGHT) {
        x += 3;
    } else if (lastPress === KEY_LEFT) {
        x -= 3;
    } else if (lastPress === KEY_UP) {
        y -= 3;
    } else if (lastPress === KEY_DOWN) {
        y += 3;
    }

    if (x >= canvas.width) {
        alert("Dead");
        return;
    }

    if (x < 0) {
        alert("Dead");
        return;
    }

    if (y >= canvas.height) {
        alert("Dead");
        return;
    }

    if (y < 0) {
        alert("Dead");
        return;
    }

    
}

function pintarLienzo(lienzo) {

    lienzo.fillStyle = "#6B6054";
    lienzo.fillRect(0, 0, canvas.width, canvas.height);
    lienzo.fillStyle = "#0f0";
    lienzo.fillRect(x, y, 10, 10);
    
}


// EVENTOS
window.addEventListener("load", iniciar, false);

document.addEventListener("keydown", (event) => {
    lastPress = event.code;

}, false);