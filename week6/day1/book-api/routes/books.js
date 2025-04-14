import { Router } from 'express';
const router = Router();

let books = [];

router.get('/', (req, res) => {
  res.json(books);
});

router.post('/', (req, res) => {
  const book = req.body;
  book.id = Date.now().toString();
  books.push(book);
  res.status(201).json(book);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(book => book.id === id);
  if (index === -1) return res.status(404).json({ message: 'Book not found' });
  books[index] = { ...books[index], ...req.body };
  res.json(books[index]);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(book => book.id === id);
  if (index === -1) return res.status(404).json({ message: 'Book not found' });
  const deletedBook = books.splice(index, 1);
  res.json(deletedBook[0]);
});

export default router;