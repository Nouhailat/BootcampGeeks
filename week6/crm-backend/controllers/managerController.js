import Manager from '../models/Manager.js'; 
export const createManager = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingManager = await Manager.findOne({ email });
    if (existingManager) {
      return res.status(400).json({ message: 'Un manager avec cet email existe déjà' });
    }
    const newManager = new Manager({ name, email, password });
    await newManager.save();

    res.status(201).json({ message: 'Manager créé avec succès', manager: newManager });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du manager', error });
  }
};
export const updateManager = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const manager = await Manager.findById(id);
    if (!manager) {
      return res.status(404).json({ message: 'Manager non trouvé' });
    }
    manager.name = name || manager.name;
    manager.email = email || manager.email;
    manager.password = password || manager.password;

    await manager.save();

    res.status(200).json({ message: 'Manager mis à jour avec succès', manager });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du manager', error });
  }
};

export const deleteManager = async (req, res) => {
  try {
    const { id } = req.params;

    const manager = await Manager.findById(id);
    if (!manager) {
      return res.status(404).json({ message: 'Manager non trouvé' });
    }
    await manager.remove();

    res.status(200).json({ message: 'Manager supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du manager', error });
  }
};
export const getAllManagers = async (req, res) => {
  try {
    const managers = await Manager.find();
    res.status(200).json(managers);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des managers', error });
  }
};
