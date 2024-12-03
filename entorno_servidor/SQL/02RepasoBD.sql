-- Modificar el tamaño del campo Categoría de la tabla DISTRIBUIDORES, que será de 30.
alter table distribuidores
modify categoria varchar(30);

-- También (comentado por Noemí) cambiar el nombre a varchar(30).
alter table distribuidores
modify nombre varchar(30) not null;

-- Modificar el contenido del campo Categoría, de forma que en los registros que empiezan por “D”, se actualicen a “Distribuidor autorizado”.
update distribuidores 
set categoria = 'Distribuidor autorizado'
where id in (select id from distribuidores where nombre like 'D%');

-- Insertar nuevos datos en las tablas Articulos y Distribuidores:
-- ▪ En artículos:
-- ('A021', 11, 5.50, 120.99, 50, 'ALTA'), -- Referencia a distribuidor 11 (Global Supplies, España)
-- ('A022', 12, 3.25, 89.45, 120, 'MEDIA'), -- Referencia a distribuidor 12 (Logística Internacional, España)
-- ('A023', 13, 7.10, 45.00, 300, 'ALTA'), -- Referencia a distribuidor 13 (Distribuciones Europa, Francia)
-- ('A024', 14, 6.20, 150.30, 70, 'ALTA'), -- Referencia a distribuidor 14 (Comercio del Mundo, Francia)
-- ('A025', 15, 4.75, 95.20, 85, 'MEDIA'); -- Referencia a distribuidor 15 (Soluciones Globales, Italia)

insert into articulos (id, id_dist, peso, precio, existencias, calidad) values
('A021', 11, 5.50, 120.99, 50, 'ALTA'),
('A022', 12, 3.25, 89.45, 120, 'MEDIA'),
('A023', 13, 7.10, 45.00, 300, 'ALTA'),
('A024', 14, 6.20, 150.30, 70, 'ALTA'),
('A025', 15, 4.75, 95.20, 85, 'MEDIA');

-- En distribuidores:
-- (12, 'L87654321', 'Logística Internacional', 'Valencia', 'España', '222345678', 'Minorista'),
-- (13, 'M11223344', 'Distribuciones Europa', 'París', 'Francia', '143567890', 'Distribuidor autorizado'),
-- (14, 'N55667788', 'Comercio del Mundo', 'Marsella', 'Francia', '144567890', 'Mayorista'),
-- (15, 'O22334455', 'Soluciones Globales', 'Roma', 'Italia', '213456789', 'Mayorista'),
-- (16, 'P99887766', 'Comercial Sur', 'Nápoles', 'Italia', '223456789', 'Distribuidor autorizado'),
-- (17, 'Q11221122', 'Proveedores Internacionales', 'Lisboa', 'Portugal', '234567890', 'Minorista'),
-- (18, 'R33445566', 'Tecnología Verde', 'Hamburgo', 'Alemania', '245678901', 'Distribuidor autorizado');

insert into distribuidores (id, cif, nombre, provincia, pais, telf, categoria) values
(12, 'L87654321', 'Logística Internacional', 'Valencia', 'España', '222345678', 'Minorista'), 
(13, 'M11223344', 'Distribuciones Europa', 'París', 'Francia', '143567890', 'Distribuidor autorizado'),
(14, 'N55667788', 'Comercio del Mundo', 'Marsella', 'Francia', '144567890', 'Mayorista'),
(15, 'O22334455', 'Soluciones Globales', 'Roma', 'Italia', '213456789', 'Mayorista'),
(16, 'P99887766', 'Comercial Sur', 'Nápoles', 'Italia', '223456789', 'Distribuidor autorizado'),
(17, 'Q11221122', 'Proveedores Internacionales', 'Lisboa', 'Portugal', '234567890', 'Minorista'),
(18, 'R33445566', 'Tecnología Verde', 'Hamburgo', 'Alemania', '245678901', 'Distribuidor autorizado');

-- 1. Obtener todos los distruidores de España
select * from distribuidores
where pais = 'España';

