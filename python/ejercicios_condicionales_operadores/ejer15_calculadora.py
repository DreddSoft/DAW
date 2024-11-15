def showMenu():
    print("======> OPERACIONES <======\n1. Suma\n2. Resta\n3. Multiplicacion\n4. División\n5. Salir")
    
def sumar(num1 , num2):
    print("La suma de", num1, "+", num2, "es:", (num1 + num2))

def restar(num1, num2):
    print("La resta de", num1, "-", num2, "es:", (num1 - num2))

def multi(num1, num2):
    print("La multiplicacion de", num1, "x", num2, "es:", (num1 * num2))

def divi(num1, num2):
    print("La division de", num1, "/", num2, "es:", (num1 / num2))

def app():
    
    print("INICIO DEL PROGRAMA")
    print("=====> CALCULADORA <=====")
    
    while True:
        
        # Mostramos las opciones del menu
        showMenu()
        try:
            # Pedimos al usuario el tipo de operacion
            op = int(input("Introduce una opción: "))
            
            if (op < 5 and op >= 1):
                # Pedimos los numeros
                num1 = int(input("Introduce el primer numero: "))
                num2 = int(input("Introduce el segundo numero: "))
            
            match op: 
                case 1: 
                    sumar(num1, num2)
                case 2: 
                    restar(num1, num2)
                case 3: 
                    multi(num1, num2)
                case 4:
                    divi(num1, num2)
                case 5:
                    break
                case _:
                    print("Opción introducida no valida.")
            
        except:
            print("Has insertado un numero no válido.")
            
    print("FIN DEL PROGRAMA.")
        
    
app()