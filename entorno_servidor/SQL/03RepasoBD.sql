--! Importante seleccionar la base de datos
use campeonatos;

-- Crear la tabla ciudades
create table Ciudades 
(
    idCiudad varchar(10) primary key,
    nombreCiudad varchar(50) not null,
    provincia varchar(50),
    numHab int(11)
);

-- Insertar datos en ciudad
insert into ciudades values
('ALB01', 'Albacete', 'Albacete', 173000),
('ALI01', 'Alicante', 'Alicante', 337000),
('ALI02', 'Aspe', 'Alicante', 20800),
('ALI03', 'Elda', 'Alicante', 54500),
('ALI04', 'Villena', 'Alicante', 35000),
('ALM01', 'El Ejido', 'Almería', 52000),
('BIL01', 'Bilbao', 'Bilbao', 348000),
('GRA01', 'Baza', 'Granada', 21000),
('GRA02', 'Lanjarón', 'Granada', 4000),
('GRA03', 'Loja', 'Granada', 20500),
('GRA04', 'Motril', 'Granada', 60500),
('MAD01', 'Alcalá de Henares', 'Madrid', 195000),
('MAD02', 'Coslada', 'Madrid', 620000),
('MAD03', 'Majadahonda', 'Madrid', 740000),
('MAD04', 'Getafe', 'Madrid', 622000),
('MAD05', 'Madrid', 'Madrid', 3200000),
('MAL01', 'Fuengirola', 'Malaga', 82900),
('MAL02', 'Nerja', 'Málaga', 22000),
('MAL03', 'Ronda', 'Malaga', 33400),
('MUR01', 'Aguilas', 'Murcia', 36000),
('MUR02', 'Calasparra', 'Murcia', 10200),
('MUR03', 'Murcia', 'Murcia', 454000),
('SEV01', 'Sevilla', 'Sevilla', 1900000),
('SEV02', 'Écija', 'Sevilla', 40000),
('VAL01', 'Onteniente', 'Valencia', 36000),
('VAL02', 'Valencia', 'Valencia', 790000),
('ZAG01', 'Zaragoza', 'Zaragoza', 700000);

-- Comprobamos la introducción de datos
select * from Ciudades;

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

-- Insertar valores en la tabla Torneos
insert into Torneos values
('T001', 2005, 'Biblioteca Cervantes', 'MAD01', 'J06', 3.20, 3),
('T002', 2005, 'SUM Ayuntamiento', 'MAL03', 'J01', 1.50, 5),
('T003', 2005, 'Pabellón Deportivo Municipal', 'MAL01', 'J04', 12.50, 3),
('T004', 2005, 'Polideportivo Municipal', 'GRA04', 'J05', 8.20, 5),
('T005', 2007, 'CEIP García Lorca', 'GRA04', 'J07', 15.80, 4),
('T006', 2010, 'CM Albaida', 'ALI01', 'J07', 5.50, 2),
('T007', 2010, 'Biblioteca Cervantes', 'MAD01', 'J01', 7.00, 5),
('T008', 2010, 'Centro Ferial JRus', 'MUR01', 'J05', 12.50, 3),
('T009', 2011, 'IES Gran Capitan', 'GRA03', 'J01', 6.10, 6),
('T010', 2011, 'IES Gran Capitan', 'GRA03', 'J02', 6.10, 2),
('T011', 2012, 'CEIP García Lorca', 'GRA04', 'J07', 10.00, 2),
('T012', 2012, 'Polideportivo Municipal Elda', 'ALI03', 'J09', 6.70, 4),
('T013', 2012, 'Polideportivo Municipal Elda', 'ALI03', 'J05', 5.50, 3),
('T014', 2015, 'CEIP Antonio Machado', 'GRA03', 'J06', 3.20, 5),
('T015', 2017, 'Centro Municipal Las Palomas', 'MAL03', 'J06', 12.00, 2),
('T016', 2017, 'Biblioteca Cervantes', 'MAD01', 'J03', 8.50, 4),
('T017', 2017, 'IES Góngora', 'MUR02', 'J02', 6.10, 1),
('T018', 2017, 'IES Góngora', 'MUR02', 'J01', 6.00, 1),
('T019', 2017, 'Centro Municipal Las Palomas', 'MAL03', 'J07', 4.00, 4),
('T020', 2017, 'Ayuntamiento', 'GRA01', 'J03', 3.50, 4),
('T021', 2017, 'CEIP García Lorca', 'GRA04', 'J03', 15.30, 6),
('T022', 2017, 'CM Albaida', 'ALI01', 'J07', 4.20, 1),
('T023', 2019, 'Recinto Ferial', 'MUR03', 'J12', 5.50, 5),
('T024', 2019, 'CEIP García Lorca', 'GRA04', 'J06', 3.50, 1),
('T025', 2019, 'Biblioteca Cervantes', 'MAD01', 'J01', 5.30, 4),
('T026', 2024, 'Pabellón Multiusos', 'MUR01', 'J01', 10.00, 6),
('T027', 2024, 'Polideportivo La Paz', 'MAD01', 'J02', 7.00, 5),
('T028', 2024, 'Auditorio Ciudad de Alicante', 'ALI01', 'J03', 8.50, 4),
('T029', 2024, 'Centro Deportivo Fuengirola', 'MAL01', 'J04', 7.00, 3),
('T030', 2024, 'Pabellón Siglo XXI', 'ZAG01', 'J05', 15.30, 6),
('T031', 2024, 'Salón de Eventos de Valencia', 'VAL01', 'J06', 12.00, 5),
('T032', 2024, 'Polideportivo San Sebastián', 'SEV01', 'J07', 12.50, 4),
('T033', 2024, 'Centro Deportivo San Juan', 'MAD03', 'J08', 10.00, 3),
('T034', 2024, 'Pabellón Municipal de Granada', 'GRA01', 'J09', 6.50, 6),
('T035', 2024, 'Arena Bilbao', 'BIL01', 'J10', 7.00, 2),
('T036', 2024, 'Recinto Ferial de Coslada', 'MAD02', 'J11', 6.50, 5),
('T037', 2024, 'Polideportivo El Sur', 'MAL03', 'J12', 8.50, 4),
('T038', 2024, 'Centro Deportivo Almería', 'ALM01', 'J13', 12.00, 6),
('T039', 2024, 'Pabellón Municipal de Loja', 'GRA03', 'J14', 15.30, 3),
('T040', 2024, 'Sala Polivalente de Aspe', 'ALI02', 'J15', 6.50, 6);

