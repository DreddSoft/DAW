# Ejercicio 3: Hacer un programa que pida un carácter y nos diga si es mayúscula o no
while True:
    try: 
         c = input("Introduce un caracter: ")
         if len(c) > 1:
             raise Exception
         elif c.isdigit():
             raise Exception
         break
     
    except:
        print("Error, recuerda un caracter")
        continue
    
if c.isupper():
    print(c, "es MAYUSCULA.")
else:
    print(c, "es minuscula.")