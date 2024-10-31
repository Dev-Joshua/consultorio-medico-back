// models/Consulta.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Consulta = sequelize.define(
  'Consulta',
  {
    id_consulta: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_paciente: {
      type: DataTypes.INTEGER,
      references: {
        model: 'pacientes', // Nombre de la tabla en la base de datos
        key: 'id_paciente',
      },
      allowNull: false,
    },
    id_medico: {
      type: DataTypes.INTEGER,
      references: {
        model: 'medicos', // Nombre de la tabla en la base de datos
        key: 'id_medico',
      },
      allowNull: false,
    },
    motivo_consulta: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tratamiento: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM('Confirmada', 'Cancelada', 'Pendiente'),
      defaultValue: 'Pendiente',
    },
    fecha_cita: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    hora_cita: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    tableName: 'consulta_medica', // Nombre de la tabla en la base de datos
    timestamps: false,
  },
);

// Definición de las relaciones
Consulta.belongsTo(Medico, { foreignKey: 'id_medico' });
Consulta.belongsTo(Paciente, { foreignKey: 'id_paciente' });

module.exports = Consulta;
