# Ejercicio 2: Pedir dos números y decir cual es el mayor de ellos o si son iguales
while True:
    try:
        num1 = int(input("Introduce el primer numero: "))
        num2 = int(input("Introduce el segundo número: "))
        
        break
        
    except:
        print("Error, recuerda un número entero.")
        continue
    
match num1:
    case num1 if num1 > num2:
        print(num1, "es mayor que", num2)
    case nu1 if num1 == num2:
        print(num1, "es igual que", num2)
    case _:
        print(num1, "es menor que", num2)