-- 1 Obtener el promedio del número de habitantes por provincia, ajustando el número a un decimal y ordenados de mayor a menor según el promedio obtenido. La cabecera de la consulta debe ser la siguiente:
SELECT provincia, ROUND(AVG(numHab), 1) as promedio  FROM ciudades
GROUP BY provincia
ORDER BY promedio DESC;


-- 2. Obtener el nombre de los juegos cuya inscripción sea superior a 10, debe aparecer en la consulta el año de celebración y los registros deben estar ordenados por año apareciendo primero los más actuales.
SELECT J.nombreJuego, T.inscripcion, T.año FROM juegos as J
LEFT JOIN torneos as T on T.idJuego = J.idJuego
WHERE T.inscripcion > 10
ORDER BY T.año DESC;


-- 3. Obtener los campos IdTorneo, año, ciudad y nombre del juego donde la delegada ha sido “Carmen Pastor”
SELECT T.idTorneo, T.año, C.nombreCiudad, J.nombreJuego, J.delegado from Torneos as T
LEFT JOIN Ciudades as C on C.idCiudad = T.idCiudad
left join Juegos as J on J.idJuego = T.idJuego
where J.delegado = 'Carmen Pastor';

--4. Obtener el nombre del juego, el delegado, nombre de la ciudad y el año de aquellos juegos que se han realizado en la provincia de Alicante antes del año 2015
SELECT J.nombreJuego, J.delegado, C.nombreCiudad, T.año FROM Juegos as J
left join Torneos as T on T.idJuego = J.idJuego
left join Ciudades as C on C.idCiudad = T.idCiudad
where C.Provincia = 'Alicante'
and T.año < 2015;

--5. Obtener los nombres y primer apellido de los jugadores, el año del torneo y el nombre de los juegos en los que han participado.
select JG.nombreJug as nombreJugador
,JG.ap1Jug as apellidoJugador
,T.año as añoTorneo
,J.nombreJuego
from Jugadores as JG
inner join Torneos_Jugad as TJ on TJ.idJugador = JG.idJugador
inner join Torneos as T on T.idTorneo = TJ.idTorneo
inner join Juegos as J on J.idJuego = T.idJuego;

-- 6. Seleccionar todos los datos de los jugadores que participaron en los torneos de “Rubik OH” en el año 2017. Debe aparecer el nombre del juego (“Rubik OH”) y el año (2017).
select * from Jugadores as JG
left join Torneos_Jugad as TJ on TJ.idJugador = JG.idJugador
left join Torneos as T on T.idTorneo = TJ.idTorneo
left join Juegos as J on J.idJuego = T.idJuego
where J.nombreJuego = 'Rubik OH'
and T.año = 2017;


-- 7. Obtener una tabla que muestre el promedio de los días de cada juego, mostrando además el código y el nombre del juego.
select J.nombreJuego, round(avg(T.numDias), 2) from Torneos as T
right join Juegos as J on J.idJuego = T.idJuego
group by J.nombreJuego;


-- 8. Mostrar el número de participantes de cada torneo (llamar a la columna “noparticipantes”), ciudad donde se celebró, incluyendo todos los campeonatos en los que no hubo ningún participante.
select T.idTorneo, 
count(JG.*) as noparticipantes, 
C.nombreCiudad 
from Jugadores as JG
left join Torneos_Jugad as TJ on TJ.idJugador = JG.idJugador
right join Torneos as T on T.idTorneo = TJ.idTorneo
left join Ciudades as C on C.idCiudad = T.idCiudad
group by  noparticipantes;

-- 9. Mostrar el DNI, nombre y primer apellido (concatenados) y teléfono de los jugadores que no han participado en competición alguna.

-- 10. Mostrar la provincia y ciudad, donde no se ha celebrado ninguna competición.