// routes/authRoutes.js
import express from 'express';
import { login, getProfile } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();


router.post('/auth/login', login);

router.get('/me', protect, getProfile);

export default router;

