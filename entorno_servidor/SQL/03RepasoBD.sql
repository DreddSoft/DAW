-- Crear la tabla ciudades
create table Ciudades 
(
    idCiudad varchar(10) primary key,
    nombreCiudad varchar(50) not null,
    provincia varchar(50),
    numHab int(11)
);

-- Crear la tabla torneos
create table Torneos (
    idTorneo varchar(9) not null,
    año int(4) unsigned not null, 
    ubicacion varchar(50),
    idCiudad varchar(7),
    idJuego varchar(7),
    inscripcion float(6,2),
    numdias int(10) unsigned

);

-- Comprobamos
desc Torneos;

-- Añadir la restricción de primary key
alter table torneos
add primary key (idTorneo, idCiudad, idJuego);

-- Crear la tabla Jugadores
create table Jugadores (
    idJugador varchar(7) primary key,
    dniJugador varchar(9) not null,
    fechaN date,
    nombreJug varchar(30) not null,
    ap1Jug varchar(30) not null,
    ap2Jug varchar(30),
    telfJug varchar(20) not null,
    emailJug varchar(30) not null
);

-- Comprobamos con un desc
desc Jugadores;

-- Crear tabla Juegos
create table Juegos (
    idJuego varchar(7) primary key,
    nombreJuego varchar(50),
    minJug int(11),
    maxJug int(11),
    delegado varchar(50) not null
);

-- Comprobamos
desc Juegos;