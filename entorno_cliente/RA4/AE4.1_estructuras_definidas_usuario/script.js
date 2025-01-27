// Definimos la clase mesa
class Mesa {

    // Variables private no definidas
    #_numero;
    #_comensales;
    #_tipo;
    #_clientes;

    // Constructor de la clase
    constructor(numero, tipo) {
        this.#_numero = numero;
        // Todas las mesas se inician a comensales = 0
        this.#_comensales = 0;
        this.#_tipo = tipo;
        this.#_clientes = [];

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

    get tipo() {
        return this.#_tipo;
    }

    set tipo(tipo) {
        this.#_tipo = tipo;
    }

    // Funciones personalizadas
    get UbicacionMesa() {
        return this.#_numero;
    }

    // Función para añadir un cliente al array de clientes de la mesa
    addCliente(cliente) {
        this.#_clientes.push(cliente);
    }

    // Función para eliminar clientes
    removeCliente() {
        this.#_clientes.pop();
    }

    // Función que devuelve el coste total de toda la mesa (todos los clientes)
    getComandaMesa() {

        // Variable de precioMesa
        let precioMesa = 0;

        // Recorremos el array de clientes
        this.#_clientes.forEach((cliente) => {

            precioMesa += cliente.getPrecioCliente();
        });

        return precioMesa;
    }

}

// Creamos una clase cliente
class Cliente {

    // Atributos
    #_id;
    #_productos;

    constructor(id) {
        this.#_id = id;
        this.#_productos = [];
    }

    // GETTERS Y SETTERS
    set id(id) {
        this.#_id = id;
    }

    get id() {
        return this.#_id;
    }


    // Funciones propias
    addProducto(producto) {
        this.#_productos.push(producto);
    }

    // Obtener precio cliente
    getPrecioCliente() {

        let precioTotal = 0;

        // Recorremos los productos
        productos.forEach((producto) => {

            precioTotal = producto["precio"];

        })

        return precioTotal;
    }
}

// Capturamos y guardamos en variables ciertas cositas
const menu = document.querySelector("#menu");
const infoMesa = document.querySelector("#info-mesa");

// Botones de abrir y cerrar mesa
const abrirMesaBtn = document.querySelector("#abrir");
const cerrarMesaBtn = document.querySelector("#cerrar");
const addComensalBtn = document.getElementById("addC");
const removeComensalBtn = document.getElementById("remC");
const addProductoBtn = document.getElementById("addP");
const removeProductoBtn = document.getElementById("remP");
const comandaMesaBtn = document.getElementById("cM");
const comandaClienteBtn = document.getElementById("cC");
let mesas = [];


//* EVENTOS
// capturamos todos los botones butaca
const butacas = document.querySelectorAll(".butaca");
const mesa4 = document.querySelectorAll(".mesa4");
const mesa6 = document.querySelectorAll(".mesa6");

//* Array de productos
const productos = [
    { nombre: "zamburiñas", precio: 3.5 },
    { nombre: "mejillones", precio: 3.5 },
    { nombre: "gambas", precio: 3.5 },
    { nombre: "vino blanco", precio: 3.5 },
    { nombre: "cerveza Victoria", precio: 3.5 }
];

// Recorremos todas las butacas
if (butacas) {
    butacas.forEach((butaca) => {

        // Evento
        butaca.addEventListener('dblclick', () => {

            // Funcion para el click de abrir menu
            abrirMenu(butaca.id);

        });
    });
}

if (mesa4) {

    mesa4.forEach((mesa) => {

        mesa.addEventListener('dblclick', () => {

            // Funcion para abrir menu
            abrirMenu(mesa.id);

        });
    })

}

if (mesa6) {

    mesa6.forEach((mesa) => {

        mesa.addEventListener('dblclick', () => {

            // Funcion abrir menu
            abrirMenu(mesa.id);
        });

    });
}

if (abrirMesaBtn) {

    abrirMesaBtn.addEventListener('click', (mesas) => {

        // Execute func abrirMesas
        abrirMesa(mesas);
    });

}

if (cerrarMesaBtn) {

    cerrarMesaBtn.addEventListener('click', (mesas) => {

        // Execute function closeTable
        closeTable();
    });

}

function imprimir(mensaje) {

    // Capturamos el div de impresión
    let logs = document.querySelector("#logs");

    let now = formatNowDate();

    logs.innerHTML += `- ${now} | ${mensaje}<br>`;

}

// Función Para arbir el menu de la aplicación.
function abrirMenu(id) {

    // 1. remove class hiden 
    menu.classList.remove("hidden");

    // 2. Comprobar si la mesa esta abierta
    mesaEstaAbierta(id);

    // 3. Mostrar el id de la mesa en el info-mesa
    document.querySelector("#info-mesa").innerHTML = id;



    actualizarMenu(id);

}

