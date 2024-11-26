function mostrarEnunciado() {

    let enunciado = document.getElementById("enunciado");

    // Aplica el texto al contenedor del enunciado
    let enun = "<p><b>Ejercicio 9.</b> Realiza una aplicación web dónde se muestre un menú cuyas opciones sean las distintas operaciones a realizar sobre la cadena.</p>"
        + "<p><b>La cadena es:</b> <i>\"Consiste en lanzar    aros\"</i> (nota que hay 4 espacios en blanco entre las últimas dos palabras).</p>"
        + "<ol>Las operaciones a realizar son: "
        + "<li>Indica el número total de caracteres incluyendo los espacios en blanco.</li>"
        + "<li>Obtén el carácter que ocupa la octava posición.</li>"
        + "<li>Obtén el código Unicode del primer carácter.</li>"
        + "<li>Concatena la cadena con la cadena“ ¿roto? … ¿o mejorado?”. ¿Se modifica la primera cadena? (Muestra la respuesta a la pregunta también).</li>"
        + "<li>Comprueba si la cadena termina con los caracteres “aro”.</li>"
        + "<li>Convierte el valor Unicode 65 a su carácter equivalente.</li>"
        + "<li>Comprueba si la cadena contiene los caracteres “lanzar”.</li>"
        + "<li>Indica la posición que ocupa el primer carácter “a” de la cadena.</li>"
        + "<li>Indica la posición que ocupa el último carácter “a” de la cadena.</li>"
        + "<li>Compara la cadena con la cadena “Consiste en lanzar aros”. ¿Cuál iría en primer lugar? (Muestra la respuesta a la pregunta justificando la respuesta)</li>"
        + "<li>Obtén todas las coincidencias de la cadena con la expresión regular “/ar/g”</li>"
        + "<li>Obtén una nueva cadena con 3 repeticiones de la cadena actual.</li>"
        + "<li>Reemplaza los caracteres “lanzar” por “coger”.</li>"
        + "<li>Busca los caracteres “ste” en la cadena indica su posición.</li>"
        + "<li>Obtén de la cadena los caracteres del primero al quinto.</li>"
        + "<li>Obtén un array con todas las palabras de la cadena.</li>"
        + "<li>Comprueba si la cadena comienza con los caracteres “Consiste en”.</li>"
        + "<li>Obtén siete caracteres de la cadena a partir del segundo carácter.</li>"
        + "<li>Obtén todos los caracteres de la cadena a partir del cuarto carácter.</li>"
        + "<li>Convierte todos los caracteres de la cadena a mayúsculas.</li>"
        + "<li>Convierte todos los caracteres de la cadena a minúsculas.</li>"
        + "<li>Muestra la cadena original, deja la cadena con un único espacio en blanco entre palabras y muestra la cadena modificada. Resolverlo sin usar expresiones regulares ni arrays, solo el objeto String.</li>"
        + "</ol>"
        + "<p>Adicionalmente, la aplicación controlará que la opción introducida sea válida</p>"
        + "<p><b>Ejemplo: </b></p>"
        + "<table><tr><th>ENTRADA</th><th>SALIDA</th></tr>"
        + "<tr><td>del 1 al 22</td><td>Resultado de la operacion escogida.</td></tr>"
        + "<tr><td>Otro valor</td><td><b>Error: </b> opción NO VALIDA.</td></tr></table>";

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

    // Variables
    let frase = "Consiste en lanzar&nbsp;&nbsp;&nbsp;&nbsp;aros";
    let menuShow = false;
    let mensaje = "<b>Error: </b>opción NO VALIDA.";

    let opcion = parseInt(prompt("Introduce una opcion (1 - 22): "));

    // COmprobamos que haya elegido una opcion valida
    if (esOpcionValida(opcion)) menuShow = true;

    if (menuShow) {

        mensaje = menu(opcion, frase);
    }


    // Impresión
    impresion(opcion, mensaje);

}

//* Función para saber si la opción introducida es válida
function esOpcionValida(opcion) {

    return (opcion >= 1 && opcion <= 22)
        ? true
        : false;

}

