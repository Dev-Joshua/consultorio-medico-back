const Especialidad = require('../models/Especialidad');

class EspecialidadService {
  async getAllEspecialidades() {
    return await Especialidad.findAll({
      order: [['id_especialidad', 'ASC']],
    });
  }

  async createEspecialidad(data) {
    return await Especialidad.create(data);
  }

  async getEspecialidadById(id) {
    return await Especialidad.findByPk(id);
  }

  async updateEspecialidad(id, data) {
    const especialidad = await Especialidad.findByPk(id);
    if (especialidad) {
      return await especialidad.update(data);
    }
    throw new Error('Especialidad no encontrada');
  }

  async deleteEspecialidad(id) {
    const especialidad = await Especialidad.findByPk(id);
    if (especialidad) {
      await especialidad.destroy();
      return true; // Retorna true si se eliminó correctamente
    }
    throw new Error('Especialidad no encontrada');
  }
}

module.exports = new EspecialidadService();
