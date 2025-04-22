import express from 'express';
import {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  updateUser,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);

export default router;
