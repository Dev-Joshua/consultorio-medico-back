const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const registrarUsuario = async (data) => {
  return await Usuario.create(data);
};

const loginUsuario = async (nombre_usuario, contrasena) => {
  const usuario = await Usuario.findOne({ where: { nombre_usuario } });
  if (!usuario) {
    console.log('Usuario no encontrado:', nombre_usuario);
    throw new Error('Usuario no encontrado');
  }
  console.log('Usuario encontrado:', usuario);

  const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);
  console.log('¿Las contraseñas coinciden?:', isMatch);
  if (!isMatch) {
    throw new Error('Credenciales inválidas');
  }
  const token = jwt.sign(
    { id_usuario: usuario.id_usuario },
    process.env.JWT_SECRET,
    { expiresIn: '1h' },
  );
  return { token };
};

module.exports = {
  registrarUsuario,
  loginUsuario,
};
