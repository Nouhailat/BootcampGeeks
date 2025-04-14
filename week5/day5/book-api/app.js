import express from 'express'
const app=express()
const port=5000
app.use(express.json())
let books = [
    { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
  ];
  app.listen(port,()=> {
    console.log(`📚 Book API running on http://localhost:${port}`);
  })
  app.get('/api/books',(req,res)=>{
    res.status(200).json(books)
  })
  app.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(b => b.id === bookId);
  
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  });
  app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;
  
    const newBook = {
      id: books.length + 1,
      title,
      author,
      publishedYear,
    };
  
    books.push(newBook);
    res.status(201).json(newBook);
  });
  
  


