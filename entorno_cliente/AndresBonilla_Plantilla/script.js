let enunciado = "Realiza la lógica de programación para que el usuario introduzca tres valores \
por teclado <br/> si al menos alguno de ellos es mayor que 10, mostrar una ventana emergente \
\"ALGUNO MAYOR QUE 10\". En caso contrario, mostrar \"NINGUNO MAYOR QUE 10\"";

function mostrarEnunciado() {

    let espacioTexto = document.getElementById("espacio-texto");

    // Mostrar espacioTexto
    espacioTexto.style.display = "block";

    espacioTexto.innerHTML = enunciado;

    // Mostrar btn ocultar
    document.getElementById("btn-ocultar-enunciado").style.display = "block";

    // Ocultar btn mostrar
    document.getElementById("btn-mostrar-enunciado").style.display = "none";

    
}

function ocultarEnunciado() {

    let espacioTexto = document.getElementById("espacio-texto");
    
    // Ocultar el texto
    espacioTexto.style.display = "none";

    // Ocultar boton ocultar
    document.getElementById("btn-ocultar-enunciado").style.display = "none";

    // Mostar boton mostrar
    document.getElementById("btn-mostrar-enunciado").style.display = "block";

    
}

function verResolucion() {

    let resolucionAE = "RESOLUCION";

    document.getElementById("enunciadoAE").innerHTML = resolucionAE;

    // Ocultar btn verResolucion
    document.getElementById("btn-mostrar-res").style.display = "none";

    // Mostrar btn ocultar
    document.getElementById("btn-ocultar-res").style.display = "block";
    
}

function ocultarResolucion() {

    // Ocultar enunciado
    let enunciadoResolucion = "Si quieres ver la resolución de la activada evaluable pulsa el botón <b><i> Ver resolución</i></b>";


    // Cambiar el html interno del h3 del enunciado
    document.getElementById("enunciadoAE").innerHTML = enunciadoResolucion;


    // Ocultar botones
    // ocultar btn ocultar resolucion
    document.getElementById("btn-ocultar-res").style.display = "none";


    // mostrar btn mostrar res
    document.getElementById("btn-mostrar-res").style.display = "block";

    
}