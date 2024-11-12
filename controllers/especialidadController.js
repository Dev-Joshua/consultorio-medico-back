const EspecialidadService = require('../services/especialidadService');

// Obtener todas las especialidades
exports.getEspecialidades = async (req, res) => {
  try {
    const especialidades = await EspecialidadService.getAllEspecialidades();
    res.json(especialidades);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener especialidades' });
  }
};

// Crear una nueva especialidad
exports.createEspecialidad = async (req, res) => {
  try {
    const nuevaEspecialidad = await EspecialidadService.createEspecialidad(
      req.body,
    );
    res.status(201).json(nuevaEspecialidad);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear especialidad' });
  }
};

// Obtener una especialidad por ID
exports.getEspecialidadById = async (req, res) => {
  const { id } = req.params;
  try {
    const especialidad = await EspecialidadService.getEspecialidadById(id);
    if (especialidad) {
      res.json(especialidad);
    } else {
      res.status(404).json({ error: 'Especialidad no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener especialidad' });
  }
};

// Actualizar una especialidad
exports.updateEspecialidad = async (req, res) => {
  const { id } = req.params;
  try {
    const especialidadActualizada =
      await EspecialidadService.updateEspecialidad(id, req.body);
    res.json(especialidadActualizada);
  } catch (error) {
    if (error.message === 'Especialidad no encontrada') {
      res.status(404).json({ error: 'Especialidad no encontrada' });
    } else {
      res.status(500).json({ error: 'Error al actualizar especialidad' });
    }
  }
};

// Eliminar una especialidad
exports.deleteEspecialidad = async (req, res) => {
  const { id } = req.params;
  try {
    await EspecialidadService.deleteEspecialidad(id);
    res.status(204).send(); // No content
  } catch (error) {
    if (error.message === 'Especialidad no encontrada') {
      res.status(404).json({ error: 'Especialidad no encontrada' });
    } else {
      res.status(500).json({ error: 'Error al eliminar especialidad' });
    }
  }
};
