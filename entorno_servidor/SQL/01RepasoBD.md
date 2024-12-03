# EJERCICIO DE REPASO BASE DE DATOS
## Utilizar la consola SQL del sistema o la consola SQL de PHPMYADMIN para realizar el ejercicio.

#### 1. Crea una base de datos llamada ALMACEN:

```SQL
--* Crear la base de datos almacen
create database almacen;
```

#### 2. TABLA DISTRIBUIDORES, con los campos y restricciones siguientes:

<table>
    <tr>
        <th colspan="3"><b>DISTRIBUIDORES</b></th>
    </tr>
    <tr>
        <th>Campos</th>
        <th>Tipo de dato</th>
        <th>Restriccion</th>
    </tr>
    <tr>
        <td>id</td>
        <td>INGEGER(3)</td>
        <td>Clave primaria</td>
    </tr>
    <tr>
        <td>cif</td>
        <td>VARCHAR(10)</td>
        <td>no nulo</td>
    </tr>
    <tr>
        <td>nombre</td>
        <td>VARCHAR(20)</td>
        <td>no nulo</td>
    </tr>
    <tr>
        <td>provincia</td>
        <td>VARCHAR(20)</td>
        <td>no nulo</td>
    </tr>
    <tr>
        <td>pais</td>
        <td>VARCHAR(20)</td>
        <td>Por defecto: España</td>
    </tr>
    <tr>
        <td>telf</td>
        <td>VARCHAR(20)</td>
        <td></td>
    </tr>
</table>

``` SQL
-- Crear la tabla distribuidores
create table distribuidores (
    id integer(3),
    cif varchar(10) not null,
    nombre varchar(20) not null,
    provincia varchar(20) not null,
    pais varchar(20) default "Espana",
    telf varchar(20),
    primary key (id)
);
```

<table>
    <tr>
        <th colspan="3"><b>ARTICULOS</b></th>
    </tr>
    <tr>
        <th>Campos</th>
        <th>Tipo de dato</th>
        <th>Restriccion</th>
    </tr>
    <tr>
        <td>id</td>
        <td>VARCHAR(5)</td>
        <td>Clave primaria</td>
    </tr>
    <tr>
        <td>id_dist</td>
        <td>INTEGER(3)</td>
        <td>Clave Foránea</td>
    </tr>
    <tr>
        <td>peso</td>
        <td>FLOAT(6.2)</td>
        <td>No puede ser superior a 20</td>
    </tr>
    <tr>
        <td>precio_costo</td>
        <td>FLOAT(7.2)</td>
        <td></td>
    </tr>
    <tr>
        <td>existencias</td>
        <td>INTEGER</td>
        <td></td>
    </tr>
</table>

``` SQL
-- Crear la tabla articulos
create table articulos (
    id varchar(5) primary key,
    id_dist integer(3),
    peso float(6.2) check (peso <= 20),
    precio float(7.2),
    existencias integer,
    foreign key (id_dist) references distribuidores (id) 
);
```
<table>
    <tr>
        <th colspan="3"><b>VENTAS</b></th>
    </tr>
    <tr>
        <th>Campos</th>
        <th>Tipo de dato</th>
        <th>Restriccion</th>
    </tr>
    <tr>
        <td>id</td>
        <td>INTEGER</td>
        <td>Clave primaria, Autoincrementable</td>
    </tr>
    <tr>
        <td>fecha</td>
        <td>DATE</td>
        <td></td>
    </tr>
    <tr>
        <td>uds_vendidas</td>
        <td>INTEGER</td>
        <td></td>
    </tr>
    <tr>
        <td>id_art</td>
        <td>VARCHAR(5)</td>
        <td>Clave foránea</td>
    </tr>
    <tr>
        <td>id_dist</td>
        <td>INTEGER(3)</td>
        <td>Clave foránea</td>
    </tr>
</table>

``` SQL
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
```

#### 3. Utiliza la sentencia DESC para ver la estructura de cada tabla.
![DESC tabla ventas](image.png)

![DESC tabla distribuidores](image-1.png)

![DESC tabla articulos](image-2.png)

#### 4. Utilizar la sentencia SHOW CREATE TABLE para ver el nombre asignado a la restricción de claves foráneas.

![show create table articulos](image-3.png)

![show create table distribuidores](image-4.png)

![show create table ventas](image-5.png)

#### 5. Utilizar ``ALTER TABLE`` para modificar la estructura de las siguientes tablas:
- Distribuidores:
  - La provincia puede ser un campo que admita nulos.
  - Añadir un campo llamado ``categoria`` de tipo ``VARCHAR(10)``.
```SQL
  -- Campo provincia admita nulos.
alter table distribuidores
modify provincia varchar(20) null;
-- Añadir un campo llamado categoria VARCHAR(10)
alter table distribuidores
add categoria varchar(10);
```
- Articulos:
  - Añadir un campo ``calidad`` de tipo ``VARCHAR(5)``.
  - El campo ``precio`` no puede ser nulo.

```SQL
--   Añadir un campo ``calidad`` de tipo ``VARCHAR(5)``.
--   El campo ``precio`` no puede ser nulo.
alter table articulos
add calidad varchar(5),
modify precio float (7.2) not null;
```

> **Autor:** Andres Bonilla