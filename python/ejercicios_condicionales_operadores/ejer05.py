# Ejercicio 5: Escribe un progra que nos diga el horóscopo a partir del día y el mes de nacimiento

while True:
    try:
        mes = int(input("Introduce el mes de tu nacimiento:"))

        if mes < 1 and mes > 12:
            raise Exception("El mes no es correcto.")

        dia = int(input("Introduce el dia de tu nacimiento:"))

        if dia < 1:
            raise Exception("El dia es menor que 1.")
        elif mes == 2 and dia > 28:
            raise Exception("Febrero tiene un máximo de 28 días.")
        elif mes == (1, 3, 5, 7, 8, 10, 12):
            if dia > 31:
                raise Exception("Te has equivocado en el numero de día.")
        else:
            if dia > 30:
                raise Exception("Te has equivocado en el numero de día.")

            break

    except Exception as error:
        print("Error:", error)
        continue

if (dia >= 21 and mes == 3) or (dia <= 19 and mes == 4):
    print("Naciste el", dia, mes, "eres ARIES.")
elif (dia >= 20 and mes == 4) or (dia <= 20 and mes == 5):
    print("Naciste el", dia, mes, "eres TAURO.")
elif (dia >= 21 and mes == 5) or (dia <= 20 and mes == 6):
    print("Naciste el", dia, mes, "eres GEMINIS.")
elif (dia >= 21 and mes == 6) or (dia <= 22 and mes == 7):
    print("Naciste el", dia, mes, "eres CANCER.")
elif (dia >= 23 and mes == 7) or (dia <= 22 and mes == 8):
    print("Naciste el", dia, mes, "eres LEO.")
elif (dia >= 23 and mes == 8) or (dia <= 22 and mes == 9):
    print("Naciste el", dia, mes, "eres VIRGO.")
elif (dia >= 23 and mes == 9) or (dia <= 22 and mes == 10):
    print("Naciste el", dia, mes, "eres LIBRA.")
elif (dia >= 23 and mes == 10) or (dia <= 21 and mes == 11):
    print("Naciste el", dia, mes, "eres ESCORPIO.")
elif (dia >= 22 and mes == 11) or (dia <= 21 and mes == 12):
    print("Naciste el", dia, mes, "eres SAGITARIO.")
elif (dia >= 22 and mes == 12) or (dia <= 19 and mes == 1):
    print("Naciste el", dia, mes, "eres CAPRICORNIO.")
elif (dia >= 20 and mes == 1) or (dia <= 18 and mes == 2):
    print("Naciste el", dia, mes, "eres ACUARIO.")
else:
    print("Naciste el", dia, mes, "eres PISCIS.")
