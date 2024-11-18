const Historial = require('../models/Historial');

class HistorialService {
  async getAllHistorialM() {
    return await Historial.findAll();
  }

  async createHistorial(data) {
    return await Historial.create(data);
  }

  async getHistorialById(id) {
    return await Historial.findByPk(id);
  }

  async updateHistorial(id, data) {
    const historial = await Historial.findByPk(id);
    if (!historial) {
      throw new Error('Historial medico no encontrado');
    }
    return await historial.update(data);
  }

  async deleteHistorial(id) {
    const historial = await Historial.findByPk(id);
    if (!historial) {
      throw new Error('Historial medico no encontrado');
    }
    await historial.destroy();
  }
}

module.exports = new HistorialService();
