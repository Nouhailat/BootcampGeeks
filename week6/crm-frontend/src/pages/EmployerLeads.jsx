import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EmployerLeads.css';

export default function EmployerLeads() {
  const [leads, setLeads] = useState([]);
  const [managers, setManagers] = useState([]);
  const [selectedManagerId, setSelectedManagerId] = useState('');
  const [form, setForm] = useState({
    contactName: '',
    contactEmail: '',
    companyName: '',
    status: 'PENDING',
  });

  const API = 'http://localhost:5000/api/employer'; // base common

  useEffect(() => {
    fetchManagers();
    fetchLeads();
  }, []);

  const fetchManagers = async () => {
    try {
      const res = await axios.get(`${API}/managers`);
      console.log('Managers :', res.data);
      setManagers(res.data);
    } catch (err) {
      console.error('Erreur de chargement des managers:', err);
    }
  };

  const fetchLeads = async () => {
    try {
      const res = await axios.get(`${API}/leads`);
      console.log('Leads :', res.data);
      setLeads(res.data);
    } catch (err) {
      console.error('Erreur fetch leads:', err);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/leads`, {
        ...form,
        managerId: selectedManagerId,
      });
      setForm({ contactName: '', contactEmail: '', companyName: '', status: 'PENDING' });
      setSelectedManagerId('');
      fetchLeads();
    } catch (err) {
      console.error('Erreur création lead:', err);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`${API}/leads/${id}`, { status: newStatus });
      fetchLeads();
    } catch (err) {
      console.error('Erreur update statut:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/leads/${id}`);
      fetchLeads();
    } catch (err) {
      console.error('Erreur suppression lead:', err);
    }
  };

  return (
    <div className="leads-container">
      <h1>Gestion des Leads</h1>
      <form className="lead-form" onSubmit={handleCreate}>
        <input type="text" placeholder="Nom du contact"
          value={form.contactName}
          onChange={e => setForm({ ...form, contactName: e.target.value })}
          required
        />
        <input type="email" placeholder="Email du contact"
          value={form.contactEmail}
          onChange={e => setForm({ ...form, contactEmail: e.target.value })}
          required
        />
        <input type="text" placeholder="Nom de l'entreprise"
          value={form.companyName}
          onChange={e => setForm({ ...form, companyName: e.target.value })}
          required
        />
        <select value={selectedManagerId} onChange={e => setSelectedManagerId(e.target.value)} required>
          <option value="">-- Sélectionnez un manager --</option>
          {managers.map(m => (
            <option key={m._id} value={m._id}>{m.name}</option>
          ))}
        </select>
        <button type="submit">Ajouter Lead</button>
      </form>

      <table className="leads-table">
        <thead>
          <tr>
            <th>Contact</th><th>Email</th><th>Entreprise</th>
            <th>Manager</th><th>Statut</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead._id}>
              <td>{lead.contactName}</td>
              <td>{lead.contactEmail}</td>
              <td>{lead.companyName}</td>
              <td>{lead.manager?.name || '—'}</td>
              <td>
                <select value={lead.status} onChange={e => handleStatusChange(lead._id, e.target.value)}>
                  {['PENDING','IN_PROGRESS','COMPLETED','CANCELED'].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </td>
              <td>
                <button className="btn-delete" onClick={() => handleDelete(lead._id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
