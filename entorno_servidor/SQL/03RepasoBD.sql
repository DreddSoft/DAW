-- Crear la tabla Ciudades
create table Ciudades (
    idCiudad varchar(7) primary key,
    nombreCiudad varchar(50) not null,
    provincia varchar(50),
    numHab int(11)
);