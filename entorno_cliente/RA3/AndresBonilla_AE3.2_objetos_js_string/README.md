# AE3.2 EJERCICIOS OBJETOS JAVASCRIPT - STRING

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png" alt="Logo Javascript" style="display: flex; justify-content: center; width: 200px; align-self: center;">


## Desarrollo de la práctica.


### Ejercicio 1.
---
Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una cadena de caracteres.

Crea una función que reciba como argumento esa cadena de caracteres y devuelva una cadena con todas las vocales y el número de veces que aparece cada una en la cadena argumento.

Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior:

**Ejemplo:** 

| **ENTRADA**   | **SALIDA**                                                        |
|---------------|-------------------------------------------------------------------|
| Hola soy Pepe | El número de vocales de la cadena es <br> a:1, e:2, i:0, o:2, u:0 |

### Ejercicio 2.
---
Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase con letras y números.

Crea una función que reciba como argumento esa frase y devuelva la suma de todos los dígitos contenidos en la frase.

Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.

**Ejemplo:**

|        **ENTRADA**                                                 |        **SALIDA**              |
|--------------------------------------------------------------------|--------------------------------|
| Estamos a 7 días de navidad y faltan 10 días para fin de año 1990. | 27 (7 + 1 + 0 + 1 + 9 + 9 + 0) |

### Ejercicio 3.
---
Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase.

Crea una función que reciba como argumento esa frase y devuelva el número de espacios, dígitos y letras  contenidos en la frase. **Puedes usar expresiones regulares.**

Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.

**Ejemplo:**

|    **ENTRADA**    |            **SALIDA**             |
|-------------------|-----------------------------------|
| Si, hoy es dia 10 | 2 dígitos, 4 espacios y 10 letras |

### Ejercicio 4.
---
Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una cadena y el carácter buscado.

Crea una función **recursiva** que cuente el número de veces que el carácter introducido por el usuario aparece en la cadena introducida por el usuario.

Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.

**Ejemplo:**

|    **ENTRADA**    |            **SALIDA**             |
|-------------------|-----------------------------------|
| Hoy es martes<br>e | El carácter *e* aparece 2 veces en la cadena |

### Ejercicio 5.
---
Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario un código de cliente.

Dicho código contiene tres partes separadas por un guión:
- Dos caracteres:  CP: cliente particular, CE: empresa.
- Dos dígitos: 10 Local, 11 Autonómico, 12 Nacional, 20 Internacional.
- Una cifra que indica el número de años de antigüedad del cliente.

Crea una función que decodifique dicho código de cliente. Adicionalmente, si el código es erróneo la función deberá informar del tipo de error o errores.

Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.

**Ejemplo:**

|    **ENTRADA**    |            **SALIDA**             |
|-------------------|-----------------------------------|
| CP 12 3 | **Error:** Introduce el código separado por guiones |
| CP-12-3 | El código introducido pertenece a un cliente particular de origen nacional con 3 años de antigüedad. |
| CC-12-3 | **Error:** El tipo de cliente introducido no es correcto |

### Ejercicio 6.
---
Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario dos cadenas.

Crea una función que sea capaz de encontrar los caracteres comunes entre dos palabras.
La función recibe como argumentos dos palabras o frases y devuelve una cadena con los caracteres que haya en común entre ambas ordenados de menor a mayor.
Se desechan los espacios en blanco. No se tiene en cuenta el caso (mayúsculas o minúsculas).

Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.

**Ejemplo:**

|    **ENTRADA**    |            **SALIDA**             |
|-------------------|-----------------------------------|
| Ciudad<br>cuidar | acdiu |

### Ejercicio 7.
---
Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase y dos palabras.

Crea una función que reciba tres argumentos: 1. La frase, 2. palabra objetivo, 3. palabra a introducir en la frase.
La función ha de insertar la 2da palabra después de la 1ra palabra, siempre y cuando la primera se encuentre en el texto. Si la primera palabra no se encuentra en la frase, la función devuelve la frase original.

Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.

**Ejemplo:**

Frase: nombre: edad 30.
1ra palabra: nombre.
2da palabra: Juan.

|    **ENTRADA**    |            **SALIDA**             |
|-------------------|-----------------------------------|
| nombre: edad 30<br>nombre<br>Juan | nombre: Juan edad: 30 |

### Ejercicio 8.
---
Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una frase o palabra.

Crea una función que reciba dicha frase o palabra, como resultado la función determinará si es o no un palíndromo

> *Un palíndromo es una palabra o frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha que de derecha a izquierda.*

Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.

