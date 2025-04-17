import React, { useEffect, useState } from 'react';
import { getProfile } from '/api/authService';
import AppRouter from './routes/AppRouter';
import './Login.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const res = await getProfile();
        setUser(res.data);
      } catch {
       
      }
    };
    loadProfile();
  }, []);

  return <AppRouter user={user} />;
}

export default App;