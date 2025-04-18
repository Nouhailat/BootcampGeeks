/*
  src/pages/ManagerLeads.jsx
  Page React pour manager : consultation et mise à jour
*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ManagerLeads.css';

export default function ManagerLeads() {
  const [leads, setLeads] = useState([]);
  const [selected, setSelected] = useState(null);
  const token = localStorage.getItem('token');
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => { fetchLeads(); }, []);

  const fetchLeads = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/managers/leads', { headers });
      setLeads(res.data);
    } catch (err) {
      console.error('Erreur fetch manager leads:', err);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/api/managers/leads/${id}`, { status }, { headers });
      fetchLeads();
    } catch (err) {
      console.error('Erreur update status manager:', err);
    }
  };

  return (
    <div className="mgr-leads-container">
      <h1>Mes Leads</h1>
      <table className="mgr-leads-table">
        <thead>
          <tr>
            <th>Contact</th><th>Entreprise</th><th>Statut</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead._id}>
              <td>{lead.contactName}</td>
              <td>{lead.companyName}</td>
              <td>{lead.status}</td>
              <td>
                <select
                  value={lead.status}
                  onChange={e => handleStatusUpdate(lead._id, e.target.value)}
                >
                  {['PENDING','IN_PROGRESS','COMPLETED','CANCELED'].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
)}