const PacienteService = require('../services/pacienteService');

// Obtener todos los pacientes
exports.getPacientes = async (req, res) => {
  try {
    const pacientes = await PacienteService.getAllPacientes();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener pacientes' });
  }
};

// Crear un nuevo paciente
exports.createPaciente = async (req, res) => {
  try {
    const nuevoPaciente = await PacienteService.createPaciente(req.body);
    res.status(201).json(nuevoPaciente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear paciente' });
  }
};

// Obtener un paciente por ID
exports.getPacienteById = async (req, res) => {
  const { id } = req.params;
  try {
    const paciente = await PacienteService.getPacienteById(id);
    if (paciente) {
      res.json(paciente);
    } else {
      res.status(404).json({ error: 'Paciente no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener paciente' });
  }
};

// Actualizar un paciente
exports.updatePaciente = async (req, res) => {
  const { id } = req.params;
  try {
    const pacienteActualizado = await PacienteService.updatePaciente(
      id,
      req.body,
    );
    res.json(pacienteActualizado);
  } catch (error) {
    if (error.message === 'Paciente no encontrado') {
      res.status(404).json({ error: 'Paciente no encontrado' });
    } else {
      res.status(500).json({ error: 'Error al actualizar paciente' });
    }
  }
};

// Eliminar un paciente
exports.deletePaciente = async (req, res) => {
  const { id } = req.params;
  try {
    await PacienteService.deletePaciente(id);
    res.status(204).send(); // No content
  } catch (error) {
    if (error.message === 'Paciente no encontrado') {
      res.status(404).json({ error: 'Paciente no encontrado' });
    } else {
      res.status(500).json({ error: 'Error al eliminar paciente' });
    }
  }
};
