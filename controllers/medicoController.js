const MedicoService = require('../services/medicoService');

// Obtener todos los medicos
exports.getMedicos = async (req, res) => {
  try {
    const medicos = await MedicoService.getAllMedicos();
    res.json(medicos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los doctores' });
  }
};

// Crear un nuevo medico
exports.createMedico = async (req, res) => {
  try {
    const nuevoMedico = await MedicoService.createMedico(req.body);
    res.status(201).json(nuevoMedico);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el medico' });
  }
};

// Obtener un medico por ID
exports.getMedicoById = async (req, res) => {
  const { id } = req.params;
  try {
    const medico = await MedicoService.getMedicoById(id);
    if (medico) {
      res.json(medico);
    } else {
      res.status(404).json({ error: 'Doctor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el medico' });
  }
};

// Actualizar un medico
exports.updateMedico = async (req, res) => {
  const { id } = req.params;
  try {
    const medicoActualizado = await MedicoService.updateMedico(id, req.body);
    res.json(medicoActualizado);
  } catch (error) {
    if (error.message === 'Doctor no encontrado') {
      res.status(404).json({ error: 'Doctor no encontrado' });
    } else {
      res.status(500).json({ error: 'Error al actualizar el medico' });
    }
  }
};

// Eliminar un medico
exports.deleteMedico = async (req, res) => {
  const { id } = req.params;
  try {
    await MedicoService.deleteMedico(id);
    res.status(204).send(); // No content
  } catch (error) {
    if (error.message === 'Doctor no encontrado') {
      res.status(404).json({ error: 'Doctor no encontrado' });
    } else {
      res.status(500).json({ error: 'Error al eliminar el medico' });
    }
  }
};