**Ejemplo:**

|    **ENTRADA**    |            **SALIDA**             |
|-------------------|-----------------------------------|
| Yo voy | El texto introducido SI ES PALINDROMO. |
| World of Warcraft | El texto introducido NO ES PALINDROMO. |
| dabale arroz a la zorra el abad | El texto introducido SI ES PALINDROMO. |

### Ejercicio 9.
---
Realiza una aplicación web dónde se muestre un menú cuyas opciones sean las distintas operaciones a realizar sobre la cadena.

A continuación, se solicitará por pantalla, mediante una ventana emergente, al usuario una opción. La aplicación mostrará en la parte destinada para tal efecto, la salida de la operación efectuada sobre la cadena.

**La cadena es:** *"Consiste en lanzar    aros"* (nota que hay 4 espacios en blanco entre las últimas dos palabras).

Las operaciones a realizar son: 

1. Indica el número total de caracteres incluyendo los espacios en blanco.
2. Obtén el carácter que ocupa la octava posición.
3. Obtén el código Unicode del primer carácter.
4. Concatena la cadena con la cadena“ ¿roto? … ¿o mejorado?”. ¿Se modifica la primera cadena? (Muestra la respuesta a la pregunta también).
5. Comprueba si la cadena termina con los caracteres “aro”.
6. Convierte el valor Unicode 65 a su carácter equivalente.
7. Comprueba si la cadena contiene los caracteres “lanzar”.
8. Indica la posición que ocupa el primer carácter “a” de la cadena.
9. Indica la posición que ocupa el último carácter “a” de la cadena.
10. Compara la cadena con la cadena “Consiste en lanzar aros”. ¿Cuál iría en primer lugar? (Muestra la respuesta a la pregunta justificando la respuesta)
11. Obtén todas las coincidencias de la cadena con la expresión regular “/ar/g”
12. Obtén una nueva cadena con 3 repeticiones de la cadena actual.
13. Reemplaza los caracteres “lanzar” por “coger”.
14. Busca los caracteres “ste” en la cadena indica su posición.
15. Obtén de la cadena los caracteres del primero al quinto.
16. Obtén un array con todas las palabras de la cadena.
17. Comprueba si la cadena comienza con los caracteres “Consiste en”.
18. Obtén siete caracteres de la cadena a partir del segundo carácter.
19. Obtén todos los caracteres de la cadena a partir del cuarto carácter.
20. Convierte todos los caracteres de la cadena a mayúsculas.
21. Convierte todos los caracteres de la cadena a minúsculas.
22. Muestra la cadena original, deja la cadena con un único espacio en blanco entre palabras y muestra la cadena modificada. Resolverlo sin usar expresiones regulares ni arrays, solo el objeto String.

Adicionalmente, la aplicación controlará que la opción introducida sea válida

**Ejemplo:**

|    **ENTRADA**    |            **SALIDA**             |
|-------------------|-----------------------------------|
| del 1 al 22 | Resultado de la operación escogida |
| Otro valor | **Error:** opción NO VALIDA. |

### Ejercicio 10.
---
Realiza una aplicación web dónde se muestren dos botones: 

- Encriptar mensaje.
- Desencriptar mensaje.

Una vez pulsado el botón la aplicación solicitará por pantalla, mediante una ventana emergente, al usuario un mensaje y una clave numérica.

La aplicación empleará el alfabeto UNICODE para codificar/ decodificar el mensaje, dependiendo del botón clickado desplazando, cada carácter un número de veces igual al número que corresponda en la clave.

Muestra en la parte destinada para tal efecto de la aplicación web el mensaje encriptado/desencriptado.

El procedimiento manual para cifrar el mensaje sigue la siguiente heurística.

- Mensaje: Este es el mensaje.
- Clave: 12345
- Mensaje cifrado: Fuwi%fu#iq!ohrxblh

El mensaje se ha cifrado de la siguiente manera:
- E + 1 = F
- s + 2 = u
- t + 3 = w
- e + 4 = i
- (espacio en blanco) + 5 = %
- e + 1 = f
- s + 2 = u
- etc.

**Ejemplo:**

|    **ENTRADA**    |            **SALIDA**             |
|-------------------|-----------------------------------|
| Este es el mensaje<br>12345 | <b>Mensaje cifrado:</b> Fuwi%fu#iq!ohrxblh |
| Fuwi%fu#iq!ohrxblh<br>12345 | <b>Mensaje descifrado:</b> Este es el mensaje |
