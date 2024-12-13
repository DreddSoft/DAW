# SQL en Visual Studio Code
> ❗Ojo, ilegalísimo con Noemí!!!!

## Pasos

### 1. Extensiones de VSCode:
Importante, instalar estas dos extensiones de SQL:

![extensiones de SQL](image-6.png)

Tras la instalación, click derecho en la barra lateral de VS Code y habilitamos SQL Tools:

![SQL Tools](image-7.png)

### 2. Configuración:

Levantamos MySQL con XAMPP, nos apuntamos el puerto y tenemos que hacer click sobre el botón de la barra lateral de SQL Tools.
Tras eso, hacemos click sobre el botón de añadir conexión, se nos mostrará en la pantalla 3 opciones de motores de BD, seleccionamos MariaDB:

![motores](image-9.png)


En la configuración, tenémos que dejar los campos tal y cómo la imagen:

![edit connection](image-8.png)

Tras configurar, pulsamos sobre save connection. Nos aparecerá una pantalla con el JSON de configuración y ahí pulsamos en **CONNECT NOW**.

![connect](image-10.png)

### 3. Usar archivos .sql para hacer los ejercicios.
Tras toda la instalación y configuración, si queremos hacer uso de SQL en VSCode, tenemos que crear un archivo, por ejemplo *01RepasoBD.sql*, y empezar a escribir las sentencias SQL de los ejercicios de Noemí.

Hay varias opciones de ejecutar:

1. Ejecutar el bloque completo (el archivo SQL completo), para eso pulsamos en el botón superior:

![botons superior](image-11.png)

2. Ejecutar un un bloque específico: Seleccionamos el bloque y aquí tenemos dos opciones: pulsar las teclas *control* + *E* *E* (si, dos veces E), o clicl derecho: *Run Selected Query*.

!Ojo, importante, siempre hacer:
```SQL

use nombre_database;

```