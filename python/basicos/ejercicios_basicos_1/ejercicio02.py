# Ejercicio 2: Cálculos aritméticos
# Escribe un programa en Python que solicite dos números reales y lleve a cabo los siguientes cálculos:
# ● El doble del segundo número,
# ● La tercera parte del primer número,
# ● El cuadrado de la suma de ambos números,
# ● La décima parte de la suma de los cuadrados de ambos números.
# Para ello tendrás que utilizar operadores aritméticos tales como la suma, el producto o la
# división. Además, es posible que en algunos casos necesites hacer uso de los paréntesis.

num1 = 5.5
num2 = 3.33

# El doble del segundo
print("El doble de", num2, "es", num2 * 2)

# La tercera parte del primer numero
print("La tercera parte de", num1, "es", num1 / 3)

# El cuadrado de la suma de ambos números
print("El cuadrado de la suma de", num1, "y", num2, "es:", pow((num1 + num2), 2))

# La décima parte de la suma de los cuadrados de ambos números.
print("La decima parte de la suma de los cuadrados de", num1, "y", num2, "es:", (pow(num1, 2) + pow(num2, 2)) / 10)