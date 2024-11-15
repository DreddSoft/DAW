# Ejercicio 7. Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera:
# ● Si trabaja 40 horas o menos se le paga a 16€/hora.
# ● Si trabaja más de 40 horas se le paga 16€/hora por cada una de las primeras 40 horas y 20€ por cada hora extra.

# Se definen los precios por hora
precioHora_base = 16
precioHora_extra = 20

try:
    
    # Solicitar las horas trabajadas
    horas = int(input("Introduzca el numero de horas trabajadas: "))
    
    # Si es menor o igual a 40 horas
    if horas <= 40:
        salario = horas * precioHora_base
        print("El salario por", horas, "es de:", salario, "euros.")
        
    # Si es mayor de 40 horas
    else: 
        horasExtra = horas - 40
        salario = (40 * precioHora_base) + (horasExtra * precioHora_extra)
        print("El salario por", horas, "es de:", salario, "euros.")
    
    
except:
    print("Se ha introducido el tipo de dato erroneo.")