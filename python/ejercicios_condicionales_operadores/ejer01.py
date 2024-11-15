# Ejercicio 1: HAcer un programa que pida un número entero y muestre si es multiplo de 10

# Pedimos número y controlamos que sea entero
while True:
    try:
        num = int(input("Introduce un número: "))
        break
    
    except:
        print("Error, has introducido algo que no es un número entero, intentalo de nuevo.")
        continue
     

if num % 10 == 0:
    print("El numero", num, "es divisible entre 10.")
    
else:
    print("El numero", num, "no es divisible entre 10.")