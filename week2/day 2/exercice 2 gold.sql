-- UPDATE students
-- SET birth_date = '1998-11-02'
-- WHERE last_name = 'Benichou' AND first_name IN ('Lea', 'Marc');

-- UPDATE students
-- SET last_name = 'Guez'
-- WHERE first_name = 'David' AND last_name = 'Grez';
-- DELETE FROM students
-- WHERE first_name = 'Lea' AND last_name = 'Benichou';
-- SELECT COUNT(*) AS total_students FROM students;

-- SELECT COUNT(*) AS students_after_2000
-- FROM students
-- WHERE birth_date >= '2000-01-01';
-- ALTER TABLE students ADD COLUMN math_grade INTEGER;
-- UPDATE students SET math_grade = 80 WHERE id = 1;

-- UPDATE students SET math_grade = 90 WHERE id IN (2, 4);

-- UPDATE students SET math_grade = 40 WHERE id = 6;


-- SELECT COUNT(*) AS students_above_83
-- FROM students
-- WHERE math_grade > 83;
-- INSERT INTO students (first_name, last_name, birth_date, math_grade)
-- SELECT first_name, last_name, birth_date, 70
-- FROM students
-- WHERE first_name = 'Omer' AND last_name = 'Simpson'
-- LIMIT 1;
-- SELECT first_name, last_name, COUNT(math_grade) AS total_grade
-- FROM students
-- GROUP BY first_name, last_name;