-- Comprobamos la insercción
select * from Torneos;

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

-- Insertamos valores en la tabla Jugadores
insert into Jugadores values
('ID01', '75123665L', '2001-05-15', 'Álvaro', 'García', 'Yañez', '607441000', 'agy@email.net'),
('ID02', '75333465K', '2006-08-12', 'Ana', 'Gutierrez', 'López', '784100222', 'agul@hotmail.com'),
('ID03', '71548222L', '2005-11-02', 'Juan', 'Astoria', NULL, '666101101', 'ja3@gmail.com'),
('ID04', '77123888H', '1997-04-19', 'Pedro', 'Jiménez', 'Tiscar', '600147741', 'pjti@network.net'),
('ID05', '79133408D', '1995-07-30', 'José', 'Duarte', 'Tiscar', '600147741', 'pjti@network.net'),
('ID06', '71411236D', '1985-01-03', 'Belén', 'Gutierrez', 'Aguilar', '608002447', 'gtag3@yahoo.es'),
('ID07', '78259333K', '2004-06-19', 'Andrea', 'Luque', 'Grizman', '854122304', 'aluq@ygmail.com'),
('ID08', '28134360R', '1995-11-13', 'Humberto', 'Sánchez', 'Santos', '623001410', 'sasa5@empresa3.com'),
('ID09', '72334108G', '1997-01-14', 'Alicia', 'Ruiz', 'Pineda', '540140325', 'ali6@gmail.com'),
('ID10', '78135005J', '1990-11-19', 'Antonio', 'Lopez', 'Liaño', '607195221', 'alono@gmail.com'),
('ID11', '24133105T', '2000-01-31', 'Pedro', 'Turín', 'León', '602414338', 'pelon8@hotmail.com'),
('ID12', '54222123G', '2000-05-12', 'Paula', 'Toledo', 'Bueno', '666541178', 'tolpa@hotmail.com'),
('ID13', '27123444H', '2011-07-01', 'Pedro', 'Álvarez', NULL, '607195854', 'palv@gmail.com'),
('ID14', '58123123L', '2015-09-01', 'Patricia', 'Montero', 'Yáñez', '689123678', 'pmont@yahoo.es'),
('ID15', '75900102R', '2003-07-06', 'Marta', 'Toledo', 'Bueno', '633635234', 'marta21@gmail.com'),
('ID16', '79141222M', '2008-02-05', 'Jose', 'Luque', 'Grizman', '664102232', 'jgman@gmail.com'),
('ID17', '77155150Z', '2014-09-01', 'Antonio', 'Muñoz', 'López', '662232114', 'amunoz@gmail.com'),
('ID18', '12345678A', '1990-05-15', 'Juan', 'Pérez', 'González', '600123456', 'jperez@gmail.com'),
('ID19', '23456789B', '1985-08-20', 'Ana', 'López', 'Martínez', '600234567', 'anaez@empresa.net'),
('ID20', '34567890C', '1992-02-10', 'Carlos', 'Sánchez', NULL, '600345678', 'carchez@email.com'),
('ID21', '45678901D', '2005-11-25', 'Lucía', 'Gómez', 'Rodríguez', '600456789', 'luciadrez@hotmail.com'),
('ID22', '56789012E', '1991-03-18', 'José', 'Fernández', 'Díaz', '600567890', 'jfernandez@yahoo.es'),
('ID23', '67890123F', '1989-06-22', 'María', 'Ruiz', NULL, '600678901', 'mariiz@gmail.com'),
('ID24', '78901234G', '2009-09-30', 'David', 'Hernández', 'Moreno', '600789012', 'davhernandez@hotmail.com'),
('ID25', '89012345H', '2001-01-15', 'Carmen', 'Jiménez', 'Suárez', '600890123', 'carmenez@gmail.com'),
('ID26', '90123456I', '1995-04-05', 'Sergio', 'Ramírez', 'Torres', '600901234', 'smirez@gmail.com'),
('ID27', '12345678J', '1997-12-10', 'Raquel', 'Mendoza', 'López', '600123457', 'rquelza@gmail.com'),
('ID28', '23456789K', '2010-07-25', 'Pablo', 'Vázquez', 'Gil', '600234568', 'pvazquez@hotmail.com'),
('ID29', '34567890L', '2000-10-12', 'Beatriz', 'García', NULL, '600345679', 'beacia@outlook.com'),
('ID30', '45678901M', '2006-09-14', 'Pedro', 'Álvarez', 'Romero', '600456780', 'pedroalvarez@gmail.com'),
('ID31', '56789012N', '2008-03-05', 'Laura', 'Castro', 'Martín', '600567890', 'lauritro@yahoo.es'),
('ID32', '67890123O', '2005-11-17', 'Iván', 'Morales', 'López', '600678902', 'ivanles@hotmail.com'),
('ID33', '78901234P', '2014-04-01', 'Marta', 'Gutiérrez', 'Navas', '600789013', 'martaerrez@gmail.com'),
('ID34', '89012345Q', '1987-12-29', 'Ricardo', 'Serrano', 'Navarro', '600890124', 'rserrano@gmail.com'),
('ID35', '90123456R', '2004-05-22', 'Isabel', 'Pascual', NULL, '600901235', 'belpascual@gmail.com'),
('ID36', '12345678S', '1997-09-10', 'Manuel', 'Cordero', 'Muñoz', '600123458', 'mandero@gmail.com'),
('ID37', '23456789T', '2012-01-01', 'Elena', 'Vega', 'Ruiz', '600234569', 'elvega@hotmail.com');

