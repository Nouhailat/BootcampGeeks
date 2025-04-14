import express from 'express';
import booksRouter from './routes/books.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/books', booksRouter);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});