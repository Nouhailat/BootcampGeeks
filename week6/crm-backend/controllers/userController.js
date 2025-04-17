import Manager from '../models/Manager.js'; 


export const createManager = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const manager = new Manager({name,email,password,
    });

    await manager.save();
    res.status(201).json({
      message: 'Manager créé avec succès',
      manager,
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du manager', error });
  }
};
export const updateManager = async (req, res) => {
    try {
      const { managerId } = req.params;
      const { name, email, password } = req.body;
      const manager = await Manager.findById(managerId);
      if (!manager) {
        return res.status(404).json({ message: 'Manager not found' });
      }
      manager.name = name || manager.name;
      manager.email = email || manager.email;
      manager.password = password || manager.password; 
  
      await manager.save();
      
      return res.status(200).json({ message: 'Manager updated successfully', manager });
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error });
    }
  };
  export const deleteManager = async (req, res) => {
    try {
      const { managerId } = req.params;
  
      const manager = await Manager.findByIdAndDelete(managerId);
  
      if (!manager) {
        return res.status(404).json({ message: 'Manager not found' });
      }
  
      return res.status(200).json({ message: 'Manager deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Server error', error });
    }
  };
  export const getAllManagers = async (req, res) => {
    try {
      const managers = await Manager.find(); 
      res.status(200).json(managers);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération des managers" });
    }
  };