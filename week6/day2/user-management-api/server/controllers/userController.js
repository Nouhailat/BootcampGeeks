import bcrypt from 'bcrypt';
import {
  createUser,
  getAllUsers,
  getUserById,
  getPasswordByUsername,
  updateUserById,
} from '../models/userModel.js';

export const registerUser = async (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;

  try {
   
    const userExists = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: 'Nom d’utilisateur déjà pris' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query('BEGIN');

    const newUser = await pool.query(
      'INSERT INTO users (email, username, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING id',
      [email, username, first_name, last_name]
    );

    await pool.query(
      'INSERT INTO hashpwd (username, password) VALUES ($1, $2)',
      [username, hashedPassword]
    );

    await pool.query('COMMIT');

    res.status(201).json({ message: 'Utilisateur enregistré avec succès' });

  } catch (err) {
    await pool.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de l’inscription' });
  }
};


// export const registerUser = async (req, res) => {
//   try {
//     const { email, username, first_name, last_name, password } = req.body;

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await createUserWithPassword(
//       { email, username, first_name, last_name },
//       hashedPassword
//     );

//     res.status(201).json({ message: 'User registered', user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await getPasswordByUsername(username);

    if (!user) return res.status(401).json({ error: 'User not found' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Invalid password' });

    res.json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
};

export const getUser = async (req, res) => {
  const user = await getUserById(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};

export const updateUser = async (req, res) => {
  await updateUserById(req.params.id, req.body);
  res.json({ message: 'User updated' });
};
