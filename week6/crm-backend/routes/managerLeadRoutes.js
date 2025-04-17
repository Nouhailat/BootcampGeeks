import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { restrictTo } from '../middleware/roleMiddleware.js';
import {
  getLeadsForManager,
  updateLeadStatus
} from '../controllers/leadController.js';

const router = express.Router();
router.get  ('/manager/leads',      protect, restrictTo('manager'), getLeadsForManager);
router.patch('/manager/leads/:id',  protect, restrictTo('manager'), updateLeadStatus);

export default router;