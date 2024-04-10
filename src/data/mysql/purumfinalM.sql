CREATE DATABASE PurumAgroInsumos;
USE PurumAgroInsumos;
CREATE TABLE IF NOT EXISTS `PurumAgroInsumos`.`Categorias` (
  `categoria_id` INT NOT NULL AUTO_INCREMENT,
  `categoria_descripcion` VARCHAR(150) NULL,
  PRIMARY KEY (`categoria_id`));
  
  CREATE TABLE IF NOT EXISTS `PurumAgroInsumos`.`Rol` (
  `rol_id` INT NOT NULL AUTO_INCREMENT,
  `rol_descripcion` VARCHAR(150) NULL,
  PRIMARY KEY (`rol_id`));
  
CREATE TABLE IF NOT EXISTS `PurumAgroInsumos`.`Productos` (
  `producto_id` INT NOT NULL AUTO_INCREMENT,
  `producto_descripcion` VARCHAR(150) NOT NULL,
  `producto_stock` INT NOT NULL,
  `producto_precio` FLOAT NOT NULL,
  `producto_expirationDate` DATE NULL,
  `producto_detalle` VARCHAR(200) NULL,
  `producto_imagen` CHAR(250) NULL,
  `createdAt` DATETIME DEFAULT NOW(),
  `categoria_id` INT NOT NULL,
  PRIMARY KEY (`producto_id`),
  FOREIGN KEY (`categoria_id`) REFERENCES `PurumAgroInsumos`.`Categorias` (`categoria_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS `PurumAgroInsumos`.`OrdersStatus` (
  `orderStatus_id` INT NOT NULL AUTO_INCREMENT,
  `orderStatus_descripcion` VARCHAR(50) NULL,
  PRIMARY KEY (`orderStatus_id`));
  
CREATE TABLE IF NOT EXISTS `PurumAgroInsumos`.`Users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_fullName` VARCHAR(150) NULL,
  `username` VARCHAR(50) NOT NULL,
  `user_email` VARCHAR(150) NULL,
  `password` VARCHAR(250) NULL,
  `user_imagen` CHAR(250) NULL,
  `createdAt` DATETIME DEFAULT NOW(),
  `rol_id` INT NOT NULL,
  PRIMARY KEY (`user_id`),
  FOREIGN KEY (`rol_id`) REFERENCES `PurumAgroInsumos`.`Rol` (`rol_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
  
CREATE TABLE IF NOT EXISTS `PurumAgroInsumos`.`Orders` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `order_address` VARCHAR(150) NULL,
  `order_total` FLOAT NULL,
  `user_id` INT NOT NULL,
  `orderStatus_id` INT NOT NULL,
  PRIMARY KEY (`order_id`),
FOREIGN KEY (`user_id`) REFERENCES `PurumAgroInsumos`.`Users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  FOREIGN KEY (`orderStatus_id`) REFERENCES `PurumAgroInsumos`.`OrdersStatus` (`orderStatus_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
  
CREATE TABLE IF NOT EXISTS `PurumAgroInsumos`.`OrdersItems` (
  `producto_id` INT NOT NULL,
  `order_id` INT NOT NULL,
  `orderItem_id` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NOT NULL,
  `subtotal` FLOAT NOT NULL,
 PRIMARY KEY (`orderItem_id`),
 FOREIGN KEY (`producto_id`) REFERENCES `PurumAgroInsumos`.`Productos` (`producto_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
 FOREIGN KEY (`order_id`) REFERENCES `PurumAgroInsumos`.`Orders` (`order_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);