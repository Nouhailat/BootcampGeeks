
import express from 'express';
import { getMyLeads, createMyLead } from '../controllers/employerController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { checkRole } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.use(authMiddleware, checkRole('employer'));

router.get('/leads', getMyLeads);
router.post('/leads', createMyLead);
router.post('/some-protected-route', checkRole('admin'), (req, res) => { 
    res.send('Accès autorisé');
});

export default router;
