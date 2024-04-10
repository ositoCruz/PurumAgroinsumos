USE PurumAgroInsumos;
INSERT INTO Categorias (categoria_descripcion) VALUES 
('Insecticida'),
('Herbicida'),
('Pesticida'),
('Solucion');

INSERT INTO Rol (rol_descripcion) VALUES 
('User'),
('Admin');

INSERT INTO Users (user_fullName, username, user_email, password, user_imagen, createdAt, rol_id) VALUES
('Matias Perez', 'matias123', 'mjj_pc@hotmail.com', '$2b$10$jkNdgx6/0XZs1uNOW5PTE.GwGsU/OrIYixDIEXBHjDPpz.q7G3p8W','profile.png','CURRENT_TIMESTAMP()',2),
('Pedro Zarza', 'pedro123', 'pedro_zarza@hotmail.com', '$2b$10$jkNdgx6/0XZs1uNOW5PTE.GwGsU/OrIYixDIEXBHjDPpz.q7G3p8W','profile.png','CURRENT_TIMESTAMP()',1),
('Gina', 'gina123', 'gina_santa@hotmail.com', '$2b$10$jkNdgx6/0XZs1uNOW5PTE.GwGsU/OrIYixDIEXBHjDPpz.q7G3p8W','profile.png','CURRENT_TIMESTAMP()',1);


INSERT INTO Productos 
(producto_descripcion, producto_stock, producto_precio, producto_expirationDate, producto_detalle, producto_imagen, createdAt, categoria_id) VALUES 
('Herbicida Biombo', 20, 2000.99, '2029-12-03', 'Herbicida biombo es un herbicida sistémico no selectivo', 'biombo1.png', CURRENT_TIMESTAMP(), 2),
('Herbicida Poderoso', 25, 5000.00, '2029-01-01', 'Herbicida Atila de Afrasa es un herbicida sistémico no selectivo.', 'fungicida.jpg', CURRENT_TIMESTAMP(), 2),
('Insecticida Guardián', 10, 3000.00, '2029-01-01', 'Sustancia básica insecticida, acaricida y fungicida.', 'insecticida1.jpg', CURRENT_TIMESTAMP(), 1),
('Solución Potente', 10, 1500.00, '2029-09-01', 'Solución nutricional con alto contenido en Potasio.', 'producto1.jpg', CURRENT_TIMESTAMP(), 4),
('Insecticida Biombo', 25, 2500.00, '2029-01-01', 'Insecticida biombo es un insecticida, acaricida y fungicida de alta calidad.', 'biombo2.png', CURRENT_TIMESTAMP(), 3),
('Pesticida Poderoso', 25, 2500.00, '2029-01-01', 'Pesticida biombo es un pesticida sistémico no selectivo.', 'insecticida.jpg', CURRENT_TIMESTAMP(), 3);


/*UPDATE Users
SET rol_id = 2
WHERE username = 'matias123';

SET SQL_SAFE_UPDATES = 0;
UPDATE Users SET user_imagen = 'profile.png';
UPDATE Productos SET producto_imagen = 'productImage-1703131231287-176065131.jpg';*/