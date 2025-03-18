-- SELECT first_name, last_name 
-- FROM customers 
-- ORDER BY first_name ASC 
-- LIMIT 2;
-- SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname = 'public';
-- SELECT table_name, table_schema 
-- FROM information_schema.tables 
-- WHERE table_name = 'customers';
-- CREATE TABLE customers (
--     id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50),
--     last_name VARCHAR(50),
--     email VARCHAR(100)
-- );
-- INSERT INTO customers (first_name, last_name, email) VALUES
-- ('Scott', 'Scott', 'scott@email.com'),
-- ('Melanie', 'Johnson', 'melanie@email.com'),
-- ('Greg', 'Jones', 'greg@email.com');
-- SELECT * FROM customers;
-- SELECT first_name, last_name 
-- FROM customers 
-- ORDER BY first_name ASC 
-- LIMIT 2;
-- DELETE FROM purchases 
-- WHERE customer_id = (
--     SELECT id FROM customers 
--     WHERE first_name = 'Scott' AND last_name = 'Scott'
-- );
-- SELECT * FROM customers 
-- WHERE first_name = 'Scott' AND last_name = 'Scott';
-- partie 2
-- SELECT purchases.id, customers.first_name, customers.last_name, purchases.quantity_purchased
-- FROM purchases
-- LEFT JOIN customers ON purchases.customer_id = customers.id;
-- SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname = 'public';
-- SELECT table_name, table_schema 
-- FROM information_schema.tables 
-- WHERE table_name = 'purchases';
-- CREATE TABLE purchases (
--     id SERIAL PRIMARY KEY,
--     customer_id INTEGER REFERENCES customers(id),
--     item_id INTEGER REFERENCES items(id),
--     quantity_purchased INTEGER
);
-- INSERT INTO purchases (customer_id, item_id, quantity_purchased) VALUES
-- (3, 3, 1),  
-- (5, 2, 10), 
-- (1, 1, 2); 


-- SELECT purchases.id, customers.first_name, customers.last_name, purchases.quantity_purchased
-- FROM purchases
-- LEFT JOIN customers ON purchases.customer_id = customers.id;






