//Entidad Usuario
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcrypt');

const Usuario = sequelize.define(
  'Usuario',
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_usuario: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.ENUM('admin'),
      defaultValue: 'admin',
    },
  },
  {
    tableName: 'usuarios', // Nombre de la tabla en la base de datos
    timestamps: false,
    hooks: {
      beforeCreate: async (usuario) => {
        // Encriptar la contraseña antes de crear el usuario
        const salt = await bcrypt.genSalt(10);
        usuario.contrasena = await bcrypt.hash(usuario.contrasena, salt);
      },
      beforeUpdate: async (usuario) => {
        // Encriptar la contraseña antes de actualizar el usuario
        if (usuario.changed('contrasena')) {
          const salt = await bcrypt.genSalt(10);
          usuario.contrasena = await bcrypt.hash(usuario.contrasena, salt);
        }
      },
    },
  },
);

module.exports = Usuario;
