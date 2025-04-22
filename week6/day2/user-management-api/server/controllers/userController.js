
import bcrypt from 'bcryptjs';
import {
  insertUser,
  findUserByUsername,
  getAllUsers,
  getUserById,
  updateUser,
} from '../models/userModel.js';

export const register = async (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;

  try {

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const userId = await insertUser(
      { email, username, first_name, last_name },
      hashedPassword
    );
    
    res.status(201).json({ message: 'User registered', userId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await findUserByUsername(username);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Invalid password' });

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUserInfo = async (req, res) => {
  const { id } = req.params;
  const updated = await updateUser(id, req.body);
  updated ? res.status(200).json({ message: 'User updated' }) : res.status(404).json({ message: 'User not found' });
};
