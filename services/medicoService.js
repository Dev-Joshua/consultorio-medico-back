const Medico = require('../models/Medico');

class MedicoService {
  async getAllMedicos() {
    return await Medico.findAll();
  }

  async createMedico(data) {
    return await Medico.create(data);
  }

  async getMedicoById(id) {
    return await Medico.findByPk(id);
  }

  async updateMedico(id, data) {
    const medico = await Medico.findByPk(id);
    if (medico) {
      return await medico.update(data);
    }
    throw new Error('Medico no encontrado');
  }

  async deleteMedico(id) {
    const medico = await Medico.findByPk(id);
    if (medico) {
      await medico.destroy();
      return true; // Retorna true si se eliminó correctamente
    }
    throw new Error('Medico no encontrado');
  }
}

module.exports = new MedicoService();
