// VARIABLES Y CONSTANTES
let canvas = null;
let ctx = null;

// Tamaño base de la serpiente y de los segmentos comida y obstaculos
const CELDAS = 20;
const CELDA_SIZE = 20;


const VELOCIDAD_JUEGO = 40;

const KEY_LEFT = "ArrowLeft";
const KEY_UP = "ArrowUp";
const KEY_RIGHT = "ArrowRight";
const KEY_DOWN = "ArrowDown";
const KEY_W = "w";
const KEY_A = "a";
const KEY_S = "s";
const KEY_D = "d";

const SNAKE_COLOR = "#00FF00";



// Clase segmento
class Segmento {

    #_x;
    #_y;
    #_color;

    // Constructor
    constructor(x, y, color) {
        this.#_x = x;
        this.#_y = y;
        this.#_color = color;


    }

    get x() {
        return this.#_x;
    }

    set x(x) {
        this.#_x = x;
    }

    get y() {
        return this.#_y;
    }

    set y(y) {
        this.#_y = y;
    }

    // Funcion que dibuja el segmento
    dibujar() {
        ctx.fillStyle = this.#_color;
        ctx.fillRect(this.#_x, this.#_y, CELDA_SIZE, CELDA_SIZE);
        console.log(`Coordenadas dibujadas: ${this.#_x} y ${this.#_y}`);
    }


}

class Comida extends Segmento {

    #_imagen;

    // Constructor
    constructor(x, y, imagenSrc) {
        super(x, y, SNAKE_COLOR);
        this.#_imagen = new Image;
        this.#_imagen.src = imagenSrc;

    }

    dibujar() {
        ctx.drawImage(this.#_imagen, this.x, this.y, CELDA_SIZE, CELDA_SIZE);
    }
}

class Juego {

    #_snake;
    #_direccion;
    #_comida;
    #_obstaculos;
    #_jugador;
    #_primerComida;
    #_nuevaDireccion;


    constructor() {
        // Sin pasar parametros, inicializamos el juego
        this.#_snake = [new Segmento(300, 240, SNAKE_COLOR)];
        this.#_direccion = "";
        this.#_comida = this.generarComidaAleatoria();
        this.#_obstaculos = [];
        this.#_jugador = true;
        this.#_nuevaDireccion = "";

        document.addEventListener("keydown", this.cambiarDireccion.bind(this), false);

    }

    // Funcion apra generar las posiciones
    generarComidaAleatoria() {
        // Variables
        let x, y, valido;

        do {

            // Sacamos posición eje x en el base al ancho
            // x = Math.round(Math.random() * (600 / CELDA_SIZE)) * CELDA_SIZE;
            x = Math.floor(Math.random() * 30) * CELDA_SIZE;
            console.log("Esta es la posición x de la comida: " + x);

            // y = Math.round(Math.random() * (480 / CELDA_SIZE)) * CELDA_SIZE;
            y = Math.floor(Math.random() * 24) * CELDA_SIZE;
            console.log(`Esta es la posición y de la comida: ${y}`);

            // Si no hay obstaculos
            if (!this.#_obstaculos) {
                valido = !this.#_snake.some(seg => seg.x === x && seg.y === y);
            } else {    // Si hay obstaculos
                valido = !this.#_snake.some(seg => seg.x === x && seg.y === y) && !this.#_obstaculos.some(obs => obs.x === x && obs.y === y);
            }

        } while (!valido);


        return new Comida(x, y, "assets/rat.png");

    }

    // Funcion para generar 
    generarObstaculoAleatorio() {
        // Variables
        let x, y, valido;


        do {
            // Sacamos posicion eje x en base al ancho
            // x = Math.round(Math.random() * (600 / CELDA_SIZE)) * CELDA_SIZE;
            x = Math.floor(Math.random() * 30) * CELDA_SIZE;
            // Sacamos posicion eje y en base al alto
            // y = Math.round(Math.random() * (480 / CELDA_SIZE)) * CELDA_SIZE;
            y = Math.floor(Math.random() * 24) * CELDA_SIZE;

            valido = !this.#_snake.some(segmento => segmento.x === x && segmento.y === y) &&
                !this.#_obstaculos.some(obstaculo => obstaculo.x === x && obstaculo.y === y);

        } while (!valido);

        return new Comida(x, y, "assets/piedra.png");


    }

    // Funcion para controlar el cmabio de direccion
    cambiarDireccion(event) {
        const tecla = event.key;

        if ((tecla === KEY_UP || tecla === KEY_W) && this.#_direccion !== "DOWN") {
            // Si se cumple que se pulsa arriba y no va para abajo
            // console.log(KEY_UP);
            this.#_nuevaDireccion = "UP";
        } else if ((tecla === KEY_DOWN || tecla === KEY_S) && this.#_direccion !== "UP") {
            // Si se pulsa hacia abajo y no va para arriba
            // console.log(KEY_DOWN);

            this.#_nuevaDireccion = "DOWN";
        } else if ((tecla === KEY_LEFT || tecla === KEY_A) && this.#_direccion !== "RIGHT") {
            // Si se pulsa izquierda, y no va para derecha
            // console.log(KEY_LEFT);

            this.#_nuevaDireccion = "LEFT";
        } else if ((tecla === KEY_RIGHT || tecla === KEY_D) && this.#_direccion !== "LEFT") {
            // Si se pulsa derecha y no va para izquierda

            this.#_nuevaDireccion = "RIGHT";
        }


    }


