# Ejercicio 3: Volumen de una pirámide
# El volumen de una pirámide se calcula con la siguiente fórmula:
# volumen = (1 * B * h) / 3
# En la fórmula anterior, B corresponde con el área de la base y h corresponde con la altura
# de la pirámide. Crea un programa que, dado el tamaño del lado de la base L y la altura h,
# calcule el volumen.
# Nota: ten en cuenta que la base (B) es un cuadrado, por lo que primero deberás calcular el
# área B partiendo del tamaño del lado (L).
# área del cuadrado es lado x lado

# Escribe un programa que solicite la altura y la longitud del lado (en metros) de una pirámide
# de base cuadrangular y calcule su volumen en metros cúbicos.

# Después de realizar ese cálculo, muestra a cuántas piscinas olímpicas equivale dicho
# volumen, teniendo en cuenta que una piscina olímpica tiene 2500 metros cúbicos

# Controlamos que sean enteros
try:
    h = int(input("Introduce la altura: "))
    
    l = int(input("Introduce la longitud del lado de la base: "))
    
except:
    print("Se ha introducido un valor que no es un número entero.")

b = l * l

volumen = b * h / 3

piscinas = int(volumen / 2500)

print("El volumen de la pirámide cuadrangular es:", volumen, "lo que equivale a", piscinas, "piscinas olímpicas.")     



