# Ejercicio 6: En MegaPlaza se hace un 20% de descuento a los clientes cuya compra supere los 300€. ¿Cuál será la cantidad que pagará una persona por su compra?


try: 
    
    # Solicitamos el precio total de la compra al usuario
    precio_total = float(input("Introduce el precio de la compra: "))
    
    # Si es mayor de 300
    if precio_total > 300:
        precio_final = precio_total - (precio_total * 0.20)
        print("Se ha aplicado un descuento del 20% por superar los 300 euros. El precio final es:", precio_final)
    
    # Si es menor
    else: 
        print("No se ha aplicado ningun descuento, el precio final es:", precio_total)
    
except: 
    print("Error en el tipo de dato.")
