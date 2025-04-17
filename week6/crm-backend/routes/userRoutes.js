import express from 'express';
// import { createManager } from '../controllers/userController.js';
import { createManager, deleteManager, updateManager } from '../controllers/userController.js';
const router = express.Router();
router.post('/employer/managers', createManager);
router.put('/employer/managers/:managerId', updateManager);
router.delete('/employer/managers/:managerId', deleteManager);
// router.post('/auth/login', login);
// router.get('/me', protect, getProfile);

export default router;
