import Lead from '../models/Lead.js';

// GET - Tous les leads (option de filtrage par managerId et status)
export const getAllLeads = async (req, res) => {
  try {
    const filter = {};
    if (req.query.managerId) filter.managerId = req.query.managerId;
    if (req.query.status) filter.status = req.query.status;

    const leads = await Lead.find(filter);
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des leads', error });
  }
};

// GET - Lead par ID
export const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead non trouvé' });
    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du lead', error });
  }
};

// POST - Créer un lead
export const createLead = async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).json(newLead);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création du lead', error });
  }
};

// PUT - Mettre à jour un lead
export const updateLead = async (req, res) => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLead) return res.status(404).json({ message: 'Lead non trouvé' });
    res.json(updatedLead);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la mise à jour du lead', error });
  }
};

// DELETE - Supprimer un lead
export const deleteLead = async (req, res) => {
  try {
    const deletedLead = await Lead.findByIdAndDelete(req.params.id);
    if (!deletedLead) return res.status(404).json({ message: 'Lead non trouvé' });
    res.json({ message: 'Lead supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du lead', error });
  }
};

// GET - Leads assignés à un manager (filtrés par managerId)
export const getLeadsForManager = async (req, res) => {
  try {
    if (req.user.role !== 'manager') {
      return res.status(403).json({ message: 'Accès refusé' });
    }

    const leads = await Lead.find({ managerId: req.user.id });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des leads', error });
  }
};

// PATCH - Mettre à jour statut ou notes d’un lead (Manager uniquement)
export const updateLeadStatus = async (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;
  const allowedStatuses = ['PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELED'];

  try {
    if (status && !allowedStatuses.includes(status)) {
      return res.status(400).json({ message: 'Statut invalide' });
    }

    if (notes && !Array.isArray(notes)) {
      return res.status(400).json({ message: 'Notes doit être un tableau' });
    }

    const lead = await Lead.findOne({ _id: id, managerId: req.user.id });
    if (!lead) {
      return res.status(404).json({ message: 'Lead non trouvé ou non assigné à ce manager' });
    }

    if (status) lead.status = status;
    if (notes) lead.notes = notes;

    await lead.save();
    res.json({ message: 'Lead mis à jour avec succès', lead });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du lead', error });
  }
};
