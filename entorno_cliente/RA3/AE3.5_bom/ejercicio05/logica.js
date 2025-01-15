// Capturar botones
const btnShow = document.querySelector("#btn-show");
const btnHide = document.querySelector("#btn-hide");
let enunciado = document.querySelector("#enunciado-texto");

// Recupera el segundo párrafo utilizando los 4 métodos y muéstralo por consola seguido del texto “obtenido mediante METODO” donde METODO hace referencia al método utilizado para la obtención de contenido.
const primeraObtencion = document.getElementById("p2");
console.log(primeraObtencion.textContent + " obtenido mediante getElementById");

// Al recuperarlos por el Tag, coge 4 elementos (desde 1 a 4), tenemos que hacer referencia a la posición
const segundaObtencion = document.getElementsByTagName("p")[2];
console.log(segundaObtencion.textContent + " obtenido mediante getElementsByTagName");

// Mismo caso, aquí el byClassName va a cogerlos 4 párrafos, por tanto el 2 será la posición 1
const terceraObtencion = document.getElementsByClassName("p")[1];
console.log(terceraObtencion.textContent + " obtenido mediante getElementsByClassName");

const cuartaObtencion = document.querySelector("#p2");
console.log(cuartaObtencion.textContent + " obtenido mediante querySelector");


//* EVENT LISTENER
if (btnShow) {
    btnShow.addEventListener('click', () => {

        // Volcamos enunciado
        document.querySelector("#enunciado-texto").classList.remove("hidden")

        // Ocultamos boton Mostrar
        btnShow.classList.add("hidden");

        // Quitamos ocultar del btnHide
        btnHide.classList.remove("hidden");

    });
}

if (btnHide) {
    btnHide.addEventListener('click', () => {

        // Ocultamos boton hide
        btnHide.classList.add("hidden");

        // Ocultamos el enunciado
        document.querySelector("#enunciado-texto").classList.add("hidden");

        // Mostramos btnShiw
        btnShow.classList.remove("hidden");
    });
}

// Implementa un botón <Modificar segundo y tercer párrafo> para cambiar el contenido del segundo párrafo por “Éste es el nuevo contenido del segundo párrafo” y el contenido del tercero por “Éste es el nuevo contenido del <strong>tercer párrafo</strong>” cuando se clique en él.
function modificarParrafos() {

    document.getElementById("p2").innerHTML = "Éste es el nuevo contenido del segundo párrafo";

    document.querySelector("#p3").innerHTML = "Éste es el nuevo contenido del <strong>tercer párrafo</strong>";

}

// Implementa un botón <Eliminar cuarto párrafo> para eliminar el cuarto párrafo cuando se clique en él.
function eliminarCuartoParrafo() {

    const p4 = document.getElementsByTagName("p")[4];

    if (p4) {
        p4.remove();
    }

}

// Implementa un botón <Crear párrafos> cuya función es la creación de un nuevo párrafo “Nuevo párrafo creado mediante botón” ubicado en último lugar. Adicionalmente, se creará un nuevo párrafo “La diferencia entre innerHTML y textContent es RESPUESTA” donde RESPUESTA debe ser la completación a esa sentencia (y que sea verdadera ;) ). Dicho párrafo estará ubicado en tercer lugar.
function crearParrafos() {

    const containerBtns = document.getElementsByClassName("pfos")[0];

    // Crear nuevo parrafo
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Nuevo párrafo creado mediante botón";
    // Meterlo al final
    containerBtns.append(nuevoParrafo);

    // Crear parrafo explicacion
    const explicacionParrafo = document.createElement("p");
    // Asignar su contenido
    explicacionParrafo.textContent = "La diferencia entre innerHTML y textContent es que innerHTML interpreta y permite insertar HTML, textContext es solo texto plano.";

    const p3 = document.getElementById("p3");
    const p4 = document.getElementById("p4");


    // Metemos el parrafor explicación al final
    containerBtns.append(explicacionParrafo);

    // Metemos el parrafo 3 al final
    containerBtns.append(p3);

    // Metemos el parrafo 4 al final
    if (p4) {
       containerBtns.append(p4); 
    }
    

    containerBtns.append(nuevoParrafo);
}

// Implementa un botón <Modificar imagen> que sustituya la imagen existente por otra diferente a tu elección cuando se clique en él.
function modificarImagen() {

    // Capturamos la etiqueta img
    const img = document.getElementsByTagName("img")[1];

    // cambiamos el src y el alt de la etiqueta
    img.src = "login-.png";
    img.alt = "Imagen cambiada de Login"
    
}

// Implementa un botón <Modificar formulario> que sustituya el texto “Nombre” referente al campo nombre del formulario por “Año de nacimiento” cuando se clique en él.
function modificarFormulario() {

    // Captura
    const nameIpt = document.getElementById("nombre");

    // condicional para ver si esta
    if (nameIpt) {
        // YO no he usado label, por lo que cambio el tipo de input
        nameIpt.type = "date";
        nameIpt.placeholder = "Fecha de Nacimiento";
        nameIpt.name = "fecha";
    }

    // Crear un elemento label antes de la fecha
    // Para eso capturamos el fieldset
    const fieldset = document.getElementsByTagName("fieldset")[0];

    // Creamos la etiqueta label
    const etiqueta = document.createElement("label");

    // Capturamos el otro input
    const apeIpt = document.getElementById("ape");

    // Introducimos en el siguiente orden: 1. label, 2. fecha, 3. ape
    fieldset.append(etiqueta);
    fieldset.append(nameIpt);
    fieldset.append(apeIpt);

    etiqueta.innerHTML = "Fecha Nacimiento:";
    
}

// Implementa un botón <Método write> que escriba “Esto es lo que pasa por usar el método document.write una vez la página se ha cargado” cuando se clique en él.
function metodoWrite() {

    document.write("Esto es lo que pasa por usar el método document.write una vez la página se ha cargado");
    
}


/**
 * Author: @DreddSoft
 * Exercise: AE3.5 - Ejercicio 6
 * Date: January 2025
 * Version: 1.0
 */