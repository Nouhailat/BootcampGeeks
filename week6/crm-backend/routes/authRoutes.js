import express from 'express';
import { login, getProfile } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();


router.post('/auth/login', login);

router.get('/me', authMiddleware, getProfile);

export default router;

