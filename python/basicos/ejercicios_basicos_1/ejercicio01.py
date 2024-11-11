# Ejercicio 1: Partes de un PC
# Escribe un pequeño programa en Python que defina un enumerado con los nombres de partes
# de un pc (haz 4 o 5, no más), para posteriormente mostrar por pantalla cada valor del
# enumerado declarado.
# La salida por pantalla podría ser algo así:
# PARTES de un PC
# ---------------------------
# Componente 1: MONITOR
# Componente 2: TECLADO
# Componente 3: RATON
# Componente 4: IMPRESORA

# Guardamos los valores en el array
componentes = ('MONITOR', 'TECLADO', 'RATON', 'IMPRESORA')

# Variable contador
cnt = 0

# Realizamos la impresión
for componente in componentes:
    cnt += 1
    print("Componente", cnt, ":", componente)

