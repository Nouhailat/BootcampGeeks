import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import leadRoutes from './routes/leadRoutes.js';
import managerRoutes from './routes/managerRoutes.js';
import managerLeadRoutes from './routes/managerLeadRoutes.js';
import authRoutes from './routes/authRoutes.js';
import employerRoutes from './routes/employerRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection failed:', err));


app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', managerRoutes);
app.use('/api', managerLeadRoutes);
app.use('/api/leads', leadRoutes);
app.use('/employer', employerRoutes);

app.get('/', (req, res) => {
  res.send('📡 CRM API running...');
});

// ✅ Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
