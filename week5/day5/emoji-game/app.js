import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import emojis from './data/emojis.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let score = 0;
let leaderboard = [];

function getRandomEmojiSet() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];

  const options = new Set();
  options.add(correct.name);

  while (options.size < 4) {
    const random = emojis[Math.floor(Math.random() * emojis.length)];
    options.add(random.name);
  }

  return {
    emoji: correct.emoji,
    correctAnswer: correct.name,
    options: Array.from(options).sort(() => 0.5 - Math.random()) // shuffle
  };
}

app.get('/emoji', (req, res) => {
  const data = getRandomEmojiSet();
  res.json(data);
});

app.post('/guess', (req, res) => {
  const { answer, correctAnswer, player } = req.body;

  if (!answer || !correctAnswer || !player) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  let isCorrect = answer === correctAnswer;
  if (isCorrect) {
    score += 1;
    const existing = leaderboard.find(p => p.name === player);
    if (existing) {
      existing.score += 1;
    } else {
      leaderboard.push({ name: player, score: 1 });
    }
  }

  res.json({ correct: isCorrect, score });
});

app.get('/leaderboard', (req, res) => {
  const sorted = leaderboard.sort((a, b) => b.score - a.score);
  res.json(sorted);
});

app.listen(PORT, () => {
  console.log(`Emoji Game API running on http://localhost:${PORT}`);
});
