# lista de jugadores
jugadores = ["Gene Howard", "Austin Howard", "Olga Leonard"]


# Hay que hacer diferentes operaciones
# Función para añadir un jugador a la lista
def addPlayer(name, players):
    players.append(name)


# Eliminar un jugador de la lista de fichajes, para eso mostramos la lista con indices y luego borramos
def deletePlayer(name, players):
    # Primero, mostrar lista
    showList(players)

    while True:

        # Pedir indice (numero) del jugador por teclado
        try:
            idx = int(input("Introduce el número del jugador a eliminar: "))

            # Eliminamos de la lista
            if idx > len(players) or idx < 0:
                raise Exception("Has escogido un indice que no está en la lista.")

            else:
                # Eliminamos de la lista según el indice
                players.pop(idx)
                # Salimos
                break

        except Exception as error:
            print(error)

    print("Jugador eliminado.")


# Buscar jugador específico por nombre
def findPlayer(players):

    print("============================================\n\n")
    print("4. BÚSQUEDA JUGADO ESPECÍFICO.")
    print("Vamos a buscar a un jugador específico por su nombre.")

    # TODO: añadir el input del nombre
    exit = False
    while exit == False:

        name = input("Por favor, introduce el nombre del jugador: ")

        print("¿Es", name, "correcto?")
        r = input("(S) para SI, (N) para No.")
        if r[0].lower == "s":
            exit = True

    noEsta = True

    for idx, player in enumerate(players):
        if player == name:
            print(
                "El jugador", player, "SÍ se encuentra en la lista en la posición:", idx
            )
            noEsta = False

    if noEsta:
        print("El jugador", name, "NO esta en la lista.")


# Mostrar lista
def showList(players):
    for idx, player in enumerate(players):
        print(idx, player)


# Vamos probando las funciones
jugador = "Pedro Piqueras"

print("Probamos añadir jugadores.")
addPlayer(jugador, jugadores)  # Funciona
showList(jugadores)

print("Probamos eliminar jugadores")
deletePlayer(jugador, jugadores)
showList(jugadores)

print("Probamos buscar a un jugador específico.")
findPlayer(jugadores)
showList(jugadores)


print("FIN DE PROGRAMA")
