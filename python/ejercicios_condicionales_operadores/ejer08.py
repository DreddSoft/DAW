# Ejercicio 8. Hacer un programa que tome dos números y me diga si ambos son pares o impares.

try:

    # Pedimos los numeros
    num1 = int(input("Introduce el primero numero: "))
    num2 = int(input("Introduce el segundo numero: "))

    # Comprobamos si es par
    # Num1 es par y num2 impar
    if num1 % 2 == 0 and num2 % 2 != 0:
        print(num1, "ES PAR,", num2, "ES IMPAR.")

    # Num2 es par y num1 impar
    elif num1 % 2 != 0 and num2 % 2 == 0:
        print(num1, "ES IMPAR,", num2, "ES PAR.")

    # Los dos pares
    elif num1 % 2 == 0 and num2 % 2 == 0:
        print(num1, "y", num2, "son PARES.")
    # Los dos impares
    else:
        print(num1, "y", num2, "son IMPARES.")


except:
    print("Tipo de dato erroneo.")
