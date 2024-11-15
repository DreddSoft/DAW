# Ejercicio 4: Realiza un programa que pida una hora por teclado y que muestre luego buenos días
# buenas tardes o buenas noches según la hora. Solo tener en cuenta las horas

while True:
    try:
        hora = int(input("Introduce una hora: "))
        
        if hora < 0 and hora >= 24:
            raise Exception
        
        break
        
    except: 
        print("Te has salido del formato de hora, recuerda entre las 00 y las 23.")
        continue
    
match hora:
    case hora if hora > 20:
        print("Buenas noches.")
    case hora if hora > 12:
        print("Buenas tardes.")
    case hora if hora > 5:
        print("Buenos dias")
    case _:
        print("Buenos noches.") 