//* FUnción principal del menu
function menu(opcion, frase) {

    switch (opcion) {
        case 1:
            return op1(frase);

        case 2:
            return op2(frase);

        case 3:
            return op3(frase);

        case 4:
            return op4(frase);

        case 5: 
            return op5(frase);

        case 6:
            return op6();

        case 7: 
            return op7(frase);

        case 8:
            return op8(frase);

        case 9:
            return op9(frase);

        case 10:
            return op10(frase);

        case 11:
            return op11(frase);

        case 12:
            return op12(frase);

        case 13:
            return op13(frase);

        case 14:
            return op14(frase);

        case 15:
            return op15(frase);

        case 16:
            return op16(frase);
        
        case 17:
            return op17(frase);

        case 18:
            return op18(frase);

        case 19:
            return op19(frase);

        case 20:
            return op20(frase);

        case 21:
            return op21(frase);

        case 22:
            return op22(frase);

        default:
            break;
    }

}

// 1. Indica el número total de caracteres incluyendo los espacios en blanco.
function op1(frase) {

    return `El numero total de caracteres es: ${frase.length}.`;

}

// 2. Obtén el carácter que ocupa la octava posición.
function op2(frase) {

    // La octava posicion corresponde al indice 7

    return `El caracter en la octava posicion es: ${frase.charAt(7)}.`;

}

// 3. Obtén el código Unicode del primer carácter.
function op3(frase) {

    return `El codigo unicode del caracter ${frase.charAt(0)} es: ${frase.charCodeAt(0)}.`;

}

// 4. Concatena la cadena con la cadena“ ¿roto? … ¿o mejorado?”. ¿Se modifica la primera cadena? (Muestra la respuesta a la pregunta también).
function op4(frase) {

    return frase + " ¿roto? ... ¿o mejorado?. Si se ha modificado la primera cadena.";

}

// 5. Comprueba si la cadena termina con los caracteres “aro”.
function op5(frase) {

    if (frase.endsWith("aro")) {
        return `la frase: ${frase}, SI termina con la palabra 'aro'.`;
    }

    return `La frase: ${frase}, NO termina con la palabra 'aro'.`;
    
}

// 6. Convierte el valor Unicode 65 a su carácter equivalente.
function op6() {

    return `El caracter equivalente al Unicode 65 es: ${String.fromCharCode(65)}.`;    
    
}

// 7. Comprueba si la cadena contiene los caracteres “lanzar”.
function op7(frase) {

    if (frase.includes("lanzar")) {
        return `Si, la frase: ${frase}, contiene la cadena lanzar.`;
    }

    return `No, la frase: ${frase}, NO contiene la cadena lanzar.`;
    
}

// 8. Indica la posición que ocupa el primer carácter “a” de la cadena.
function op8(frase) {

    return `La posicion del primer 'a' en \"${frase}\" es: ${frase.indexOf("a")}.`;
    
}

// 9. Indica la posición que ocupa el último carácter “a” de la cadena.
function op9(frase) {

    return `La ultima posicion de 'a' en ${frase} es: ${frase.lastIndexOf("a")}.`;
    
} 

// 10. Compara la cadena con la cadena “Consiste en lanzar aros”. ¿Cuál iría en primer lugar? (Muestra la respuesta a la pregunta justificando la respuesta)
function op10(frase) {

    let base = "Consiste en lanzar aros";

    let tmp = frase.localeCompare(base);

    if (tmp == -1) {
        return `'${frase}' iria antes que '${base}'. En este caso es porque tiene los espacios, al parecer son caracteres menores. `;
    } else if (tmp == 1) {
        return `'${frase}' iria despues que '${base}'.`;
    } else {
        return `Ambas cadenas son iguales.`;
    }
    
}

// 11. Obtén todas las coincidencias de la cadena con la expresión regular “/ar/g”
function op11(frase) {

    let regExp = /ar/g;

    let partes = frase.split(" ");

    let coincidencias = "";

    for (let i = 0; i < partes.length; i++) {

        if (partes[i].match(regExp)) {
            coincidencias += ", "  + partes[i];
        }

    }

    return `Coincidencias encontradas: ${coincidencias}`;

}

// 12. Obtén una nueva cadena con 3 repeticiones de la cadena actual.
function op12(frase) {

    return frase.repeat(3);
    
}

