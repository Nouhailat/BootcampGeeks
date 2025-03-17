-- CREATE TABLE film (
--     film_id SERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     rating VARCHAR(10),
--     length INTEGER,
--     rental_rate DECIMAL(4,2)
-- );
-- INSERT INTO film (title, rating, length, rental_rate) VALUES
-- ('Toy Story', 'G', 81, 2.99),
-- ('Jurassic Park', 'PG-13', 127, 3.99),
-- ('The Lion King', 'G', 89, 2.49),
-- ('Avengers', 'PG-13', 143, 4.99),
-- ('Finding Nemo', 'G', 100, 2.79);
-- SELECT rating, COUNT(*) AS film_count FROM film GROUP BY rating;
-- SELECT title FROM film WHERE rating IN ('G', 'PG-13') AND length < 120 AND rental_rate < 3.00 ORDER BY title ASC;
--  SELECT title
-- FROM film
-- WHERE rating IN ('G', 'PG-13');
-- SELECT title
-- FROM film
-- WHERE rating IN ('G', 'PG-13')
-- AND length < 120
-- AND rental_rate < 3.00
-- ORDER BY title ASC;
-- CREATE TABLE customer (
--     customer_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL,
--     email VARCHAR(100) UNIQUE,
--     address_id INTEGER
-- );

-- UPDATE customer
-- SET first_name = 'Nouhaila',
--     last_name = 'Touati',
--     email = 'nouhailatouati1@gmail.com'
-- WHERE customer_id = 1;  
-- INSERT INTO customer (first_name, last_name, email, address_id) VALUES
-- ('Marc', 'Benichou', 'marc.benichou@email.com', 1),
-- ('Lea', 'Cohen', 'lea.cohen@email.com', 2)
SELECT * FROM customer WHERE customer_id = 1;





