# Ejercicio 5

# El programa debe calcular:
#     Un largo de ida crol + largo vuelta estilo espalda
#     la cantidad de metros en cada estilo.
#     Longitud total recorrida.
    #  Tener en cuenta veces pares y veces impares

try:

    # Pedimos el número de largos (int)
    numLargos = int(input("Introduce el número de largos recorridos: "))

    # Pedimos la longitud de la piscina
    longPiscina = float(input("Introduce el largo de la piscina (en metros): "))
    
    # Calculamos la distancia total recorrida y la guardamos en una variable
    disTotal = (numLargos * longPiscina) / 1000
    
    largosCrol = numLargos / 2 if numLargos % 2 == 0 else numLargos // 2 + 1
    largosEspalda = numLargos / 2 if numLargos % 2 == 0 else (numLargos - 1) // 2
    
    if numLargos % 2 == 0:
        disEstilo = disTotal / 2
        print("Largos realizados: ", numLargos)
        print("Longitud de la piscina: ", longPiscina / 1000, " kms.")
        print("TOTAL: ", disTotal, " kms.")
        print("CROL - largos: ", numLargos / 2, " | kms: ", disEstilo, " kms.")
        print("ESPALDA - largos: ", numLargos / 2, " | kms: ", disEstilo, " kms.")
        
        
    else :
        lCrol = (numLargos // 2) + 1
        lEsp = ((numLargos - 1) // 2)
        disCrol = (lCrol * longPiscina) / 1000
        disEspalda = (lEsp * longPiscina) / 1000
        print("Largos realizados: ", numLargos)
        print("Longitud de la piscina: ", longPiscina / 1000, " kms.")
        print("TOTAL: ", disTotal, " kms.")
        print("CROL - largos: ", lCrol, " | kms: ", disCrol)
        print("ESPALDA - largos: ", lEsp, " | kms: ", disEspalda)
        
        
except:
    print("Has introducido o el número de largos mal (recuerda un entero) o la distancia de la piscina mal (recuerda numero con decimales).")
    
    

