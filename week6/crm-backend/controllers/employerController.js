import Lead from '../models/Lead.js';

export const getMyLeads = async (req, res) => {
  try {
    const leads = await Lead.find({ createdBy: req.user._id });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des leads", error });
  }
};

export const createMyLead = async (req, res) => {
  try {
    const { companyName, contactName, contactEmail } = req.body;

    const lead = new Lead({
      companyName,
      contactName,
      contactEmail,
      createdBy: req.user._id, 
    });

    await lead.save();
    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création du lead", error });
  }
};
