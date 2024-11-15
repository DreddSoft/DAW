# Ejercicio 9. Pedir 3 números y ordenarlos de mayor a menor.

try: 
    
    num1 = int(input("Introduce el primer numero: "))
    num2 = int(input("Introduce el segundo numero: "))
    num3 = int(input("Introduce el tercer numero: "))
    
    # Ordenar los numeros en base a condicionales: orden descendente
    if num1 >= num2 and num1 >= num3:
        if num2 >= num3:
            print(f"El orden es: ", num1, num2, num3)
        else:
            print(f"El orden es: ", num1, num3, num2)
    elif num2 >= num1 and num2 >= num3:
        if num1 >= num3:
            print(f"El orden es: ", num2, num1, num3)
        else:
            print(f"El orden es: ", num2, num3, num1)
    else:
        if num1 >= num2:
            print(f"El orden es: ", num3, num1, num2)
        else:
            print(f"El orden es: ", num3, num2, num1)
         
except:
    print("Tipo de dato introducido es erroneo.")
