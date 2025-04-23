import express from 'express';
import fs from 'fs';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const app = express();
const PORT = 3000;
const USERS_FILE = './users.json';
app.use(express.json())
app.use(express.static('public'))
const readUsers = () => {
    try {
      const data = fs.readFileSync(USERS_FILE);
      return JSON.parse(data);
    } catch (err) {
      return [];
    }
  };
  
  const writeUsers = (users) => {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  };
  app.post('/api/register', async (req, res) => {
    const { name, lastName, email, username, password } = req.body;
    
    if (!name || !lastName || !email || !username || !password) {
      return res.json({ message: 'error1' }); 
    }
  
    const users = readUsers();
    const exists = users.find(u => u.username === username || u.email === email);
    if (exists) return res.json({ message: 'error1' }); 
  
    const hashedPassword = await bcrypt.hash(password, 10); 
  
    const newUser = {
      id: uuidv4(),
      name,
      lastName,
      email,
      username,
      password: hashedPassword
    };
  
    users.push(newUser);
    writeUsers(users);
  
    res.json({ message: 'register passed withs succes' });
  });
  app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const users = readUsers();
  
    const user = users.find(u => u.username === username);
    if (!user) return res.json({ message: 'error2' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ message: 'error2' }); 
  
    res.json({ message: ' login passed with succes '  }); 
  });
  app.get('/api/users', (req, res) => {
    const users = readUsers();
    res.json(users);
  });
  app.get('/api/users/:id', (req, res) => {
    const users = readUsers();
    const user = users.find(u => u.id === req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  });
  app.put('/api/users/:id', (req, res) => {
    const users = readUsers();
    const index = users.findIndex(u => u.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'User not found' });
  
    const updatedUser = { ...users[index], ...req.body };
    users[index] = updatedUser;
    writeUsers(users);
  
    res.json({ message: 'User updated', user: updatedUser });
  });
  app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
  
  
  
  
