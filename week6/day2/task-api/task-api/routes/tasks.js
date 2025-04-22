import { Router } from 'express';
import fs from 'fs-extra';
import { v4 as uuidv4 } from 'uuid';

const router = Router();
const FILE_PATH = './data/tasks.json';

const loadTasks = async () => {
  try {
    const data = await fs.readFile(FILE_PATH);
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

const saveTasks = async (tasks) => {
  try {
    await fs.writeFile(FILE_PATH, JSON.stringify(tasks, null, 2));
  } catch (err) {
    throw new Error('Failed to write file');
  }
};

// GET all
router.get('/', async (req, res) => {
  const tasks = await loadTasks();
  res.json(tasks);
});

// GET one
router.get('/:id', async (req, res) => {
  const tasks = await loadTasks();
  const task = tasks.find(t => t.id === req.params.id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
});


router.post('/', async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description required' });
  }

  const tasks = await loadTasks();
  const newTask = { id: uuidv4(), title, description };
  tasks.push(newTask);
  await saveTasks(tasks);
  res.status(201).json(newTask);
});

router.put('/:id', async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description required' });
  }

  const tasks = await loadTasks();
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });

  tasks[index] = { ...tasks[index], title, description };
  await saveTasks(tasks);
  res.json(tasks[index]);
});

router.delete('/:id', async (req, res) => {
  const tasks = await loadTasks();
  const index = tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Task not found' });

  const deleted = tasks.splice(index, 1)[0];
  await saveTasks(tasks);
  res.json(deleted);
});

export default router;
