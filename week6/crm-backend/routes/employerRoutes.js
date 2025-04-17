// employerRoutes.js
import express from 'express';
import { getMyLeads, createMyLead } from '../controllers/employerController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { checkRole } from '../middleware/roleMiddleware.js';

const router = express.Router();

// Appliquer les middlewares d'authentification et de vérification de rôle
router.use(authMiddleware, checkRole('employer'));

// Routes protégées pour les leads
router.get('/leads', getMyLeads);
router.post('/leads', createMyLead);

// Exemple de route pour un rôle 'admin' (à adapter à ton besoin)
router.post('/some-protected-route', checkRole('admin'), (req, res) => { 
    res.send('Accès autorisé');
});

export default router;
