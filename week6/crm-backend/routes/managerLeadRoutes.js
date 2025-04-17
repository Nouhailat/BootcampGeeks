import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { restrictTo } from '../middleware/roleMiddleware.js';
import {
  getLeadsForManager,
  updateLeadStatus
} from '../controllers/leadController.js';

const router = express.Router();
router.get  ('/manager/leads',      authMiddleware, restrictTo('manager'), getLeadsForManager);
router.patch('/manager/leads/:id',  authMiddleware, restrictTo('manager'), updateLeadStatus);

export default router;