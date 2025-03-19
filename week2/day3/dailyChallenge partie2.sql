-- CREATE TABLE Book (
--     book_id SERIAL PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     author VARCHAR(255) NOT NULL
-- );
-- INSERT INTO Book (title, author) VALUES
--     ('Alice In Wonderland', 'Lewis Carroll'),
--     ('Harry Potter', 'J.K Rowling'),
--     ('To kill a mockingbird', 'Harper Lee');

-- CREATE TABLE Student (
--     student_id SERIAL PRIMARY KEY,
--     name VARCHAR(100) NOT NULL UNIQUE,
--     age INT CHECK (age <= 15)
-- );

-- INSERT INTO Student (name, age) VALUES
--     ('John', 12),
--     ('Lera', 11),
--     ('Patrick', 10),
--     ('Bob', 14);

	
-- CREATE TABLE Library (
--     book_fk_id INT,
--     student_fk_id INT,
--     borrowed_date DATE,
--     PRIMARY KEY (book_fk_id, student_fk_id),
--     CONSTRAINT fk_book FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     CONSTRAINT fk_student FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- );
-- -- INSERTION
-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- SELECT b.book_id, s.student_id, '2022-02-15' 
-- FROM Book b, Student s 
-- WHERE b.title = 'Alice In Wonderland' AND s.name = 'John'
-- UNION ALL
-- SELECT b.book_id, s.student_id, '2021-03-03' 
-- FROM Book b, Student s 
-- WHERE b.title = 'to kill a mockingbird' AND s.name = 'bob'
-- UNION ALL
-- SELECT b.book_id, s.student_id, '2021-05-23' 
-- FROM Book b, Student s 
-- WHERE b.title = 'alice in wonderland' AND s.name = 'leera'
-- UNION ALL
-- SELECT b.book_id, s.student_id, '2021-08-12' 
-- FROM Book b, Student s 
-- WHERE b.title = 'harry potter' AND s.name = 'bob';
-- SELECT * FROM Library;
-- SELECT s.name, b.title 
-- FROM Library l
-- JOIN Student s ON l.student_fk_id = s.student_id
-- JOIN Book b ON l.book_fk_id = b.book_id;
SELECT AVG(s.age) AS average_age 
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';
DELETE FROM Student WHERE name = 'John';
