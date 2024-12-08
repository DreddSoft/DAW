# DESARROLLO WEB EN ENTORNO CLIENTE
## Ejercicios de Objetos JavaScript - Date

### Ejercicio 1
Realiza una aplicación web dónde se muestre en la parte destinada para tal efecto la siguiente cadena de caracteres en función de la hora y el día.

- "Buenos días, que tengas un feliz <diaSemana>": de 6 de la mañana a las 12 del medio día.
- "Buenas tardes, disfrute de su tarde del <diaSemana>: de las 12 del mediodía hasta las 20h.
- "Buenas noches, le deseamos lo mejor para el <diaSemana> próximo: de las 20h hasta las 6 de la madrugada.

**Ejemplo:**

| **ENTRADA**                                 | **SALIDA**                             |
| ------------------------------------------- | -------------------------------------- |
| Si entro a la web a las 10:30h de un martes | Buenos días, que tenga un feliz martes |

---
### Ejercicio 2
Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario dos fechas y horas en formato XXXX/YY/ZZ HH:MM:SS.

Donde: 
XXXX es el año YY, el mes y ZZ, el día.
HH son las horas en formato 24 horas, MM los minutos y SS, los segundos.

Crea una función que sea capaz de calcular el número de días y horas transcurridos entre esas dos fechas y horas dadas . El resultado debe ser un valor absoluto, es decir, es indiferente que el primer argumento sea una fecha anterior o posterior al segundo, el resultado será un número de días y horas sin signo.

Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.

**Ejemplo:**

| **ENTRADA**                                | **SALIDA**                                                       |
| ------------------------------------------ | ---------------------------------------------------------------- |
| 2024/03/10 10:30:00<br>2024/03/15 22:45:00 | Entre ambas fechas han transcurrido 5 días, 12 horas y 5 minutos |

### Ejercicio 3
Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una fecha.

Crea una función que reciba como argumento esa fecha y devuelva el número de días del mes introducido para ese año.

**Recuerda:** un año es bisiesto si es múltiplo de 4, excepto el primer año del siglo (1500, 1600...) que solo lo será si es divisible por 400.

Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior

**Ejemplo:**

| **ENTRADA** | **SALIDA** |
| ----------- | ---------- |
| 01/02/2000  | 29 dias    |
| 01/12/2024  | 31 dias    |

### Ejercicio 4
Realiza una aplicación web dónde se solicite por pantalla, mediante una ventana emergente, al usuario una fecha.

Crea una función/método para el objeto Date, denominada getWeek, que devuelva el número de semana para la fecha introducida.

Según la norma ISO 8601, las semanas comienzan en lunes y si el año comienza antes del viernes esa es la semana 1 del año, en caso contrario esa es la última semana del año anterior. Si el año termina antes del jueves esa última semana se cuenta como semana 1 del año siguiente.

Muestra en la parte destinada para tal efecto de la aplicación web la salida de la función anterior.

**Ejemplo:**

| **ENTRADA** | **SALIDA**                                                                                    |
| ----------- | --------------------------------------------------------------------------------------------- |
| 12/09/2024  | El número de semana para la fecha introducida es 37                                           |
| 01/01/2023  | El número de semana para la fecha introducida es 52 (ya que corresponde a la semana anterior) |