-- Comprobamos la insercción
select * from Jugadores;

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

-- Añadir las restricciones de la tabla juegos
alter table Juegos
add constraint chk_minJug check (minJug >= 2),
add constraint chk_maxJug check (maxJug <= 100);

-- Insertamos valores en la tabla juegos
insert into Juegos values
('J01', 'Rubik 3x3', 6, 50, 'José Prados'),
('J02', 'Rubik OH', 6, 50, 'Jose Prados'),
('J03', 'Ajedrez', 2, 26, 'Carmen Pastor'),
('J04', 'Billar Carambola', 2, 32, 'Ángel Pastor'),
('J05', 'Billar Snooker', 2, 32, 'Luisa Mercado'),
('J06', 'Clock', 2, 42, 'Patricia López'),
('J07', 'Dominó', 2, 20, 'Ramiro Nieto'),
('J08', 'Damas', 2, 20, 'Ramiro Nieto'),
('J09', 'Petanca', 8, 20, 'Alberto Rojas'),
('J10', 'Poker Cartas', 4, 16, 'Francisco Martín'),
('J11', 'Poker americano', 4, 12, 'Fernándo Ruiz'),
('J12', 'Bola 8 Billar', 2, 16, 'Ángel Pastor'),
('J13', 'Rubik BLD', 4, 30, 'Ana Pérez'),
('J14', 'Bola 9 Billar', 2, 16, 'Fernando Ruiz'),
('J15', 'Rubik 2x2', 6, 75, 'Carmen Pastor');

-- Comprobamos que se han insertado correctamente
select * from Juegos;

-- Crear la tabla torneo jusgado
create table Torneos_Jugad (
    idTorneo varchar(9) not null,
    idJugador varchar(7) not null
);

-- comprobamos
desc Torneos_Jugad;

-- Aplicamos las primary key
alter table Torneos_Jugad
add primary key (idTorneo, idJugador);´

--  Añadir las fk
alter table Torneos_Jugad
add foreign key (idTorneo) REFERENCES Torneos (idTorneo),
add foreign key (idJugador) references Jugadores (idJugador);

-- Insertamos datos en la tabla Torneos_Jugad
insert into torneos_jugad VALUES
('T005', 'ID06'),
('T005', 'ID21'),
('T010', 'ID01'),
('T010', 'ID06'),
('T010', 'ID09'),
('T010', 'ID11'),
('T010', 'ID12'),
('T013', 'ID03'),
('T013', 'ID06'),
('T017', 'ID01'),
('T017', 'ID02'),
('T017', 'ID05'),
('T017', 'ID10'),
('T017', 'ID20'),
('T026', 'ID01'),
('T026', 'ID05'),
('T027', 'ID02'),
('T027', 'ID06'),
('T028', 'ID03'),
('T028', 'ID07'),
('T029', 'ID04'),
('T029', 'ID08'),
('T030', 'ID09'),
('T030', 'ID10'),
('T031', 'ID11'),
('T031', 'ID12'),
('T032', 'ID13'),
('T032', 'ID14'),
('T033', 'ID15');

-- Comprobamos la insercción
select * FROM torneos_jugad;
