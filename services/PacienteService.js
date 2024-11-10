const Paciente = require('../models/Paciente');

class PacienteService {
  async getAllPacientes() {
    return await Paciente.findAll();
  }

  async createPaciente(data) {
    return await Paciente.create(data);
  }

  async getPacienteById(id) {
    return await Paciente.findByPk(id);
  }

  async updatePaciente(id, data) {
    const paciente = await Paciente.findByPk(id);
    if (paciente) {
      return await paciente.update(data);
    }
    throw new Error('Paciente no encontrado');
  }

  async deletePaciente(id) {
    const paciente = await Paciente.findByPk(id);
    if (paciente) {
      await paciente.destroy();
      return true; // Retorna true si se eliminó correctamente
    }
    throw new Error('Paciente no encontrado');
  }
}

module.exports = new PacienteService();
