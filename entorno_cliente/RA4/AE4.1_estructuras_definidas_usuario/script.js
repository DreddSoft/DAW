// Capturamos y guardamos en variables ciertas cositas
const menu = document.querySelector("#menu");
const infoMesa = document.querySelector("#info-mesa");

// Botones de abrir y cerrar mesa
const abrirMesaBtn = document.querySelector("#abrir");
const cerrarMesaBtn = document.querySelector("#cerrar");

// Array de mesas
let mesas = [];

//* Evento de carga del DOM
addEventListener('DOMContentLoaded', () => {

    // Función para saber si la mesa está abierda
    mesaEstaAbierta();

});


// Definimos la clase mesa
class Mesa {

    // Variables private no definidas
    #_numero;
    #_comensales;

    // Constructor de la clase
    constructor(numero) {
        this.#_numero = numero;
        // Todas las mesas se inician a comensales = 0
        this.#_comensales = 0;

    }

    // GETTERS Y SETTERS
    get numero() {
        return this.#_numero;
    }

    set numero(numero) {
        this.#_numero = numero;
    }

    get comensales() {
        return this.#_comensales;
    }

    set comensales(comensales) {
        this.#_comensales = comensales;
    }

    // Funciones personalizadas
    getUbicacionMesa() {

        if (this.#_numero <= 4) {
            imprimir("La mesa se encuentra en la primera fila de mesas del salón");
        }
    }
}

//* EVENTOS
// capturamos todos los botones butaca
const butacas = document.querySelectorAll(".butaca");
const mesa4 = document.querySelectorAll(".mesa4");
const mesa6 = document.querySelectorAll(".mesa6");

// Recorremos todas las butacas
if (butacas) {
    butacas.forEach((butaca) => {

        console.log("En el bucle");

        // Evento
        butaca.addEventListener('dblclick', () => {

            console.log("En el evento");

            // Funcion para el click de abrir menu
            abrirMenu(butaca.id);

        });
    });
}

if (mesa4) {

    mesa4.forEach((mesa) => {

        console.log("En el bucle de mesas4");

        mesa.addEventListener('dblclick', () => {

            console.log("En el evento de mesa4");

            // Funcion para abrir menu
            abrirMenu(mesa.id);

        });
    })

}

if (mesa6) {

    mesa6.forEach((mesa) => {

        console.log("En el bucle de mesa 6");

        mesa.addEventListener('dblclick', () => {

            console.log("En el evento de mesa6");

            // Funcion abrir menu
            abrirMenu(mesa.id);
        });

    });
}

function imprimir(mensaje) {

    // Capturamos el div de impresión
    let logs = document.querySelector("#logs");

    logs.innerHTML += `${mensaje}<br>`;

}

// Función Para arbir el menu de la aplicación.
function abrirMenu(id) {


    let y = (parseInt(screen.height) / 2) - 250;
    let x = (parseInt(screen.width) / 2) - 250;


    let nuevaVentana = window.open(`menu.html?id=${id}`, "popup", "width=500, height=500, toolbar=1, menubar=1");
    nuevaVentana.moveTo(x, y);

}

// Funcion para abrir una mesa (instanciar un objeto de tipo mesa)
function abrirMesa() {

    // 1. Capturar el id de la url
    const id = getIdFromUrl();

    // 2. Crear nuevo bjeto de mesa
    let mesa = new Mesa(id);

    // 3. Guardar mesa en Array
    mesas.push(mesa);
    console.log(mesas);

    // 4. Cambiar botonera
    abrirMesaBtn.setAttribute("hidden", true);

    cerrarMesaBtn.removeAttribute("hidden");

}

//* Función saber si mesa esta abierta
function mesaEstaAbierta() {

    // Variables
    $existe = false;

    // 1. Capturamos el id de la url
    const id = getIdFromUrl();

    // 2. Comprobamos en el array de mesas que no coincida el número con el id
    for (mesa in mesas) {

        if (mesa.getNumero() == id) {
            $existe = true;
        }

    }

    // 3. Si existe desactivamos el botón abrirMesa
    if ($existe) {

        abrirMesaBtn.setAttribute("hidden", true);
        cerrarMesaBtn.removeAttribute("hidden");

    } else {

        abrirMesaBtn.removeAttribute("hidden");
        cerrarMesaBtn.setAttribute("hidden", true);

    }

}

//* Función asignar comensales
function addComensal() {

    // 1. Capturamos el id de la url



}

//* Función para mostrar los datos de una mesa
function showTableData() {

    // Capturam

}

//* Función para capturar el id de la url
function getIdFromUrl() {

    let url = new URL(location.href);
    let params = new URLSearchParams(url.search);

    // Sacamos el parametro id
    const id = params.get('id');

    return id;

}

//* Cerrar ventana
function closeWindow() {

    window.close();
    
}

