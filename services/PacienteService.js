const Paciente = require('../models/Paciente');

class PacienteService {
  async getAllPacientes() {
    return await Paciente.findAll();
  }

  async createPaciente(data) {
    return await Paciente.create(data);
  }

  // Otros métodos (actualizar, eliminar, etc.)...
}

module.exports = new PacienteService();
