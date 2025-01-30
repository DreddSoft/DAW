-- 1. Mostrar el DNI, nombre, apellidos y fecha de nacimiento de los jugadores que hayan nacido en el mes de julio.
select dniJugador as DNI,
nombreJug as nombre,
concat(ap1Jug, " ", coalesce(ap2Jug, "")) as apellidos,
fechaN as fechaNacimiento
from jugadores
where MONTH(fechaN) = 7;

-- 2. Agrupar por año de nacimiento y contar el número de jugadores nacidos cada año, ordenados de forma ascendente por año de nacimiento. 
SELECT 
YEAR(fechaN) as fechaNacimiento,
COUNT(idJugador) as numeroJugadores
FROM jugadores
GROUP BY fechaNacimiento;


-- 3. En la tabla Campeonatos, mostrar el Id del campeonato, Inscripción y una columna PRECIO, obtenida evaluando el valor de Inscripción según las siguientes condiciones:
-- "Buen precio" if inscripción < 4.5
-- "Precio normal" if inscripcion <= 6.5
-- "Precio elevado" if inscripcion > 6.5
SELECT idTorneo,
inscripcion,
CASE 
    WHEN inscripcion < 4.5 THEN 'Buen precio'
    WHEN inscripcion <= 6.5 THEN 'Precio normal'
    ELSE 'Precio elevado'
END AS PRECIO
FROM torneos;

-- 4. Obtener el nombre de los delegados que correspondan a alguna categoría de Billar.
-- Una forma acostumbrado a SQL Server
SELECT delegado AS nombreDelegad FROM juegos
WHERE LOWER(nombreJuego) LIKE '%billar%';

-- Pero MariaDB es case insensitive
SELECT delegado AS nombreDelegado FROM juegos
WHERE nombreJuego LIKE '%billar%';

-- 5. De la tabla Jugadores, mostrar el identificativo del jugador, su nombre y primer apellido (concatenado en una columna: ‘Nombre y Apellido’, el teléfono, la fecha de nacimiento y una columna llamad ‘Edad’, en la que aparezca la edad de cada uno de los jugadores: edad por año natural, es decir, sin tener en cuenta el mes ni el día: usar la función YEAR y CURRENT_DATE.
SELECT idJugador,
CONCAT(nombreJug, " ", ap1Jug, " ", COALESCE(ap2Jug, "")) AS datosJugador,
telfJug,
fechaN as fechaNacimiento,
YEAR(CURRENT_DATE) - YEAR(fechaN) AS edad
FROM jugadores;

-- 6. Calcular la edad de los jugadores de la forma solicitada en el apartado 5, es decir, el identificativo del jugador, nombre y primer apellido (concatenado en una columna: 'Nombre y Apellido'), el teléfono, la fecha de nacimiento y una columna llamada 'Edad', en la que aparezca la edad de cada uno de los jugadores, pero considerando para el cálculo, el año, el més y el día.

SELECT 
idJugador,
CONCAT(nombreJug, " ", ap1Jug, " ", COALESCE(ap2Jug, "")) AS "Nombre y Apellido",
telfJug as teléfono,
DATE_FORMAT(fechaN, '%d/%m/%Y') as fechaNacimiento,
CASE 
    WHEN DATE_FORMAT(CURRENT_DATE(), '%j') > DATE_FORMAT(fechaN, '%j') THEN YEAR(CURRENT_DATE()) - YEAR(fechaN)
    ELSE YEAR(CURRENT_DATE()) - YEAR(fechaN) - 1
END AS Edad
FROM jugadores;

-- 7. Crear una vista con el nombre y edad de los jugadores en base a la consulta anterior.
CREATE VIEW datosBaseJugador AS 
SELECT 
idJugador,
CONCAT(nombreJug, " ", ap1Jug, " ", COALESCE(ap2Jug, "")) AS "Nombre y Apellido",
telfJug as telefono,
DATE_FORMAT(fechaN, '%d/%m/%Y') as fechaNacimiento,
CASE 
    WHEN DATE_FORMAT(CURRENT_DATE(), '%j') > DATE_FORMAT(fechaN, '%j') THEN YEAR(CURRENT_DATE()) - YEAR(fechaN)
    ELSE YEAR(CURRENT_DATE()) - YEAR(fechaN) - 1
END AS Edad
FROM jugadores;

-- Consultar la vista
SELECT * FROM datosBaseJugador;

-- 8. Obtener un listado con el Nombre, Ap1, Teléfono y edad, de los jugadores con edad comprendida entre 23 y 30 años.
SELECT "Nombre y Apellido", teléfono, Edad FROM datosbasejugador
WHERE Edad BETWEEN 23 AND 30
ORDER BY Edad;

-- 9. Cambiar la palabra ‘Poker’ por ‘Póquer’ en todos los registros que aparezca. Usar la función REPLACE.
SELECT * FROM juegos;

UPDATE juegos
SET nombreJuego = REPLACE(nombreJuego, "Poker", "Póquer")
WHERE LOWER(nombreJuego) like '%poker%';

SELECT * FROM juegos;

