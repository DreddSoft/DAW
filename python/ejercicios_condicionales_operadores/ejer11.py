# Ejercicio 11. Realiza un conversor de euros a libras, dólares, yenes o bolívares. La cantidad de euros que se quiere convertir debe ser introducida por teclado, así como la moneda a la que debo realizar el cambio.
# Los cambios
cambio_libra = 0.83
cambio_dolar = 1.05
cambio_yen = 163.76
cambio_bolivar = 47.88 

try: 
    
    # PEdimos al usuario la cantidad y la moneda a cambiar
    cantidad = float(input("Introduce la cantidad en euros: "))
    moneda = input("Introduce la moneda a cambiar (libra, dolar, yen, bolivar): ")
    
    # Si el cambio es a libras
    if moneda == "libra":
        resultado = cantidad * cambio_libra
        print(cantidad, "euros son", resultado, "libras.")
        
    # Si el cambio es a dolares
    elif moneda == "dolar":
        resultado = cantidad * cambio_dolar
        print(cantidad, "euros son", resultado, "dolares.")
        
    # Si el cambio es yenes
    elif moneda == "yen":
        resultado = cantidad * cambio_yen
        print(cantidad, "euros son", resultado, "yenes.")
        
    elif moneda == "bolivar":
        resultado = cantidad * cambio_bolivar
        print(cantidad, "euros son", resultado, "bolivares.")
       
    # La ultima opciones es el cambio a bolivaresasd 
    else:
        print("No se ha introducido una moneda de cambio correcta.")
    
except:
    print("Tipo de dato introducido erroneo.")