    // Actualizar
    actualizar() {
        // Si no esta jugando, nada
        if (!this.#_jugador) return;


        // Si esta jugando
        const snakeCabeza = this.#_snake[0];
        // let nuevaX = snakeCabeza.x;
        // let nuevaY = snakeCabeza.y;
        let nuevaX = snakeCabeza.x;
        let nuevaY = snakeCabeza.y;


        // Check te change is too fase
        // Controlamos, segun la tecla, el movimiento del 
        // Verifica si la serpiente está en una posición válida para cambiar de dirección
        if (snakeCabeza.x % 20 === 0 && snakeCabeza.y % 20 === 0) {
            this.#_direccion = this.#_nuevaDireccion;
        }

        if (this.#_direccion === "UP") {
            nuevaY -= CELDA_SIZE;
        }

        if (this.#_direccion === "DOWN") {
            nuevaY += CELDA_SIZE;
        }

        if (this.#_direccion === "LEFT") {
            nuevaX -= CELDA_SIZE;
        }

        if (this.#_direccion === "RIGHT") {
            nuevaX += CELDA_SIZE;
        }


        // Comprobar que no se choque consigo mismo
        for (let i = 1; i < this.#_snake.length; i++) {
            if (this.#_snake[i].x === nuevaX && this.#_snake[i].y === nuevaY) {
                let volver = confirm("Has Perdido!😢 ¿Deseas reiniciar?");
                if (volver) {
                    this.reiniciar();
                return;

                } else {
                    window.close();
                }
            }
        }

        // Comprobar que no se choque con los obstaculos
        for (let obstaculo of this.#_obstaculos) {
            if (obstaculo.x === nuevaX && obstaculo.y === nuevaY) {
                let volver = confirm("Has Perdido!😢 ¿Deseas reiniciar?");
                if (volver) {
                    this.reiniciar();
                return;

                } else {
                    window.close();
                }
            }
        }

        // Controlar los bordes del mapa, yo paso de que se pierda, entonces, se cambian los ejes
        if (nuevaX < 0) {
            nuevaX = 600 - CELDA_SIZE;
        } else if (nuevaX >= 600) {
            nuevaX = 0;
        } else if (nuevaY < 0) {
            nuevaY = 480 - CELDA_SIZE;
        } else if (nuevaY >= 480) {
            nuevaY = 0;
        }

        // Agregar un nuevo segmento en la cabeza de la serpiente
        this.#_snake.unshift(new Segmento(nuevaX, nuevaY, SNAKE_COLOR));

        // Comprobamos si la serpiente come
        // Posicion de la snake
        let sx = this.#_snake[0].x;
        let sy = this.#_snake[0].y;

        // Posicion de la comida
        let cx = this.#_comida.x;
        let cy = this.#_comida.y;

        if (cx === sx && cy === sy) {
            this.#_comida = this.generarComidaAleatoria();
            // Añadir el nuevo segmento a una distancia mayor de la cabeza
            let newSegmentX = this.#_snake[this.#_snake.length - 1].x;
            let newSegmentY = this.#_snake[this.#_snake.length - 1].y;

            // if (this.#_direccion === "UP") {
            //     newSegmentY += CELDA_SIZE;
            // } else if (this.#_direccion === "DOWN") {
            //     newSegmentY -= CELDA_SIZE;
            // } else if (this.#_direccion === "LEFT") {
            //     newSegmentX += CELDA_SIZE;
            // } else if (this.#_direccion === "RIGHT") {
            //     newSegmentX -= CELDA_SIZE;
            // }


            this.#_snake.push(new Segmento(newSegmentX, newSegmentY, SNAKE_COLOR));
            this.#_snake.pop();


            if (!this.#_primerComida) {
                this.#_primerComida = true;
                // Generar obstaculos
                for (let i = 0; i < 5; i++) {
                    this.#_obstaculos.push(this.generarObstaculoAleatorio());
                }
            }

        } else {
            this.#_snake.pop();
        }

        // Establecer el nivel
        let nivel = this.#_snake.length;
        localStorage.setItem("nivel", `${nivel}`);


        nivel = localStorage.getItem("nivel");
        // Impresión
        document.getElementById("levelDisplay").innerHTML = `${nivel}`;

        //* Finaliza el juego
        if (this.#_snake.length === 11) {
            let volver = confirm("You are a winner!🥳 ¿Deseas reiniciar?");
            if (volver) {
                this.reiniciar();
            return;

            } else {
                window.close();
            }
        }

    }


    // Funcion reiniciar
    reiniciar() {
        // Mismos parametros que en el constructor
        this.#_snake = [new Segmento(20, 20, SNAKE_COLOR)];
        this.#_direccion = "RIGHT";
        this.#_comida = this.generarComidaAleatoria();
        this.#_obstaculos = [];
        this.#_jugador = true;
        this.#_primerComida = false;
    }

    // Dibujar
    dibujar() {
        ctx.fillStyle = "#282c34";
        ctx.fillRect(0, 0, 600, 480);
        this.#_snake.forEach((segmento) => {
            segmento.dibujar();
        });
        this.#_comida.dibujar();
        this.#_obstaculos.forEach(obs => {
            obs.dibujar();
        });
    }

}

// Nuevo Juego
const game = new Juego();

function iniciar() {

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    run();

}

function run() {

    setTimeout(() => {
        requestAnimationFrame(run);
        game.actualizar();
        game.dibujar();
    }, VELOCIDAD_JUEGO);

}


// Evento de carga que ejecute el bucle
// document.addEventListener('load', bucle, false);

window.addEventListener("load", iniciar, false);
