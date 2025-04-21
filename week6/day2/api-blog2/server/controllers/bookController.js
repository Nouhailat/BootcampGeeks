let books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin", publishedYear: 2008 },
    { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt", publishedYear: 1999 },
  ];
  
  export const getAllBooks = (req, res) => {
    res.status(200).json(books);
  };
  
  export const getBookById = (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find((b) => b.id === bookId);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: "📕 Livre non trouvé" });
    }
  };
  
  export const createBook = (req, res) => {
    const { title, author, publishedYear } = req.body;
    const newBook = {
      id: books.length + 1,
      title,
      author,
      publishedYear,
    };
    books.push(newBook);
    res.status(201).json(newBook);
  };
  