// src/pages/EmployerManagers.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployerManagers = () => {
  const [managers, setManagers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const fetchManagers = async () => {
    try {
      const res = await axios.get('/api/employer/managers', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setManagers(res.data);
    } catch (err) {
      console.error('Erreur lors du chargement des managers', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/employer/managers', form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setForm({ name: '', email: '', password: '' });
      fetchManagers();
    } catch (err) {
      console.error('Erreur lors de la création', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/employer/managers/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      fetchManagers();
    } catch (err) {
      console.error('Erreur lors de la suppression', err);
    }
  };

  useEffect(() => {
    fetchManagers();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Gestion des Managers</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Nom"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Ajouter</button>
      </form>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {managers.map((manager) => (
            <tr key={manager._id}>
              <td>{manager.name}</td>
              <td>{manager.email}</td>
              <td>
                <button style={styles.delete} onClick={() => handleDelete(manager._id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial',
    maxWidth: '800px',
    margin: 'auto',
  },
  title: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#2c3e50',
  },
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    flex: '1',
    minWidth: '200px',
  },
  button: {
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  delete: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  thtd: {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'left',
  },
};

export default EmployerManagers;
