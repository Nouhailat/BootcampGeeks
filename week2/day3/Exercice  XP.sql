
-- CREATE TABLE new_film (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL
-- );
-- INSERT INTO new_film (name) VALUES ('Avatar'), ('The Matrix');
-- CREATE TABLE customer_review (
--     review_id SERIAL PRIMARY KEY,
--     film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
--     language_id INT REFERENCES language(language_id),
--     title VARCHAR(255) NOT NULL,
--     score INT CHECK (score BETWEEN 1 AND 10),
--     review_text TEXT,
--     last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text) VALUES
-- (1, 1, 'Amazing Movie', 9, 'Loved the visuals and story!'),
-- (2, 2, 'Classic Sci-Fi', 10, 'The Matrix changed cinema forever!')
-- SELECT * FROM language
-- SELECT f.title, f.description, l.name AS language_name
-- FROM film f
-- JOIN language l ON f.language_id = l.language_id;
-- SELECT * FROM customer_review;
-- DELETE FROM new_film WHERE id = 1;
-- SELECT * FROM customer_review;
-- UPDATE film
-- SET language_id = 2  
-- WHERE title = 'Inception';
-- SELECT title, language_id FROM film WHERE title = 'Inception';

-- SELECT conname, conrelid::regclass AS table_name, condeferrable, confrelid::regclass AS referenced_table
-- FROM pg_constraint
-- WHERE conrelid = 'customer'::regclass;
-- SELECT * 
-- FROM information_schema.table_constraints 
-- WHERE table_name = 'customer' 
-- AND constraint_type = 'FOREIGN KEY';
-- SELECT column_name, constraint_name
-- FROM information_schema.key_column_usage
-- WHERE table_name = 'customer';
-- DROP TABLE IF EXISTS customer_review CASCADE;
-- SELECT table_name
-- FROM information_schema.tables
-- WHERE table_schema = 'public';
-- SELECT column_name, data_type
-- FROM information_schema.columns
-- WHERE table_name = 'rental';
-- SELECT * FROM rental WHERE return_date IS NULL LIMIT 10;
-- SELECT column_name, data_type
-- FROM information_schema.columns
-- WHERE table_name = 'rental';
-- SELECT table_name
-- FROM information_schema.tables
-- WHERE table_schema = 'public';
-- SELECT table_schema, table_name
-- FROM information_schema.tables
-- WHERE table_name = 'rental';
SELECT current_database();

-- CREATE TABLE rental (
--     rental_id SERIAL PRIMARY KEY,
--     rental_date TIMESTAMP NOT NULL,
--     inventory_id INT NOT NULL,
--     customer_id INT NOT NULL,
--     date_return TIMESTAMP,
--     staff_id INT NOT NULL,
--     last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
-- UPDATE film
-- SET language_id = (SELECT language_id FROM language WHERE name = 'French')
-- WHERE film_id IN (1, 2, 3);
-- SELECT column_name, constraint_name, table_name
-- FROM information_schema.key_column_usage
-- WHERE table_name = 'customer';
-- DROP TABLE IF EXISTS customer_review CASCADE;
-- SELECT COUNT(*) AS outstanding_rentals
-- FROM rental
-- WHERE date_return IS NULL;
-- SELECT table_name
-- FROM information_schema.tables
-- WHERE table_schema = 'public';
-- SELECT COUNT(*) AS outstanding_rentals
-- FROM rental
-- WHERE date_return IS NULL;
-- SELECT column_name
-- FROM information_schema.columns
-- WHERE table_name = 'rental';

-- CREATE TABLE inventory (
--     inventory_id SERIAL PRIMARY KEY,
--     film_id INT NOT NULL,
--     FOREIGN KEY (film_id) REFERENCES film(film_id) ON DELETE CASCADE
-- );
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public';
INSERT INTO inventory (film_id) VALUES (1), (2), (3);

SELECT f.title, f.rental_rate
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.date_return IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;
-- CREATE TABLE actor (
--     actor_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL,
--     last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );


INSERT INTO actor (first_name, last_name)
SELECT 'NouvelActeur', 'NomDeFamille'
WHERE NOT EXISTS (
    SELECT 1 FROM actor WHERE first_name = 'NouvelActeur' AND last_name = 'NomDeFamille'
);
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name = 'film_actor';

INSERT INTO actor (first_name, last_name)
VALUES ('NouvelActeur', 'NomDeFamille');
-- CREATE TABLE film_actor (
--     actor_id INT REFERENCES actor(actor_id) ON DELETE CASCADE,
--     film_id INT REFERENCES film(film_id) ON DELETE CASCADE,
--     PRIMARY KEY (actor_id, film_id)
-- ); 
INSERT INTO film_actor (actor_id, film_id)
SELECT a.actor_id, f.film_id
FROM actor a, film f
WHERE a.first_name = 'NouvelActeur' 
AND a.last_name = 'NomDeFamille'
AND f.title = 'NomDuFilm'
AND NOT EXISTS (
    SELECT 1 FROM film_actor WHERE actor_id = a.actor_id AND film_id = f.film_id
);



















