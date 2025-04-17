import express from 'express';
// import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/leadController.js';
import { getAllLeads, getLeadById, createLead, updateLead, deleteLead } from '../controllers/leadController.js';

const router = express.Router();

router.get('/', getAllLeads);
router.get('/:id', getLeadById);
router.post('/leads', createLead);
router.put('/:id', updateLead);
router.delete('/:id', deleteLead);

export default router;
