import express from 'express';
import {
  fetchTodos,
  fetchTodo,
  addTodo,
  modifyTodo,
  removeTodo,
} from '../controllers/todoController.js';

const router = express.Router();

router.get('/', fetchTodos);
router.get('/:id', fetchTodo);
router.post('/', addTodo);
router.put('/:id', modifyTodo);
router.delete('/:id', removeTodo);

export default router;
