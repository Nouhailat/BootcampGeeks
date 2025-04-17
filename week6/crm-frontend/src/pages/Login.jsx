import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import './LoginGlass.css';

export default function Login() {
  const [email, setEmail] = useState('');       
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState('');       
  const navigate = useNavigate();               

 
  const handleLogin = async (e) => {
    e.preventDefault();   
    setError('');           

    try {

      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        { email, password }
      );

      
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/employer/dashboard');  

    } catch (err) {
 
      const msg = err.response?.data?.message || 'Erreur de connexion';
      setError(msg);
    }
  };

  return (
    <div className="glass-wrapper">
      <form className="glass-card" onSubmit={handleLogin}>
        <h2>Connexion</h2>
        {error && <div className="error">{error}</div>}
        <div className="field">
          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Votre mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
        {/* <p className="link">
          Pas de compte ? <a href="#">Inscrivez‑vous</a>
        </p> */}
      </form>
    </div>
  );
}
