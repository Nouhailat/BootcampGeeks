// const express=require('express')
import express from'express'
// const { parseInt } = require('lodash')
const app=express()
const port =3000
app.use(express.json())
let posts=[
    {id:1,title:'first onee',content:'first exercice of node js with express'},
    {id:2,title:'second onee',content:'second exercice of node js with express'}

]
app.get('/posts',(req,res)=>{
    res.json(posts)
})
app.get('/posts/:id',(req,res)=>{
   const post=posts.find(p=>p.id===parseInt(req.params.id))
if (!post)return res.status(404).json ({error:'past not found'})
    res.json(post)    
})
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  });
  app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    const newPost = {
      id: posts.length + 1,
      title,
      content
    };
    posts.push(newPost);
    res.status(201).json(newPost);
  });
  
  app.put('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ error: 'Post not found' });
  
    const { title, content } = req.body;
    post.title = title || post.title;
    post.content = content || post.content;
  
    res.json(post);
  });
  app.delete('/posts/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) return res.status(404).json({ error: 'Post not found' });
  
    posts.splice(postIndex, 1);
    res.status(204).send();
  });
  app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
  });
  
  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });
  