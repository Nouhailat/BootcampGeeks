import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`✅ Serveur work http://localhost:${PORT}`);
});
// let books = [
//     { id: 1, title: "Clean Code", author: "Robert C. Martin", publishedYear: 2008 },
//     { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt", publishedYear: 1999 },
//   ];
  
  import bookRoutes from "./server/routes/bookRoutes.js";

  app.use("/api/books", bookRoutes);
  