// Entidad Paciente
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Paciente = sequelize.define(
  'Paciente',
  {
    id_paciente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sexo: {
      type: DataTypes.ENUM('M', 'F'), // M: Masculino, F: Femenino
      allowNull: false,
    },
    cedula: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'pacientes', // Nombre de la tabla en la base de datos
    timestamps: false,
  },
);

module.exports = Paciente;
