
markdown
Copiar código
# Ejercicio 25 – Envío de ficheros desde un formulario (15/11/2024)

- Crea un formulario HTML, llamado `formulario25.html` con dos campos: **usuario** y **contraseña**.
- Crea un archivo PHP, llamado `Ejercicio25.php`, que compruebe los datos introducidos:
  - El usuario será: `user1` y la contraseña `1234`.
  - Si son correctos, mostrar un mensaje de bienvenida y permitir subir una imagen. La imagen será de tipo **JPG** o **PNG** y el tamaño máximo será de **2MB**.
  - La imagen se guardará en una carpeta llamada `image_up`.
  - Este archivo PHP contendrá 3 cuerpos HTML diferentes:
    1. Una vez se accede con las credenciales correctas: un formulario para subir la imagen y enviarla.
    2. En caso de que no se acceda con las credenciales correctas: un display con un mensaje de error.
    3. Un display que muestre un mensaje de bienvenida y la imagen que se ha subido.
- Mostrar el nombre del usuario y la imagen subida.