// Funcion para abrir una mesa (instanciar un objeto de tipo mesa)
function abrirMesa() {

    // 1. Capturamos el id
    let id = parseInt(document.getElementById("info-mesa").innerHTML);
    let numsMesa4 = [1, 2, 3, 4, 6, 7, 8, 9, 10, 12];
    let tipo = 1; // tipo butaca

    if (numsMesa4.includes(id)) {
        tipo = 2; // Mesa de 4
    } else if (id == 5) {
        tipo = 3; // Mesa de 6
    }

    // 2. Crear nuevo bjeto de mesa
    let mesa = new Mesa(id, tipo);

    // Si la mesa es una butaca comensales igual = 1
    if (tipo == 1) {
        mesa.comensales = 1;
    }

    // 3. Add the new table objecto to tables array
    mesas.push(mesa);

    // 4. Cambiar botonera
    abrirMesaBtn.setAttribute("hidden", true);
    cerrarMesaBtn.removeAttribute("hidden");

    // 5. La mesa esta ocupada le cambiamos el estilo
    document.getElementById(id).classList.add("ocupada");

    actualizarMenu(id);

    // 6. Mensaje de apertura de mesa
    imprimir(`Se ha abierto la mesa ${id}.`);

}

//* Función saber si mesa esta abierta
function mesaEstaAbierta(id) {

    // Variables
    existe = false;

    if (mesas) {
        // 2. Comprobamos en el array de mesas que no coincida el número con el id
        mesas.forEach((mesa) => {
            if (mesa.numero == id) {
                existe = true;
            }
        })
    }


    // 3. Si existe desactivamos el botón abrirMesa
    if (existe) {

        abrirMesaBtn.setAttribute("hidden", true);
        cerrarMesaBtn.removeAttribute("hidden");


    } else {

        abrirMesaBtn.removeAttribute("hidden");
        cerrarMesaBtn.setAttribute("hidden", true);        
    }

}

//* Cerrar ventana
function closeWindow() {

    // Poner hidden a menu
    menu.classList.add("hidden");

    // Eliminar el id en el div menu
    document.getElementById("info-mesa").innerHTML = "";

}

//* Function to show tables ocupied
function showTablesOcupied() {

    document.getElementById("ex1").classList.remove("hidden");

    const textMesas = document.getElementById("ex1-text");

    mesas.forEach((mesa) => {

        textMesas.innerHTML += `${mesa.numero} `;
    });

}

// Función cerrar mesa
function closeTable() {

    // 1. Capturamos el id de la mesa
    let id = parseInt(document.getElementById("info-mesa").innerHTML);

    // 2. Aqui deberiamos mostrar el total de la mesa y si desea pagarlo

    if (mesas) {
        // 3. Recorrer el array de mesas
        mesas.forEach((mesa) => {

            if (mesa.numero == id) {

                // Indice de la mesa
                let idxTable = mesas.indexOf(mesa);
                console.log(idxTable);

                // Usamos slice
                mesas.splice(idxTable, 1);
            }
        })
    }

    // 4. quitar los estilos de ocupada
    document.getElementById(id).classList.remove("ocupada");

    actualizarMenu(id);

    // 5. Mensaje de cierre de la mesa
    imprimir(`Se ha cerrado la mesa ${id}.`);

}

// funcion para obtener fecha formateada
function formatNowDate() {

    // La fecha de hoyu
    const now = new Date();

    let d = now.getDate();
    let m = now.getMonth() + 1;
    let y = now.getFullYear();
    let h = now.getHours();
    let min = now.getMinutes();
    let s = now.getSeconds();

    return `${d}/${m}/${y} ${h}:${min}:${s}`;


}

// A;adir comensal
function addComensal() {

    let id = parseInt(document.getElementById("info-mesa").innerHTML);
    let idxMesa = null;
    let idCliente = null;

    // Sacar la mesa 
    if (mesas) {
        // 3. Recorrer el array de mesas
        mesas.forEach((mesa) => {

            if (mesa.numero == id) {

                // Modificamos el número de comensales de la mesa
                idCliente = mesa.comensales + 1;
                console.log(idCliente);
                mesa.comensales = idCliente;

                // Aquí mismo instanciamos el cliente
                let temp = new Cliente(idCliente);

                // Añadimos el cliente a la mesa
                mesa.addCliente(temp);

                idxMesa = mesas.indexOf(mesa);
            }
        })
    }

    actualizarMenu(id);

    // Imprimir
    imprimir(`Se ha creado un cliente con id ${idCliente}, que se ha añadido como comensal a la mesa ${id}, total de comensales: ${mesas[idxMesa].comensales}.`);

}

function removeComensal() {

    let id = parseInt(document.getElementById("info-mesa").innerHTML);
    let idxTable = 0;
    let idCliente = null;

    // Sacar la mesa 
    if (mesas) {
        // 3. Recorrer el array de mesas
        mesas.forEach((mesa) => {

            if (mesa.numero == id) {

                // Indice de la mesa
                idxTable = mesas.indexOf(mesa);
                // Disminuimos comensales
                let c = mesa.comensales;
                idCliente = c;
                mesa.comensales = c - 1;

                // Eliminamos el cliente
                mesa.removeCliente();

            }
        })
    }



    actualizarMenu(id);

    // Imprimir
    imprimir(`Se ha eliminado el cliente ${idCliente} de la mesa ${id}, un comensale menos. Total: ${mesas[idxTable].comensales}.`);

}