-- 2. Obtener los artículos cuyo precio de costo sea superior a 80,50 e inferior a 150,50
select * from articulos
where precio > 80.50 and precio < 150.50
order by precio;

-- 3. Contar la cantidad de artículos disponibles por cada distribuidor:
select D.id, D.nombre, count(A.id) as articulos from articulos as A
inner join distribuidores as D on D.id = A.id_dist
group by D.id;

-- 4. Listar los artículos que tienen existencias mayores a 100 y pertenecen a distribuidores fuera de España.
select A.*, D.id, D.nombre, D.pais from articulos as A
left join distribuidores as D on D.id = A.id_dist
where A.existencias > 100
and D.pais != 'España';

--* Actualización 03/12/2024
-- Realiza las siguientes consultas:
-- 1. Obtener los distribuidores (id_dist) que tienen más o de 2 artículos de ALTA calidad.
select D.*, A.calidad from distribuidores as D
left join articulos as A on D.id = A.id_dist
where A.calidad = 'ALTA'
group by D.id
having count(A.id) >= 2;

-- 2. Obtener los distribuidores (id_dist, nombre_dist) un total de existencias superior a 300.
select D.id, D.nombre from distribuidores as D
left join articulos as A on A.id_dist = D.id
group by D.id
having sum(A.existencias) >= 300;

-- 3. Obtener los distribuidores (id_dist, nombre_dist, categoria) cuyo precio promedio de artículos de calidad 'BAJA' sea superior a 50.
select D.id, D.nombre, D.categoria as mediaPrecio from distribuidores as D
left join articulos as A on A.id_dist = D.id
where A.calidad = 'BAJA'
group by D.id
having avg(A.precio) > 50;

-- 4. Obtener los distribuidores (id_dist) cuyo valor total de artículos (existencias * precio) sea superior a 5000 y cuyas existencias sean menores a 50.
select D.id, sum(A.existencias * A.precio) as valorTotal, sum(A.existencias) as totalExistencias from distribuidores as D
left join articulos as A on A.id_dist = D.id
group by D.id
having valorTotal > 5000 and totalExistencias < 50;
-- resultado: empty set

-- 5.1 Mostrar las existencias de los artículos pertenecientes a distribuidores de la provincia de Madrid (id_dist, nombre_dist, id_art, existencias).
select D.id as id_dist, D.nombre as nombre_dist, A.id as id_art, A.existencias from articulos as A
left join distribuidores as D on D.id = A.id_dist
where D.provincia = 'Madrid';

-- 5.2 A continuación, incrementar en 10 unidades las existencias de dichos artículos los artículos pertenecientes a los distribuidores cuya provincia sea Madrid.
update articulos
set existencias = existencias + 10
where id_dist in (select id from distribuidores
where provincia = 'Madrid');

-- 5.3 Volver a mostrar la consulta inicial, comprobando el incremento.
select D.id as id_dist, D.nombre as nombre_dist, A.id as id_art, A.existencias from articulos as A
left join distribuidores as D on D.id = A.id_dist
where D.provincia = 'Madrid';

-- 6. Contar cuántos distribuidores existen por cada categoría.
select count(id) as distribuidores, categoria from distribuidores
group by categoria;

-- 7. Mostrar el nombre de los distribuidores y el total de existencias de sus artículos (sólo distribuidores en España);
select D.nombre, sum(A.existencias) from distribuidores as D
inner join articulos as A on A.id_dist = D.id
where pais = 'España'
group by D.id;

-- 8. Contar cuántos artículos existen de cada calidad.
select count(id), calidad from articulos
group by calidad;

-- 9. Obtener el total de existencias de los artículos con calidad “MEDIA”
select calidad, sum(existencias) as totalExistencias from articulos
where calidad = 'MEDIA'
group by calidad;

-- 10. Obtener el nombre del distribuidor y la calidad de los artículos con un precio de costo inferior a 75
select D.nombre from distribuidores as D
inner join articulos as A on A.id_dist = D.id
where A.precio < 75
group by D.nombre;