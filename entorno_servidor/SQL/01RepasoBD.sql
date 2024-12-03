--* Crear la base de datos almacen
create database almacen;

--* Crear la tabla distribuidores
create table distribuidores (
    id integer(3),
    cif varchar(10) not null,
    nombre varchar(20) not null,
    provincia varchar(20) not null,
    pais varchar(20) default "Espana",
    telf varchar(20),
    primary key (id)
);

--* Crear la tabla articulos
create table articulos (
    id varchar(5) primary key,
    id_dist integer(3),
    peso float(6.2) check (peso <= 20),
    precio float(7.2),
    existencias integer,
    foreign key (id_dist) references distribuidores (id) 
);

--* Remember:
-- Para establecer el límite de un valor usamos la expresión check

--  crear la tabla ventas
create table ventas (
    id integer auto_increment primary key,
    fecha date,
    uds_vendidas integer,
    id_art varchar(5) not null,
    id_dist integer(3) not null,
    foreign key ventas_articulo (id_art) references articulos (id),
    foreign key ventas_distribuidor (id_dist) references distribuidores (id)

);

-- ALTER TABLE Distribuidores:
-- Campo provincia admita nulos.
alter table distribuidores
modify provincia varchar(20) null;
-- Añadir un campo llamado categoria VARCHAR(10)
alter table distribuidores
add categoria varchar(10);

-- Articulos:
--   Añadir un campo ``calidad`` de tipo ``VARCHAR(5)``.
--   El campo ``precio`` no puede ser nulo.
alter table articulos
add calidad varchar(5),
modify precio float (7.2) not null;

-- Vamos a hacer un alter table para meter España
alter table distribuidores
modify pais varchar(20) default 'España';

-- Cambiar la primary, primero la tiramos y luego la volvemos a declarar a nivel de tabla
alter table articulos
drop primary key,
add primary key (id, id_dist);

-- Insertar valores en la tabla distribuidores
INSERT INTO distribuidores (id, cif, nombre, provincia, pais, telf) VALUES
(1, 'A12345678', 'Distribuciones ABC', 'Madrid', '912345678', 'Mayorista'),
(2, 'B98765432', 'Proveedores XYZ', 'Barcelona', '933456789', 'Minorista'),
(3, 'C11223344', 'Suministros del Sur', 'Sevilla', '954321987', 'Mayorista'),
(4, 'D55667788', 'Red Comercial', 'Valencia', '961234567', 'Distribuidor autorizado'),
(5, 'E22334455', 'Soluciones Norte', 'Bilbao', '944567890', 'Mayorista'),
(6, 'F99887766', 'Comercial Atlántico', 'Gran Canaria', '928345678', 'Minorista'),
(7, 'G11221122', 'Energía Verde', 'Madrid', '912876543', 'Distribuidor autorizado'),
(8, 'H33445566', 'Productos Globales', 'Zaragoza', '976543210', 'Mayorista'),
(9, 'I99887722', 'Tecnología al Día', 'Alicante', '965432109', 'Distribuidor autorizado'),
(10, 'J22334411', 'Futuro Sostenible', 'Murcia', '968123456', 'Minorista');

-- Insertar en la tabla articulos
insert into articulos (id, id_dist, peso, precio, existencias, calidad) values 
('A001', 1, 5.50, 120.99, 50, 'ALTA'),
('A002', 2, 3.25, 89.45, 120, 'MEDIA'),
('A003', 3, 7.10, 45.00, 300, 'ALTA'),
('A004', 4, 6.20, 150.30, 70, 'ALTA'),
('A005', 5, 4.75, 95.20, 85, 'MEDIA'),
('A006', 6, 2.85, 30.99, 150, 'BAJA'),
('A007', 7, 9.80, 200.00, 10, 'ALTA'),
('A008', 8, 8.40, 140.75, 60, 'MEDIA'),
('A009', 9, 4.00, 65.40, 90, 'BAJA'),
('A010', 10, 1.50, 20.25, 250, 'BAJA'),
('A011', 1, 3.10, 110.00, 55, 'ALTA'),
('A012', 2, 6.50, 85.00, 100, 'MEDIA'),
('A013', 3, 4.90, 60.00, 200, 'ALTA'),
('A014', 4, 5.30, 130.00, 75, 'ALTA'),
('A015', 5, 2.20, 45.50, 130, 'MEDIA'),
('A016', 6, 10.00, 75.99, 60, 'BAJA'),
('A017', 7, 7.60, 110.99, 45, 'ALTA'),
('A018', 8, 3.90, 95.00, 80, 'MEDIA'),
('A019', 9, 5.20, 115.40, 120, 'BAJA'),
('A020', 10, 1.25, 25.10, 200, 'BAJA')  
;

-- El CIF y el nombre del distribuidor “Red Comercial”, ha cambiado: el cif pasa a ser “A457125121” y el nombre es “Comercial Levante”.
-- 1. Sacamos el ID del distribuidor "Red Comercial":
select id from distribuidores where nombre like 'Red Comercial';

-- Modificamos
update distribuidores
set cif = 'A457125121'

-- Cargarme telefonos y Pais
update distribuidores
set pais = 'España'
where id in (select id from distribuidores);

-- cambiar el campo categoria a varchar 20
alter table distribuidores
modify categoria varchar(20);

-- Cambiar los valores pendientes
update distribuidores
set telf = '928345678',
categoria = 'Minorista'
where id = 6;

-- El distribuidor de código 7 ha cambiado de teléfono, pero no se sabe. El campo debe aparecer vacío.
update distribuidores
set telf = null
where id = 7;

-- Insertar el siguiente registro en la tabla Distribuidores:
-- El id es 11, el nombre Distribuciones Sol, y la provincia Madrid.
insert distribuidores (id, cif, nombre, provincia) values 
(11, 'A96501667', 'Distribuciones Sol', 'Madrid');

-- En la tabla Articulos, modificar el contenido del campo calidad de los registros A006 y A016 estableciendo ambos valores a “ALTA”.
update articulos
set calidad = 'ALTA'
where id in ('A006', 'A016');

-- En la tabla Articulos, aumentar el precio de costo en un 5% de aquellos artículos cuya calidad sea ALTA.
update articulos
set precio = precio + (precio * 0.05)
where id in (select id from articulos where calidad = 'ALTA');

-- Mostrar los articulos de calidad ALTA y con unas existencias por debajo de 70.
select * from articulos
where calidad = 'ALTA'
and existencias < 70;

-- Eliminar los distribuidores de Sevilla.
delete from distribuidores
where id in (select id from distribuidores where provincia = 'Sevilla');

-- Eliminar una foreign key
alter table articulos
drop foreign key articulos_ibfk_1;