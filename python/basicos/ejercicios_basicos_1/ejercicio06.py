# Ejercicio 6: Cuadernos de colores
# Una factoría papelera confecciona cuadernos en los que se van alternando hojas de color
# rojo, verde y azul. Siempre se comienza por el color rojo, siguiéndole el verde, luego el azul
# y comenzando nuevamente con el rojo.
# Por ejemplo, si un cuaderno está compuesto por 100 hojas, 34 serían de color rojo, 33 de
# color verde y 33 de color azul.
# Sin embargo, si el cuaderno tuviera 200 hojas, 67 serían de color rojo, 67 de color verde y
# 66 de color azul.
# Por otro lado, si el cuaderno tuviera 201 hojas, 67 serían rojas, 67 verdes y 67 azules.
# Escribe un programa en Python que solicite por teclado el número de hojas del cuaderno y
# calcule y muestre por pantalla la cantidad de hojas que contiene de cada color.

# Controlamos que sea entero
try: 
    numHojas = int(input("Introduce el número de hojas del cuaderno: "))
    
except:
    print("Error, no has introducido un numero entero")
    
# Una forma
for i as numHojas:
    
    