import express from 'express';
import tasksRouter from './routes/tasks.js';

const app = express();
app.use(express.json());


app.use('/tasks', tasksRouter);

app.get('/test', (req, res) => {
    res.send('POST test successful');
  });
  
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

