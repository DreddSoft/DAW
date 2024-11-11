function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    // Aplica el texto al contenedor del enunciado
    let enun = `<p><b>Ejercicio 1.</b> Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una cadena de caracteres.</p><p>Dicha cadena de caracteres corresponde a un formato válido de email, para ello ha de cumplir los siguientes requisitos</p><ul><li><b>Nombre de usuario</b>, compuesto por letras mayúsculas o minúsculas, o números, o puntos, o guión bajo o alto.</li><li><b>Una arroba.</b></li><li><b>EL nombre del servidor</b>, que puede contener los mismos caracteres que el nombre excepto el punto.</li><li><b>El dominio</b>, que podrá estar formado por uno o dos grupos de 2 a 4 letras separados por puntos. Por ejemplo: .es, .com. com.es</li></ul>`;

    enunciado.innerHTML = enun;

    // Mostrar enunciado
    enunciado.style.display = "block";

    // Ocultar botón ver
    document.getElementById("ver").style.display = "none";

    // Mostrar botón ocultar
    document.getElementById("ocultar").style.display = "block";

}

function ocultarEnunciado() {

    // Ocultar enunciado
    let enunciado = document.getElementById("enunciado");
    enunciado.style.display = "none";

    // Ocultar el botón ocultar
    document.getElementById("ocultar").style.display = "none";

    // Mostar el botón ver
    document.getElementById("ver").style.display = "block";

}

function introducir() {

    // Solicitamos el mail por ventana emergente
    let email = prompt("Introduce el email: ");

    const regex = /^([a-zA-Z0-9._-]+)[@,1]([a-zA-Z0-9_-]+)\.[a-z]{2,3}(\.[a-z]{2,4}?)/;

    let checkEmail = regex.test(email);

    // Declaramos una variable mensaje
    let mensaje = "El correo introducido NO TIENE un formato válido.";

    console.log(checkEmail);

    if (checkEmail) {
        mensaje = "El correo introducido ha sido almacenado CORRECTAMENTE."
    }

    // Impresión en la tabla
    let tableBody = document.getElementById("bodyTabla");

    tableBody.innerHTML += `<tr><td>${email}</td><td>${mensaje}</td></tr>`;


}