DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
("24 pack water", "Consumables", 3.99, 48),
("Chicken Noodle Soup", "Consumables", 2.99, 12),
("2 Pack Paper Towels", "Household", 3.99, 24),
("Laundry Detergent 92 oz", "Household", 3.99, 12),
("Shampoo", "Hair Care", 5.99, 12),
("Conditioner", "Hair Care", 5.99, 12),
("Foundation", "Cosmetics", 7.99, 4),
("Lipstick", "Cosmetics", 4.99, 6),
("Aceteminophen 500mg 24 ct", "Over The Counter", 4.99, 8),
("Famotidine 20mg 24 ct", "Over The Counter", 9.99, 6)
;