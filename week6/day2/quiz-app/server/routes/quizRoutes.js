import express from 'express';
import { getQuestionById ,createQuestion} from '../controllers/quizController.js';

const router = express.Router();
router.get('/:id', getQuestionById);
router.post('/', createQuestion);

export default router;
