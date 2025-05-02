import express from "express";   
import cors from "cors";        

const app = express();
const port = 5000;

app.use(cors());

app.use(express.json());


app.get("/api/hello", (req, res) => {
  res.send("Hello From Express");
});


app.post("/api/world", (req, res) => {
  const { message } = req.body;
  console.log("Received message:", message);
  res.send(`I received your POST request. This is what you sent me: ${message}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
