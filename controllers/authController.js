const AuthSevice = require('../services/authService');

const registrar = async (req, res) => {
  try {
    const usuario = await AuthSevice.registrarUsuario(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { nombre_usuario, contrasena } = req.body;
    const token = await AuthSevice.loginUsuario(nombre_usuario, contrasena);
    res.status(200).json(token);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = {
  registrar,
  login,
};
