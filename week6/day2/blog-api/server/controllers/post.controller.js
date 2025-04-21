import { Post } from '../models/post.model.js';

export const getAllPosts = async (req, res) => {
  const posts = await Post.getAll();
  res.json(posts);
};

export const getPostById = async (req, res) => {
  const post = await Post.getById(req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
};

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  const newPost = await Post.create(title, content);
  res.status(201).json(newPost);
};

export const updatePost = async (req, res) => {
  const { title, content } = req.body;
  const updatedPost = await Post.update(req.params.id, title, content);
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  await Post.delete(req.params.id);
  res.status(204).send();
};