// Funcion control de botones
function btnControl(id) {

    let idxTable;
    const addCBtn = document.getElementById("addC");
    const remCBtn = document.getElementById("remC");

    // Sacar la mesa 
    if (mesas) {
        // 3. Recorrer el array de mesas
        mesas.forEach((mesa) => {

            if (mesa.numero == id) {

                // Indice de la mesa
                idxTable = mesas.indexOf(mesa);

            }
        })
    }

    if (mesas[idxTable]) {
        if (mesas[idxTable].tipo == 1) {

            // Si es una butaca desactivamos ambos botones
            addCBtn.setAttribute("disabled", true);
            addCBtn.classList.add("prohibido");

            remCBtn.setAttribute("disabled", true);
            remCBtn.classList.add("prohibido");

        } else if (mesas[idxTable].tipo == 2 && mesas[idxTable].comensales == 4) {

            // Si la mesa es tipo 2 (de 4) y tiene y 4 comensales
            // Bloqueamos addComensal
            addCBtn.setAttribute("disabled", true);
            addCBtn.classList.add("prohibido");
        } else if (mesas[idxTable].tipo == 3 && mesas[idxTable].comensales == 6) {

            // Si la es tipo 3 (de 6) y tiene 6 bloqueamos addC
            addCBtn.setAttribute("disabled", true);
            addCBtn.classList.add("prohibido");
        } else if (mesas[idxTable].comensales == 0) {

            // Si comensales es 0 
            // bloqueamos bajar comensales
            remCBtn.setAttribute("disabled", true);
            remCBtn.classList.add("prohibido");
        } else {

            // Cualquier otra cosa todo habilitado
            addCBtn.removeAttribute("disabled");
            addCBtn.classList.remove("prohibido");

            remCBtn.removeAttribute("disabled");
            remCBtn.classList.remove("prohibido");
        }
    } else {

        // Cualquier otra cosa todo habilitado
        addCBtn.removeAttribute("disabled");
        addCBtn.classList.remove("prohibido");

        remCBtn.removeAttribute("disabled");
        remCBtn.classList.remove("prohibido");
    }

}



function verTickets() {

    const logs = document.getElementById("logs");

    logs.classList.remove("hidden");

    document.getElementById("verT").classList.add("hidden");
    document.getElementById("cerrarT").classList.remove("hidden");

}

function cerrarTickets() {

    const logs = document.getElementById("logs");

    logs.classList.add("hidden");

    document.getElementById("verT").classList.remove("hidden");
    document.getElementById("cerrarT").classList.add("hidden");

}

function getPrecio(id) {

    let valor = 0;
    const precioDisplay = document.getElementById("precio");

    // Sacar la mesa 
    if (mesas) {
        // 3. Recorrer el array de mesas
        mesas.forEach((mesa) => {

            if (mesa.numero == id) {

                console.log(mesa.getComandaMesa());
                valor = mesa.getComandaMesa();
                precioDisplay.innerHTML = valor.toFixed(2) + "€";

            }
        })
    } else {
        precioDisplay.innerHTML = valor.toFixed(2) + "€";
    }

}

function actualizarMenu(id) {

    // El precio
    getPrecio(id);

    btnControl(id);

}

// Funcion para cerrar una ventana modal
function closeModal(id) {

    document.getElementById("ex1-text").innerHTML = "";

    document.getElementById(id).classList.add("hidden");

}

// funcion para abrir menu de productos
function showModalClientes() {

    // Capturamos el id de la mesa
    let id = parseInt(document.getElementById("info-mesa").innerHTML);

    // Capturamos el modal de clientes
    let modalClientes = document.getElementById("modalClientes");

    let h3 = document.createElement("h3");
    h3.innerHTML = "Elige un cliente";
    modalClientes.appendChild(h3);

    if (mesas) {

        // Creamos todos los botones de los clientes 
        mesas.forEach((mesa) => {

            // Si coincide el id con el numero de mesa
            if (mesa.numero == id) {

                // hacemos un bucle for hasta el número de comensales
                for (let i = 1; i <= mesa.comensales; i++) {
                    let btn = document.createElement("button");
                    btn.classList.add("btn-cliente");
                    btn.innerHTML = i;
                    modalClientes.appendChild(btn);
                }

            }

        });
    }

    // Quitamos el hidden
    modalClientes.classList.remove("hidden");

    let btnSalir = document.createElement("button");
    btnSalir.innerHTML = "Cerrar";

    // Añadimos la función onclick hideModalClientes
    btnSalir.onclick = hideModalClientes();

    // Añadimos el botón salir al final del div
    modalClientes.appendChild(btnSalir);

}

// Función para cerrar modal Clientes
function hideModalClientes() {

    // Capturamos el modal de clientes
    let modalClientes = document.getElementById("modalClientes");

    // Borramos todo el contenido
    modalClientes.innerHTML = "";

    // Ocultamos
    modalClientes.classList.add("hidden");

}




