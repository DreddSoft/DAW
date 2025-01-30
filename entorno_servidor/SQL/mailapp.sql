CREATE TABLE empleados
(
    id INT(5) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    edad INT(3) NOT NULL,
    salario DECIMAL(9,2) NOT NULL,
    oficina VARCHAR(50),
    horasConexion INT(5),
    rango INT(1)
); 

ALTER TABLE empleados
MODIFY COLUMN id INT(5) AUTO_INCREMENT;

ALTER TABLE empleados
ADD COLUMN idDpto INT(3) NOT NULL DEFAULT 0;


DESC Empleados;

-- Inserción de datos
INSERT INTO empleados (nombre, edad, salario, oficina, horasConexion, rango) VALUES
('Juan', 30, 35000.00, 'Madrid', NULL, NULL),   -- 1
('Ana', 25, 29000.00, 'Barcelona', NULL, NULL), -- 2
('Luis', 40, 45000.00, NULL, NULL, 1),          -- 3
('Pedro', 35, 32000.00, 'Sevilla', NULL, NULL), -- 4
('Marta', 28, 28000.00, NULL, NULL, NULL),      -- 5
('Carlos', 38, 50000.00, 'Valencia', NULL, 1),  -- 6
('Laura', 33, 31000.00, 'Bilbao', NULL, NULL),  -- 7
('Miguel', 45, 48000.00, 'Madrid', NULL, NULL), -- 8
('Sofia', 27, 27000.00, NULL, NULL, NULL),      -- 9
('David', 30, 34000.00, 'Barcelona', NULL, NULL),-- 10
('Beatriz', 32, 39000.00, 'Sevilla', NULL, NULL),   -- 11
('Fernando', 38, 46000.00, NULL, NULL, NULL),       -- 12
('Elena', 26, 30000.00, 'Valencia', NULL, NULL),    -- 13
('Raul', 29, 33000.00, NULL, NULL, NULL),           -- 14
('Eva', 31, 37000.00, 'Bilbao', NULL, NULL),        -- 15
('Oscar', 37, 42000.00, 'Madrid', NULL, NULL),      -- 16
('Pablo', 34, 31000.00, 'Valencia', NULL, NULL),    -- 17
('Cristina', 29, 36000.00, 'Sevilla', NULL, NULL),  -- 18
('Juan Carlos', 40, 45000.00, NULL, NULL, NULL),    -- 19
('Antonio', 36, 38000.00, 'Barcelona', NULL, NULL); -- 20

select * from empleados;

update empleados
set idDpto =  8
where id in (17, 18, 19, 20)


-- Tabla departamentos
CREATE TABLE departamentos (
    id INT(3) AUTO_INCREMENT PRIMARY KEY, 
    nombre VARCHAR(50) NOT NULL,         
    activo TINYINT(1) NOT NULL DEFAULT 1 
);

desc departamentos;

INSERT INTO departamentos (nombre, activo) VALUES
('Desarrollo', 1),
('Diseño', 1),
('Marketing', 1),
('Dirección', 1),
('Recursos Humanos', 1),
('Finanzas', 1),
('Soporte Técnico', 1),
('Logística', 1);

SELECT E.id, E.nombre, E.edad, E.salario, E.oficina, E.rango, D.nombre
FROM empleados AS E 
LEFT JOIN departamentos AS D ON D.id = E.idDpto
ORDER BY salario

SELECT id, nombre, edad, salario, oficina, rango, idDpto FROM empleados WHERE id =1;