# DAW | DESARROLLO WEB EN ENTORNO SERVIDOR.

## Ejercicios de PHP.

### Ejercicio 24 - Envío de datos desde un formulario.
---
Crea un formulario HTML, llamado ***formulario24.html*** que permita al usuario rellenar unos campos relativos a la reserva de una cita médica. Los campos son los siguientes:
- Nombre completo (requerido).
- Número de seguridad social:
    - Són 12 dígitos, pero el input:text.
    - Debe controlar con un patron que sólo se introduzcan dígitos.
    - Es requerido.
- Un campo para la fecha.
- Tipo de consulta: Select con las opciones Medicina General o Pediatría (requerido).
- Elegir un horario preferido (un input:radio) con las siguientes opciones:
    - Mañana (09:00 - 12:30).
    - Tarde (13:00 - 16:00).
    - Noche (17:00 - 20:00).

Crea un archivo PHP llamado ***ejercicio24.php** que, cuando el usuaruio envíe el formulario, deberá mostrar un resumen de la cita, procesando la información recodida de forma que si la fecha elegida por el usuario es menor al día actual o un mes posterior envíe un mensaje de error para cada caso y que informe que la cita no ha sido registrada.

- Utilizar método de envío POST.

### Ejercicio 25 - Envío de ficheros desde un formulario.
---
- Crea un formulario HTML, llamado ***formulario25v2.html*** con dos campos: **usuario** y **contraseña.**
- Crea un archivo PHP, llamado ***ejercicio25v2.php***, que compruebe los datos introducidos:
    - El usuario será: *user1* y la contraseña: *1234*.
    - Si son correctos, redirigir a un nuevo formulario llamado ***form_bienve25.html*** con un mensaje de bienvenida y permitir subir un archivo de imagen (cualquier tipo) con un tamaño que no supere los 2MB.
    - La imagen se guardará en una carpeta llamada *image_up*.
    - Mostrar el nombre del usuario y la imagen subida.

**INDICACIONES:**
- Comprobar, antes de obtener los datos del formulario, que este ha usado POST como método de envío, utilizando la información de la variable global: *$_SERVER["REQUEST_METHOD"]
- Verificar que los datos son correctos.
- Para redirigir a la nueva página usar la siguiente función: 

    ```header("Location: nueva_pagina.html"); ```
    
    ```exit(); ```

Ejercicio 25_v2: Usando $_SESSION.

Ejercicio 25_v3: Usando un input:text oculto con el valor del usuario. 
