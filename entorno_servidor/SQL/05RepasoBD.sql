-- 1. Mostrar el DNI, nombre, apellidos y fecha de nacimiento de los jugadores que hayan nacido en el mes de julio.
select dniJugador as DNI,
nombreJug as nombre,
concat(ap1Jug, " ", coalesce(ap2Jug, "")) as apellidos,
fechaN as fechaNacimiento
from jugadores
where MONTH(fechaN) = 7

