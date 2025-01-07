# SQL: división en sub-lenguajes
## DDL: Data Definition Language.
> Lenguaje de Definición de Datos responsable de definir la forma en que se estructuran los datos en la BD. En SQL: ``CREATE TABLE, ALTER TABLE, DROP TABLE, CREATE DATABASE``.



## DML: Data Manipulation Language.
> Lenguaje de Manipulación de Datos es el responsable de añadir, editar o borrar datos de una base de datos. Sus sentencias principales son: ``INSERT | UPDATE | DELETE``.

### INSERT
#### Insercción con un select de múltiples valores
Cuando queremos hacer una insercción, pero sacar valores múltiples de un select, y en vez de ir una a una la insercción, queremos que recorra todo el select introducciendo los valores. Ver siguiente ejemplo: 
En este caso tenenos una consulta:
- ``SELECT ...`` que hace de filtro de los "Productos" que cumplan los criterios.
- ``UNION ALL`` combina los resultados de ambas consultas, generando un conjunto de valores fijos para todos los campos excepto el Producto.
- ``INSERT INTO`` Inserta los resultados de las consultas generadas directamente en la tabla. 

Al realizar esta combinación de SELECT y INSERT INTO, vamos a generar una insercción (en este ejemplo 2) por cada instancia de la consulta SELECT.

**En el caso del ejemplo:**

Resultado esperado:
Por cada Id que cumpla la condición, se crearán dos registros:

Uno con ZonaFolleto = 48, PrecioModelo = NULL, Precio = 500.
Otro con ZonaFolleto = 38, PrecioModelo = NULL, Precio = 530.

```SQL
INSERT INTO ProductosPrecios (Producto, ZonaFolleto, PrecioModelo, Precio)
SELECT Id, 48, NULL, 500 FROM Productos WHERE Id NOT IN (131653, 134783, 134784) AND Modelo = 6999
UNION ALL
SELECT Id, 38, NULL, 530 FROM Productos WHERE Id NOT IN (131653, 134783, 134784) AND Modelo = 6999;
```


## DQL: Data Query Language.
> Lenguaje de Consulta de Datos responsable de leer datos de la BD. En SQL, corresponde a ``SELECT``.

### Casos de consulta por comparación con textos VARCHAR:
#### Obtener datos cuando se cumple que lleven una palabra específica:
```SQL
-- En el ejemplo, tenemos que obtener el nombre de los delegados que correspondan a alguna categoríade  Billar (hay varias):
-- Forma para gestores CASE SENSITIVE:
SELECT delegado AS nombreDelegad FROM juegos
WHERE LOWER(nombreJuego) LIKE '%billar%';

-- Forma para gestores CASE INSENSITIVE:
SELECT delegado AS nombreDelegado FROM juegos
WHERE nombreJuego LIKE '%billar%';
```

### Agrupaciones

#### Con condición
```SQL
-- Ejemplo donde queremos agrupar provincia, ciudad y número de torneos, donde no se ha celebrado ningún torneo:
SELECT  
C.provincia,
C.nombreCiudad, 
COUNT(T.idTorneo) -- que cuente cada id de Torneo
FROM Ciudades AS C
LEFT JOIN Torneos AS T ON T.idCiudad = C.idCiudad
GROUP BY C.nombreCiudad, C.provincia -- Agrupación
HAVING count(T.idTorneo) = 0; -- Condición


### Algunas funciones propias de SQL que sirven en las consultas:
```SQL
CONCAT(campo); --
COALESCE(campo, valor); --


--* De fechas:
YEAR(fechaTipoDate); --
MONTH(); --

```



## DCL: Data Control Language.
> Lenguaje de Control de Datos responsable de las tareas administrativas de control de la propia base de datos, especialmente la concesión y revocación de permisos para los usuarios de la BD. En SQL: ``GRANT, REVOKE, DENY``.



