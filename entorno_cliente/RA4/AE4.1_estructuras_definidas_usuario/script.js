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

    get clientes() {
        return this.#_clientes;
    }

    set clientes(clientes) {
        this.#_clientes = clientes;
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
    // getComandaMesa() {

    //     let mensaje = `Comanda completa de la mesa: ${this.#_numero}.`;

    //     for (let cliente of this.#_clientes) {
    //         mensaje += `\n${cliente.id} `.cliente.getProductos();
    //     }

    //     return mensaje;
    // }

    getPrecioMesa() {
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

    set productos(productos) {
        this.#_productos = productos;
    }

    get productos() {
        return this.#_productos;
    }


    // Funciones propias
    addProducto(producto) {
        this.#_productos.push(producto);
    }

    // Funcion eliminar producto del array
    removeProducto(nombreProducto) {
        const idx = this.#_productos.findIndex(producto => producto.nombre === nombreProducto);

        if (idx != -1) {
            this.#_productos.splice(idx, 1);
        } else {
            alert(`El producto ${nombreProducto} no esta en la lista de productos.`);
        }
    }

    getProductos() {

        let mensaje = "";

        for (let producto of this.#_productos) {

            mensaje += `\n${producto.nombre} - ${producto.precio} €`;

        }

        return mensaje.trim();
    }

    // Obtener precio cliente
    getPrecioCliente() {

        let precioTotal = 0;

        // Recorremos los productos
        this.#_productos.forEach((producto) => {

            precioTotal += producto.precio;

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
    mesaEstaAbierta(id);

    // 5. La mesa esta ocupada le cambiamos el estilo
    document.getElementById(id).classList.add("ocupada");

    actualizarMenu(id);

    // 6. Mensaje de apertura de mesa
    imprimir(`Se ha abierto la mesa ${id}.`);

}

//* Función saber si mesa esta abierta
function mesaEstaAbierta(id) {

    // Capturamos la mesa
    let mesaSeleccionada = mesas.find(mesa => mesa.numero == id);


    // 3. Si existe desactivamos el botón abrirMesa
    if (mesaSeleccionada) {

        abrirMesaBtn.classList.add("hidden");;
        cerrarMesaBtn.classList.remove("hidden");


    } else {

        abrirMesaBtn.classList.remove("hidden");
        cerrarMesaBtn.classList.add("hidden");
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


    // Volver los botones a su estado inicial
    mesaEstaAbierta(id);

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

    // Controlar los botones de abrir y cerrar
    // Uso el find, porque paso de hacer mas forEach
    let mesaSeleccionada = mesas.find(mesa => mesa.numero == id);

    mesaEstaAbierta(id);

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

    let mesaSeleccionada = mesas.find(mesa => mesa.numero === id);

    if (!mesaSeleccionada) {

        console.log(`No se encontró la mesa con ID ${id}`);

        precioDisplay.innerHTML = "0,00 €";
        return;

    }

    mesaSeleccionada.clientes.forEach(cliente => {
        cliente.productos.forEach(producto => {
            valor += producto.precio;
        });
    });

    precioDisplay.innerHTML = valor.toFixed(2) + "€";

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

// Función para elegir el cliente al que añadir los productos
function pickCliente() {

    // el id de la mesa
    let idMesa = parseInt(document.getElementById("info-mesa").innerHTML);
    let comensalesMesa = 0;
    let idCliente;

    // Obtener los comensales de la mesa
    comensalesMesa = getComensalesMesa(idMesa);
    // alert(comensalesMesa);

    if (comensalesMesa != -1) {

        // Pedimos por prompt el id del cliente
        idCliente = parseInt(prompt(`Introduzca un cliente entre 1 y ${comensalesMesa}`));

        while (idCliente <= 0 || idCliente > comensalesMesa) {
            idCliente = prompt(`Error, recuerda un cliente entre 1 y ${comensalesMesa}`);
        }

        // función añadir clientes con el idMesa y idCliente
        showProductos(idMesa, idCliente);

    } else {
        alert("No se han añadido comensales a la mesa.");
    }

}

// Función para obtener los comensales de la mesa
function getComensalesMesa(id) {

    let num = -1;

    // Recorremos todas las mesas
    mesas.forEach((mesa) => {

        if (id == mesa.numero) {
            // alert(mesa.comensales);
            num = mesa.comensales;
            return num;
        }
    });

    return num;

}

// Función añadir productos al cliente
function showProductos(idMesa, idCliente) {

    // Mostramos el modal
    const modalProductos = document.getElementById("modalProductos");
    modalProductos.classList.remove("hidden");

    // Damos valor a los inputs ocultos
    const prodMesa = document.getElementById("prod-mesa");
    const prodCliente = document.getElementById("prod-cliente");

    prodMesa.value = idMesa;
    prodCliente.value = idCliente;

}

// Funcion para cerrar el menu de productos cliente
function hideProductos() {

    const modalProductos = document.getElementById("modalProductos");
    modalProductos.classList.add("hidden");

}

// Función añadir productos
function addProductosCliente(idProducto) {

    let idMesa = parseInt(document.getElementById("prod-mesa").value);
    let idCliente = parseInt(document.getElementById("prod-cliente").value);

    // Buscar la mesa pero mas simple
    let mesaSeleccionada = mesas.find(mesa => mesa.numero == idMesa);

    // Si la mesa esta seleccionada
    if (mesaSeleccionada) {

        // Sacamos el cliente
        let clienteSeleccionado = mesaSeleccionada.clientes.find(cliente => cliente.id == idCliente);

        // Si se cumple que el cliente selccionado
        if (clienteSeleccionado) {
            // Creamos el producto
            let producto = productos[idProducto];

            // Insertar en el cliente
            clienteSeleccionado.addProducto(producto);

            // Mesanje de impresion
            let mensaje = `El cliente ${idCliente} de la mesa ${idMesa} ha ordenado un ${producto.nombre} de precio ${producto.precio} €`;
            imprimir(mensaje);

            // Actyualimar menu
            actualizarMenu(idMesa)
        } else {
            alert("Cliente no encontrado en la mesa.");
        }

    } else {
        alert("Mesa no encontrada.");
    }



}

// Funcion para eliminar productos
function removeProductoCliente() {

    let idMesa = parseInt(document.getElementById("prod-mesa").value);
    let idCliente = parseInt(document.getElementById("prod-cliente").value);

    let mesaSeleccionada = mesas.find(mesa => mesa.numero === idMesa);

    if (mesaSeleccionada) {

        // Buscar el cliente dentro de la mesa
        let clienteSeleccionado = mesaSeleccionada.clientes.find(cliente => cliente.id == idCliente);

        if (clienteSeleccionado) {

            // Creamos un mensaje para el prompt de los productos del cliente
            let mensaje = `Listado de productos ordenados por el cliente ${idCliente}`;

            mensaje += clienteSeleccionado.getProductos();

            let nombreProducto = prompt(mensaje + "\nIntroduce el nombre del prodcuto:");

            let idxProdcuto = clienteSeleccionado.productos.findIndex(producto => producto.nombre == nombreProducto);

            // Si el indice del producto ha sido encontrado
            if (idxProdcuto != -1) {

                // Nos cargamos el producto del cliente
                clienteSeleccionado.productos.splice(idxProdcuto, 1);

                // confimacion
                alert(`Se ha eliminado el producto ${nombreProducto} de la cuenta del cliente ${idCliente}`);

                // Impresion de ticket
                imprimir(`Se ha eliminado el producto ${nombreProducto} de la cuenta del cliente ${idCliente}`);

                actualizarMenu(idMesa);

            } else {
                alert(`El cliente ${idCliente} no tiene el producto ${nombreProducto} en su comanda.`);
            }

        } else {
            alert("Cliente no encontrado en la mesa");
        }

    }

}


// Funcion para sacar la comanda de la mesa
function comandaMesa() {

    let idMesa = parseInt(document.getElementById("info-mesa").innerHTML);

    let mesaSeleccionada = mesas.find(mesa => mesa.numero == idMesa);
    let printeable = document.getElementById("printeable");

    let totalMesa = 0;

    if (!mesaSeleccionada) {

        alert("No se ha seleccionado ninguna mesa.");
        return;

    }

    let mensaje = `<h3>Comanda de la Mesa ${idMesa}</h3><hr>`;

    // Recorremos los clientes de la mesa
    mesaSeleccionada.clientes.forEach(cliente => {

        mensaje += `<h4>Cliente ${cliente.id}</h4><ul>`;

        if (cliente.productos.length == 0) {
            mensaje += `<li>No ha pedido nada aún.</li>`;
        } else {

            // Recorremos los productos del cliente
            cliente.productos.forEach(producto => {

                mensaje += `<li>${producto.nombre} | ${producto.precio} €.</li>`;
                let precioProducto = parseFloat(producto.precio);
                totalMesa += precioProducto;

            });
        }

        // Cambiar botones
        document.getElementById("cM").classList.add("hidden");
        document.getElementById("ccM").classList.remove('hidden');

        mensaje += "</ul>";
    });


    // Precio total de la mesa
    mensaje += `<br><b class='red'>${totalMesa} €</b>`;

    printeable.innerHTML += mensaje;
    printeable.classList.remove("hidden");

}

// Cerrar comanda mesa
function cerrarComandaMesa() {

    let printeable = document.getElementById("printeable");

    printeable.innerHTML = "";

    document.getElementById("cM").classList.remove("hidden");
    document.getElementById("ccM").classList.add('hidden');

    printeable.classList.add("hidden");

}

// Comanda de cliente
function comandaClienteMesa() {

    // Capturamos los ids de mesa y cliente en los inputs hidden
    let idMesa = parseInt(document.getElementById("info-mesa").innerHTML);
    let totalCliente = 0;
    let mensaje = "";
    let printeable = document.getElementById("printeable");

    // Seleccionamos mesa
    let mesaSeleccionada = mesas.find(mesa => mesa.numero == idMesa);

    // Si hay mesa
    if (mesaSeleccionada) {

        // Pedir el id del cliente
        let comensales = mesaSeleccionada.comensales;

        let idCliente = parseInt(prompt(`Introduce el id del cliente entre 1 y ${comensales}.`));

        let clienteSeleccionado = mesaSeleccionada.clientes.find(cliente => cliente.id == idCliente);

        if (clienteSeleccionado) {

            // Construimos el mensaje
            mensaje = `<h3>Comanda de la Mesa ${idMesa}</h3><hr>`;

            mensaje += `<h4>Cliente ${clienteSeleccionado.id}</h4><ul>`;

            clienteSeleccionado.productos.forEach(producto => {

                mensaje += `<li>${producto.nombre} | ${producto.precio} €.</li>`;
                let precioProducto = parseFloat(producto.precio);
                totalCliente += precioProducto;

            });

            mensaje += "</ul>";

            // Cambiar botones
            document.getElementById("cC").classList.add("hidden");
            document.getElementById("ccC").classList.remove('hidden');


        } else {
            warning("Error Comanda Cliente: no hay cliente seleccionado.");
        }

        // Precio total de la mesa
        mensaje += `<br><b class='red'>${totalCliente} €</b>`;

        printeable.innerHTML += mensaje;
        printeable.classList.remove("hidden");

    } else {
        warning("Error Comanda Cliente: No hay mesa seleccionada.");
    }

}

// Cerrar comanda mesa
function cerrarComandaCliente() {

    let printeable = document.getElementById("printeable");

    printeable.innerHTML = "";

    document.getElementById("cC").classList.remove("hidden");
    document.getElementById("ccC").classList.add('hidden');

    printeable.classList.add("hidden");

}

// Funcion para pasar la mesa a otra mesa
function cambiarMesaDeSitio() {

    // Acceder al setter y cambiar la mesa de numero
    // Pedir por prompt
    // Controlar que numero introduce dependiendo de los comensales

    // Capturamos los ids de mesa 
    let idMesa = parseInt(document.getElementById("info-mesa").innerHTML);

    // Traer la mesa 
    let mesaSeleccionada = mesas.find(mesa => mesa.numero == idMesa);

    // Sacamos los comensales
    let coms = mesaSeleccionada.comensales;

    let nuevoNum = 0;

    switch (true) {
        case coms == 1:
            while (true) {

                nuevoNum = parseInt(prompt("Elige el nuevo numero de entre las mesas:"
                    + "\n 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18."
                    + "\n¿Qué número eliges?"
                ));

                let validos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18];

                if (validos.includes(nuevoNum)) {

                    // Salimos del bucle
                    break;
                }

            }

            // Accedemos al setter y cambiamos
            mesaSeleccionada.numero = nuevoNum;

            // Alert
            alert(`Cambio de mesa desde ${idMesa} a ${nuevoNum}.`);
            imprimir(`Cambio de mesa desde ${idMesa} a ${nuevoNum}.`);

            // Cambiamos
            document.getElementById(idMesa).classList.remove("ocupada");
            document.getElementById(nuevoNum).classList.add("ocupada");

            // mesaEstaAbierta(idMesa);
            // mesaEstaAbierta(nuevoNum);

            closeTable();

            // Actualizamos menu
            actualizarMenu(idMesa);
            actualizarMenu(nuevoNum);

            break;

        case coms > 1 || coms <= 4:
            while (true) {

                nuevoNum = parseInt(prompt("Elige el nuevo numero de entre las mesas:"
                    + "\n 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12."
                    + "\n¿Qué número eliges?"
                ));

                let validos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

                if (validos.includes(nuevoNum)) {

                    // Salimos del bucle
                    break;
                }

            }

            // Accedemos al setter y cambiamos
            mesaSeleccionada.numero = nuevoNum;

            // Alert
            alert(`Cambio de mesa desde ${idMesa} a ${nuevoNum}.`);
            imprimir(`Cambio de mesa desde ${idMesa} a ${nuevoNum}.`);

            // Cambiamos
            document.getElementById(idMesa).classList.remove("ocupada");
            document.getElementById(nuevoNum).classList.add("ocupada");

            // mesaEstaAbierta(idMesa);
            // mesaEstaAbierta(nuevoNum);
            closeTable();

            // Actualizamos menu
            actualizarMenu(idMesa);
            actualizarMenu(nuevoNum);

            break;

        default:
            alert("Error: no tenemos otra mesa para mas de 4 comensales.");
            break;
    }



}






