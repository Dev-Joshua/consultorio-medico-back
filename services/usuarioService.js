const Usuario = require('../models/Usuario');

class UsuarioService {
  async getAllUsuarios() {
    return await Usuario.findAll();
  }

  async createUsuario(data) {
    return await Usuario.create(data);
  }

  async getUsuarioById(id) {
    return await Usuario.findByPk(id);
  }

  async updateUsuario(id, data) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
    return await usuario.update(data);
  }

  async deleteUsuario(id) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }
    await usuario.destroy();
  }
}

module.exports = new UsuarioService();
