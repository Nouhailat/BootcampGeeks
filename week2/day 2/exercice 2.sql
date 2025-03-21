-- CREATE TABLE customer (
--     customer_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL,
--     email VARCHAR(100),
--     address_id INT NOT NULL,
--     active BOOLEAN DEFAULT TRUE,
--     create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
-- CREATE TABLE address (
--     address_id SERIAL PRIMARY KEY,
--     address VARCHAR(100) NOT NULL,
--     district VARCHAR(50) NOT NULL,
--     city VARCHAR(50) NOT NULL,
--     postal_code VARCHAR(10),
--     phone VARCHAR(20) NOT NULL
-- );
-- CREATE TABLE film (
--     film_id SERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     description TEXT,
--     release_year INT,
--     rental_rate DECIMAL(4,2) NOT NULL
-- );
-- CREATE TABLE rental (
--     rental_id SERIAL PRIMARY KEY,
--     rental_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     customer_id INT NOT NULL,
--     film_id INT NOT NULL,
--     return_date TIMESTAMP,
--     FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
--     FOREIGN KEY (film_id) REFERENCES film(film_id)
-- );
-- INSERT INTO customer (first_name, last_name, email, address_id)
-- VALUES 
-- ('Zakaria', 'Rebibi', 'zakaria@example.com', 1),
-- ('Nouhaila', 'Touati', 'nouhaila@example.com', 2);

-- INSERT INTO address (address, district, city, postal_code, phone)
-- VALUES 
-- ('123 Main St', 'Texas', 'Houston', '77001', '555-1234'),
-- ('456 Side St', 'California', 'Los Angeles', '90001', '555-5678');
-- INSERT INTO film (title, description, release_year, rental_rate)
-- VALUES 
-- ('Inception', 'A mind-bending thriller', 2010, 4.99),
-- ('Interstellar', 'Space exploration adventure', 2014, 3.99);
-- INSERT INTO rental (customer_id, film_id, return_date)
-- VALUES 
-- (1, 1, '2024-03-25'),
-- (2, 2, '2024-03-27');
SELECT * FROM customer;
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM customer;
SELECT first_name || ' ' || last_name AS full_name FROM customer;
SELECT DISTINCT create_date FROM customer;
SELECT * FROM customer ORDER BY first_name DESC;
SELECT film_id, title, description, release_year, rental_rate 
FROM film 
ORDER BY rental_rate ASC;
SELECT a.address, a.phone 
FROM address a
WHERE a.district = 'Texas';
SELECT * FROM film WHERE film_id IN (15, 150);
SELECT film_id, title, description, rental_rate 
FROM film 
WHERE title = 'Inception';
SELECT film_id, title, description,  rental_rate 
FROM film 
WHERE title LIKE 'In%';
SELECT film_id, title, rental_rate 
FROM film 
ORDER BY rental_rate ASC 
LIMIT 10;
SELECT film_id, title, rental_rate 
FROM film 
ORDER BY rental_rate ASC 
OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY;




