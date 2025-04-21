import pool from '../config/db.js';

export const getTodos = async () => {
  const res = await pool.query('SELECT * FROM tasks');
  return res.rows;
};

export const getTodoById = async (id) => {
  const res = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
  return res.rows[0];
};

export const createTodo = async (title) => {
  const res = await pool.query(
    'INSERT INTO tasks (title) VALUES ($1) RETURNING *',
    [title]
  );
  return res.rows[0];
};

export const updateTodo = async (id, title, completed) => {
  const res = await pool.query(
    'UPDATE tasks SET title = $1, completed = $2 WHERE id = $3 RETURNING *',
    [title, completed, id]
  );
  return res.rows[0];
};

export const deleteTodo = async (id) => {
  await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
};
