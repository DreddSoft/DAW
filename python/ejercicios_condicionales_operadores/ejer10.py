# Ejercicio 10. Pedir un número entre 0 y 99999 y decir cuántos dígitos tiene.

try:
    
    # Pedimos numero
    num = int(input("Introduce el numero: "))
    
    # Comprobamos que este dentro del rango
    if num >= 0 and num <= 99999:
        # Calculamos los digitos pasando el numero a String y calculando la longitud
        digitos = len(str(num))
        
        print("El numero", num, "tiene", digitos, "digitos.")
        
    else:
        print("EL numero esta fuera del rango definido.300")
    
except:
    print("Tipo de dato introducido erroneo.")
