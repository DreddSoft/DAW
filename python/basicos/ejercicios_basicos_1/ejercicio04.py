# Ejercicio 04

try:

    # Pedimos un número
    num = int(input("Introduce un número: "))

    # Evaluaciones
    print("El numero es cero: ", (num == 0))

    print("El numero es positivo: ", (num > 0))

    print("El numero es menor que 100: ", (num < 100))

    print("El numero es par: ", (num % 2 == 0))
    
except:
    print("El numero introducido no es un entero.")


