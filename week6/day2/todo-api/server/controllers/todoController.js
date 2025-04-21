import {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
  } from '../models/todoModel.js';
  
  export const fetchTodos = async (req, res) => {
    const todos = await getTodos();
    res.json(todos);
  };
  
  export const fetchTodo = async (req, res) => {
    const todo = await getTodoById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
  };
  
  export const addTodo = async (req, res) => {
    const { title } = req.body;
    const newTodo = await createTodo(title);
    res.status(201).json(newTodo);
  };
  
  export const modifyTodo = async (req, res) => {
    const { title, completed } = req.body;
    const updatedTodo = await updateTodo(req.params.id, title, completed);
    if (!updatedTodo) return res.status(404).json({ message: 'Todo not found' });
    res.json(updatedTodo);
  };
  
  export const removeTodo = async (req, res) => {
    await deleteTodo(req.params.id);
    res.status(204).end();
  };
  