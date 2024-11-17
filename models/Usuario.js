//Entidad Usuario
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
  },
);

module.exports = Usuario;
