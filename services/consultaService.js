const Consulta = require('../models/Consulta');

class ConsultaService {
  async getAllConsultas() {
    return await Consulta.findAll();
  }

  async createConsulta(data) {
    return await Consulta.create(data);
  }

  async getConsultaById(id) {
    return await Consulta.findByPk(id);
  }

  async updateConsulta(id, data) {
    const consulta = await Consulta.findByPk(id);
    if (!consulta) {
      throw new Error('Consulta medica no encontrada');
    }
    return await consulta.update(data);
  }

  async deleteConsulta(id) {
    const consulta = await Consulta.findByPk(id);
    if (!consulta) {
      throw new Error('Consulta medica no encontrada');
    }
    await consulta.destroy();
  }
}

module.exports = new ConsultaService();
