# Nomrbres que terminen por la misma letra y sus apellidos misma longitud

print("INICIO DE PROGRAMA")

# Recibe como entrada un nombre, ape1 y ape2
nom = input("Introduce el nombre: ")

ape1 = input("Introduce el primer apellido: ")

ape2 = input("Introduce el segundo apellido: ")

# Pasar todo a mayus
nom = nom.upper()
ape1 = ape1.upper()
ape2 = ape2.upper()

firstCond = True if (nom[0] == nom[-1]) else False
secondCond = True if (len(ape1) == len(ape2)) else False

if firstCond and secondCond:
    print(nom, ape1, ape2, "Persona APTA para participar en el concurso.")

else:
    print(nom, ape1, ape2, " Persona NO APTA para participar en el concurso.")


print("FIN DE PROGRAMA")