// 13. Reemplaza los caracteres “lanzar” por “coger”.
function op13(frase) {

    return frase.replace("lanzar", "coger");
    
}

// 14. Busca los caracteres “ste” en la cadena indica su posición.
function op14(frase) {

    return "La indice de inicio de la palabra \"ste\" es: " + frase.indexOf("ste");
    
}

// 15. Obtén de la cadena los caracteres del primero al quinto.
function op15(frase) {

    return `Los caracteres del 1 al 5: ${frase.substring(1, 5)}`;
    
}

// 16. Obtén un array con todas las palabras de la cadena.
function op16(frase) {

    let partes = frase.split(" ");
    let resultado = "";

    for (let i = 0; i < partes.length; i++) {

        if (partes[i] == "") {
            continue;
        }

        if (i == partes.length - 1) {
            resultado += `${partes[i]}`;
        } else {
            resultado += `${partes[i]}, `;
        }

    
    }

    return resultado;
    
}

// 17. Comprueba si la cadena comienza con los caracteres “Consiste en”.
function op17(frase) {

    if (frase.startsWith("Consiste en")) {

        return `Si, la frase \"${frase}\" empieza con: \"Consiste en\"`;

    }

    return `No, la frase \"${frase}\" NO empieza con: \"Consiste en\"`;
    
}

// 18. Obtén siete caracteres de la cadena a partir del segundo carácter.
function op18(frase) {

    // el segundo caracter es indice 1
    let idx = 1;
    let caracteres = "";

    for (let i = 0; i <= 7; i++) {

        let c = frase.charAt(idx + i);

        if (c == " " || c == "") {
            continue;
        }

        if (i == 6) {
            caracteres += `${c}`;
        } else {
            caracteres += `${c}, `;
        }

    }

    return `Los caracteres desde el segundo caracter (eliminando los espacios) son: ${caracteres}`;
    
}

// 19. Obtén todos los caracteres de la cadena a partir del cuarto carácter.
function op19(frase) {

    // el cuarto caracter es la posicion 3
    let idx = 3;
    let caracteres = "";

    for (let i = 0; i < frase.length; i++) {

        let c = frase.charAt(idx + i);

        if (c == "" || c == " ") {
            continue;
        }

        if (i == frase.length - 1) {
            caracteres += `${c}`;
        } else {
            caracteres += `${c}, `;
        } 

    }

    return caracteres;
    
}

// 20. Convierte todos los caracteres de la cadena a mayúsculas.
function op20(frase) {

    frase = frase.toUpperCase();
    let caracteres = "";

    for (let i = 0; i < frase.length; i++) {

        let c = frase.charAt(i);

        if (c == "" || c == " ") {
            continue;
        }

        if (i == frase.length - 1) {
            caracteres += `${c}`;
        } else {
            caracteres += `${c}, `;
        }
    }

    return caracteres;

    
}

// 21. Convierte todos los caracteres de la cadena a minúsculas.
function op21(frase) {

    frase = frase.toLowerCase();
    let caracteres = "";

    for (let i = 0; i < frase.length; i++) {

        let c = frase.charAt(i);

        if (c == "" || c == " ") {
            continue;
        }

        if (i == frase.length - 1) {
            caracteres += `${c}`;
        } else {
            caracteres += `${c}, `;
        }
    }

    return caracteres;

    
}

// 22. Muestra la cadena original, deja la cadena con un único espacio en blanco entre palabras y muestra la cadena modificada. Resolverlo sin usar expresiones regulares ni arrays, solo el objeto String.
function op22(frase) {

    return `Frase original: '${frase}'. Nueva frase: ${frase.replace("&nbsp;&nbsp;&nbsp;&nbsp;", "&nbsp;")}.`;
    
}

// Función para la impresión del resultado en la tabla
function impresion(input1, mensaje) {

    let tabla = document.getElementById("bodyTabla");

    tabla.innerHTML += `<tr><td>${input1}</td><td>${mensaje}</td></tr>`;


}

/**
 * Author: @Dreddsoft
 * Exercise: AE3.2 - ejercicio 9
 * Date: 24/11/2024 (dd/MM/yyyy)
 * Version: 1.0
 * */

