// models/Especialidad.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Especialidad = sequelize.define(
  'Especialidad',
  {
    id_especialidad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_especialidad: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    tableName: 'especialidades',
    timestamps: false,
  },
);

module.exports = Especialidad;
