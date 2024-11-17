// Entidad Historial Medico
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Paciente = require('./Paciente');
const Consulta = require('./Consulta');

const Historial = sequelize.define(
  'Historial',
  {
    id_historial: {
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
    id_consulta: {
      type: DataTypes.INTEGER,
      references: {
        model: 'consulta_medica', // Nombre de la tabla en la base de datos
        key: 'id_consulta',
      },
      allowNull: false,
    },
    fecha_consulta: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    tratamiento: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: 'historial_medico', // Nombre de la tabla en la base de datos
    timestamps: false,
  },
);

// Definición de la relación
Historial.belongsTo(Paciente, { foreignKey: 'id_paciente' });
Historial.belongsTo(Consulta, { foreignKey: 'id_consulta' });

module.exports = Historial;
