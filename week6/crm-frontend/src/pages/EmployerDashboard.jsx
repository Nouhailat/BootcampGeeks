import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DashboardEmployer.css';

const DashboardEmployer = () => {
  const [stats, setStats] = useState({
    inProgress: 0,
    completed: 0,
    canceled: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('token');
        // KNT DYRA HNA http://localhost:5000/api/employer/dashboard-stats
        const res = await axios.get('http://localhost:5000/employer/dashboard-stats', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setStats(res.data);
      } catch (error) {
        console.error('Erreur récupération stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>👋 Bienvenue, Employer</h1>
      <p className="subtitle">Voici un aperçu de l'activité des leads</p>

      <div className="cards">
        <div className="card card-progress">
          <h2>📥 Leads en cours</h2>
          <p>{stats.inProgress}</p>
        </div>
        <div className="card card-completed">
          <h2>✅ Leads complétés</h2>
          <p>{stats.completed}</p>
        </div>
        <div className="card card-canceled">
          <h2>❌ Leads annulés</h2>
          <p>{stats.canceled}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardEmployer;
