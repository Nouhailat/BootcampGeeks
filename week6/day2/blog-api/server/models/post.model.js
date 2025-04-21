import db from '../config/db.js';

export const Post = {
  getAll: async () => {
    const res = await db.query('SELECT * FROM posts');
    return res.rows;
  },

  getById: async (id) => {
    const res = await db.query('SELECT * FROM posts WHERE id = $1', [id]);
    return res.rows[0];
  },

  create: async (title, content) => {
    const res = await db.query(
      'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );
    return res.rows[0];
  },

  update: async (id, title, content) => {
    const res = await db.query(
      'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
      [title, content, id]
    );
    return res.rows[0];
  },

  delete: async (id) => {
    await db.query('DELETE FROM posts WHERE id = $1', [id]);
  },
};
