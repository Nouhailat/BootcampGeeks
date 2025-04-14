import express from 'express'
const router=express.Router()
let todos = [];
let idCounter = 1;
router.get('/', (req, res) => {
  res.json(todos);
});
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: 'Le titre est requis.' });

  const newTodo = { id: idCounter++, title };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title } = req.body;
  const todo = todos.find((t) => t.id === id);
  if (!todo) return res.status(404).json({ message: 'Tâche non trouvée.' });

  todo.title = title || todo.title;
  res.json(todo);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) return res.status(404).json({ message: 'Tâche non trouvée.' });

  todos.splice(index, 1);
  res.json({ message: 'Task has been deleted with succes' });
});

export default router;