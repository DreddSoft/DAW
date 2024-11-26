# Ejercicios de Validación de Formatos en Aplicaciones Web

## **Ejercicio 1: Validación de Email**

### Descripción:
Realiza una aplicación web donde se solicite al usuario, mediante una ventana emergente, una **cadena de caracteres** que corresponda a un **formato válido de email**.

### **Requisitos del formato de email:**
1. **Nombre de usuario:**
   - Compuesto por letras mayúsculas o minúsculas, números, puntos (`.`), guiones bajos (`_`) o guiones altos (`-`).
2. **Una arroba (`@`).**
3. **Nombre del servidor:**
   - Puede contener letras mayúsculas o minúsculas, números, guiones bajos o altos, pero no puntos (`.`).
4. **Dominio:**
   - Formado por uno o dos grupos de entre 2 y 4 letras separados por puntos (`.`).
   - Ejemplos válidos: `.es`, `.com`, `.com.es`.

### **Ejemplos de emails válidos:**
- `carmelo@gmail.com`
- `carmelo123@gmail.com`
- `Carmelo_Jaen@gmail.com`
- `carmelo-jaen@gmail.com`
- `Carmelo.jaen@gmail.com`
- `carmelo@gmail.com.es`
- `carmelo.jaen-diaz@gmail.site`

### **Funcionamiento:**
- Valida el email introducido por el usuario mediante una **única expresión regular**.
- Si el email es válido, muestra en la interfaz:
  > "El correo introducido ha sido almacenado correctamente."
- Si el email no es válido, muestra un mensaje emergente:
  > "El correo introducido no tiene un formato válido."
- Repite la solicitud hasta que el usuario introduzca un email válido.

### **Ejemplo de ejecución:**
| **Entrada**                         | **Salida**                                              |
|-------------------------------------|--------------------------------------------------------|
| `pe.p-Guardiola@gmail.site`         | "El correo introducido ha sido almacenado correctamente." |
| `pep Guardiola@hotmail.org.es.com`  | "El correo introducido no tiene un formato válido."       |

---

## **Ejercicio 2: Registro y Validación de Email y Contraseña**

### Descripción:
Realiza una aplicación web que simule la pantalla de registro de un usuario. 

### **1. Validación del Email**

#### **Requisitos del formato de email:**
1. **Nombre de usuario:**
   - Compuesto por letras mayúsculas o minúsculas, números, puntos (`.`), guiones bajos (`_`) o guiones altos (`-`).
2. **Una arroba (`@`).**
3. **Nombre del servidor:**
   - Puede contener letras mayúsculas o minúsculas, números.
4. **Dominio:**
   - Formado por uno o dos grupos de entre 2 y 4 letras separados por puntos (`.`).
   - Ejemplos válidos: `.es`, `.com`, `.com.es`.

#### **Proceso de validación:**
- Solicita al usuario que introduzca el email **dos veces**.
- Si los emails no coinciden, vuelve a pedirlos hasta que sean iguales.
- Si el email es válido, muestra en la interfaz:
  > "El email escogido es válido.  
  > Establezca una contraseña."

---

### **2. Validación de la Contraseña**

#### **Requisitos del formato de contraseña:**
1. Debe contener al menos:
   - Una letra **minúscula**.
   - Una letra **mayúscula**.
   - Un **dígito** (número).
   - Un carácter especial de entre los siguientes: `#$@!%&?`.
2. No debe incluir espacios.
3. Longitud mínima: **8 caracteres**.  
   Longitud máxima: **16 caracteres**.

#### **Proceso de validación:**
- Solicita al usuario que introduzca la contraseña **dos veces**.
- Si las contraseñas no coinciden, vuelve a pedirlas hasta que sean iguales.
- Si la contraseña es válida, muestra en la interfaz:
  > "Email/contraseña configurados con éxito.  
  > Ingrese los datos de acceso para acceder a la web."

---

### **3. Validación de Acceso**

#### **Funcionamiento:**
- Solicita al usuario que introduzca su combinación de **email** y **contraseña**.
- Permite un máximo de **3 intentos**.
- Si el usuario acierta:
  > "Acceso exitoso."
- Si se exceden los intentos:
  > "Usuario bloqueado."

---

### **Ejemplos de contraseñas válidas:**
- `asAB12$%`
- `Asdf&1234%Ghjkas`

---

### **Ejemplo de ejecución:**
| **Entrada**                         | **Salida**                                               |
|-------------------------------------|----------------------------------------------------------|
| `pe.p-Guardiola@gmail.site.es`      | `"La especificada para email y contraseña válidas"`      |
| `Asdf&1234%Ghjkas`                  |                                                          |
| `pep Guardiola@hotmail.org.es.com`  | `"La especificada para email y contraseña no válidas"`   |
| `aB1$`                              |                                                          |
