CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
);

CREATE TABLE CustomerProfile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INT UNIQUE NOT NULL,
    CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES Customer(id) ON DELETE CASCADE
);
SELECT current_DATABASE 
INSERT INTO Customer(first_name,last_name)VALUES
('john','doe'),
('Jerome','Lalu')
-- INSERT INTO CustomerProfile (isLoggedIn, customer_id) VALUES
--     (true, (SELECT id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe')),
--     (false, (SELECT id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu'));
-- SELECT * FROM Customer;
INSERT INTO Customer (first_name, last_name) VALUES
    ('John', 'Doe'),
    ('Jerome', 'Lalu'),
    ('Lea', 'Rive')
RETURNING id, first_name, last_name;
INSERT INTO CustomerProfile (isLoggedIn, customer_id)
SELECT true, id FROM Customer WHERE first_name = 'John' AND last_name = 'Doe'
UNION ALL
SELECT false, id FROM Customer WHERE first_name = 'Jerome' AND last_name = 'Lalu';
-- HNA AFFICHAGE DYLA LES CLIENTS LI DEJA LOGIN 
SELECT c.first_name 
FROM Customer c
JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;
-- DABA N SITEE LES CLIENTS KOLHM HTA LI MA3andhomch profil b left join
SELECT c.first_name, COALESCE(cp.isLoggedIn, false) AS isLoggedIn 
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id;
-- on va compte le nbr des clients li not loggin 
SELECT COUNT(*) AS not_logged_in_customers 
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id 
WHERE cp.isLoggedIn = false OR cp.isLoggedIn IS NULL;



