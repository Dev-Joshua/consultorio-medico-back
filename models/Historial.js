// Entidad Historial Medico
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
    enfermedad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tratamiento: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fecha_registro: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'historial_medico', // Nombre de la tabla en la base de datos
    timestamps: false,
  },
);

// Definición de la relación
Historial.belongsTo(Paciente, { foreignKey: 'id_paciente' });

module.exports = Historial;
