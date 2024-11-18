# DAW | DESARROLLO WEB EN ENTORNO SERVIDOR.

## Ejercicios de PHP.

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
