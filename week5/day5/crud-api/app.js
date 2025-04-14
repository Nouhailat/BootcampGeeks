import express from 'express';
import { fetchPosts } from './data/dataService.js';

const app = express();
const PORT = 5000;

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log(' Data was successfully retrieved from JSONPlaceholder');
    res.status(200).json(posts);
  } catch (error) {
    console.error(' Error fetching posts:', error);
    res.status(500).json({ message: 'Failed to fetch posts' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
