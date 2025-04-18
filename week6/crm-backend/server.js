import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid'; 

const app = express();
const PORT = 5000;

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json());

const leads = [];
const managers = [
  { _id: '1', name: 'Zakaria Manager 1', email: 'z.manager1@example.com' },
  { _id: '2', name: 'Zakaria Manager 2', email: 'z.manager2@example.com' },
  { _id: '3', name: 'Zakaria Manager 3', email: 'z.manager3@example.com' },
];

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'test@example.com' && password === '123456') {
    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Identifiants incorrects' });
  }
});

app.get('/employer/dashboard-stats', (req, res) => {
  console.log("Requête reçue sur /employer/dashboard-stats");
  res.json({
    inProgress: 4,
    completed: 2,
    canceled: 1
  });
});

app.get('/api/employer/managers', (req, res) => {
  res.json(managers);
});

app.get('/api/employer/leads', (req, res) => {
  const leadsWithManager = leads.map(lead => ({
    ...lead,
    manager: managers.find(m => m._id === lead.managerId) || null
  }));
  res.json(leadsWithManager);
});

app.post('/api/employer/leads', (req, res) => {
  const { contactName, contactEmail, companyName, status, managerId } = req.body;
  const newLead = {
    _id: uuidv4(),
    contactName,
    contactEmail,
    companyName,
    status,
    managerId,
  };
  leads.push(newLead);
  res.status(201).json(newLead);
});

app.put('/api/employer/leads/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const lead = leads.find(l => l._id === id);
  if (!lead) return res.status(404).json({ error: 'Lead not found' });

  lead.status = status;
  res.json(lead);
});

// DELETE a lead
app.delete('/api/employer/leads/:id', (req, res) => {
  const { id } = req.params;
  const index = leads.findIndex(l => l._id === id);
  if (index === -1) return res.status(404).json({ error: 'Lead not found' });

  leads.splice(index, 1);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
