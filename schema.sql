DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products
(
id int primary key auto_increment,
product_name VARCHAR(100),
department_name VARCHAR(100),
price INTEGER (10) NOT NULL,
stock_quantity INTEGER (100) NOT NULL
);

INSERT into Inventory(product_name, department_name, price, stock_quantity)values("shirt", "basic", "10", "50");
INSERT into Inventory(product_name, department_name, price, stock_quantity)values("pants", "basic", "30", "75");
INSERT into Inventory(product_name, department_name, price, stock_quantity)values("hoodie", "basic", "20", "100");
INSERT into Inventory(product_name, department_name, price, stock_quantity)values("romper", "fancy", "25", "4");
INSERT into Inventory(product_name, department_name, price, stock_quantity)values("dress", "fancy", "50", "5");

    SELECT *
    FROM products;


