CREATE TABLE language (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE film (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    release_year INT,
    language_id INT REFERENCES language(id),
    rental_duration INT DEFAULT 7,
    rental_rate DECIMAL(5,2) DEFAULT 4.99
);

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    release_year INT,
    language_id INT REFERENCES language(id),
    rental_duration INT DEFAULT 7,
    rental_rate DECIMAL(5,2) DEFAULT 4.99
);

CREATE TABLE actor (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);

CREATE TABLE film_actor (
    film_id INT REFERENCES film(id) ON DELETE CASCADE,
    actor_id INT REFERENCES actor(id) ON DELETE CASCADE,
    PRIMARY KEY (film_id, actor_id)
);

CREATE TABLE rental (
    id SERIAL PRIMARY KEY,
    film_id INT REFERENCES film(id) ON DELETE CASCADE,
    rental_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    return_date TIMESTAMP
);

CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    film_id INT REFERENCES film(id) ON DELETE CASCADE,
    stock INT DEFAULT 1
);
