import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { restrictTo } from '../middleware/roleMiddleware.js';
import { createManager, updateManager, deleteManager, getAllManagers} from '../controllers/managerController.js';

const router = express.Router();
router.post(
  '/managers',
  authMiddleware,
  restrictTo('employer'),
  createManager
);

router.get(
  '/managers',
  authMiddleware,
  restrictTo('employer'),
  getAllManagers
);
router.put(
  '/managers/:id',
  authMiddleware,
  restrictTo('employer'),
  updateManager
);
router.delete(
  '/managers/:id',
  authMiddleware,
  restrictTo('employer'),
  deleteManager
);
// route  lead
// router.get('/leads', protect, restrictTo('manager'), getLeadsForManager);
// router.patch('/leads/:id', protect, restrictTo('manager'), updateLeadStatus);

// router.post('/login', login);

export default router;