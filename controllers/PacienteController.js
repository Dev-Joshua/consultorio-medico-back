const Paciente = require('../models/Paciente'); // Importar modelo de Paciente

// Obtener todos los pacientes
exports.getPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener pacientes' });
  }
};

// Crear un nuevo paciente
exports.createPaciente = async (req, res) => {
  try {
    const nuevoPaciente = await Paciente.create(req.body);
    res.status(201).json(nuevoPaciente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear paciente' });
  }
};

// Otros métodos (actualizar, eliminar, etc.)...
