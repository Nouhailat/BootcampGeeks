import Lead from '../models/Lead.js';

export const getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des leads', error });
  }
};
export const getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: 'Lead non trouvé' });
    }
    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du lead', error });
  }
};
export const createLead = async (req, res) => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).json(newLead);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création du lead', error });
  }
};
export const updateLead = async (req, res) => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLead) {
      return res.status(404).json({ message: 'Lead non trouvé' });
    }
    res.json(updatedLead);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la mise à jour du lead', error });
  }
};

export const deleteLead = async (req, res) => {
  try {
    const deletedLead = await Lead.findByIdAndDelete(req.params.id);
    if (!deletedLead) {
      return res.status(404).json({ message: 'Lead non trouvé' });
    }
    res.json({ message: 'Lead supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du lead', error });
  }
};

export const getLeadsForManager = async (req, res) => {
  try {
    const leads = await Lead.find({ managerId: req.user.id });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des leads', error });
  }
};

export const updateLeadStatus = async (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;

  try {
    const lead = await Lead.findOne({ _id: id, managerId: req.user.id });
    if (!lead) {
      return res.status(404).json({ message: 'Lead non trouvé ou non assigné à ce manager' });
    }

    lead.status = status;
    lead.notes = notes;
    await lead.save();

    res.json({ message: 'Lead mis à jour avec succès', lead });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du lead', error });
  }
};
