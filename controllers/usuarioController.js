const UsuarioService = require('../services/usuarioService');

exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await UsuarioService.getAllUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Error al obtener los usuarios',
      details: error.message,
    });
  }
};

exports.createUsuario = async (req, res) => {
  try {
    const nuevoUsuario = await UsuarioService.createUsuario(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Error al crear usuario', details: error.message });
  }
};

exports.getUsuarioById = async (req, res) => {
  try {
    const usuario = await UsuarioService.getUsuarioById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Error al obtener el usuario', details: error.message });
  }
};

exports.updateUsuario = async (req, res) => {
  try {
    const usuario = await UsuarioService.updateUsuario(req.params.id, req.body);
    res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Error al actualizar el usuario',
      details: error.message,
    });
  }
};

exports.deleteUsuario = async (req, res) => {
  try {
    await UsuarioService.deleteUsuario(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Error al eliminar el usuario', details: error.message });
  }
};
