# SQL
## BASICO.

## MEDIO.

## AVANZADO.

### INSERCCIONES
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