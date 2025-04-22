import pool from '../config/db.js'; 

export const createUser = async (userData) => {
  const { username, email, first_name, last_name } = userData;
  const query = 'INSERT INTO users (username, email, first_name, last_name) VALUES ($1, $2, $3, $4)';
  const values = [username, email, first_name, last_name];
  await pool.query(query, values); // Utilisation de pool
};


export const createUserWithPassword = async (userData, hashedPassword) => {
  const client = await db.connect();
  try {
    await client.query('BEGIN');

    const insertUser = await client.query(
      'INSERT INTO users (email, username, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING id',
      [userData.email, userData.username, userData.first_name, userData.last_name]
    );

    await client.query(
      'INSERT INTO hashpwd (username, password) VALUES ($1, $2)',
      [userData.username, hashedPassword]
    );

    await client.query('COMMIT');
    return insertUser.rows[0];
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
};

// export const getAllUsers = async () => {
//   const result = await db.query('SELECT * FROM users');
//   return result.rows;
// };


export const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    const users = result.rows; // ici on extrait les vraies données
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur lors de la récupération des utilisateurs" });
  }
};


export const getUserById = async (id) => {
  const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

export const getPasswordByUsername = async (username) => {
  const result = await db.query('SELECT * FROM hashpwd WHERE username = $1', [username]);
  return result.rows[0];
};

export const updateUserById = async (id, userData) => {
  const { email, username, first_name, last_name } = userData;
  await db.query(
    'UPDATE users SET email = $1, username = $2, first_name = $3, last_name = $4 WHERE id = $5',
    [email, username, first_name, last_name, id]
  );
};
