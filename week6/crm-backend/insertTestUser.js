import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/User.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ Connection failed:', err));

const createUser = async () => {
  const hashedPassword = await bcrypt.hash('123456', 10); // mot de passe chiffré

  const newUser = new User({
    name: 'nouhaila',
    email: 'nouhaila@gmail.com',
    password: hashedPassword,
    role: 'employer', // ou 'admin' selon ton schéma
  });

  await newUser.save();
  console.log('✅ Utilisateur inséré');
  mongoose.disconnect();
};

createUser();
