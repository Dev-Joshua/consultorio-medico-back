// Entidad Medico
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Medico = sequelize.define(
  'Medico',
  {
    id_medico: {
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
    cedula: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    id_especialidad: {
      type: DataTypes.INTEGER,
      references: {
        model: 'especialidades', // Nombre de la tabla en la base de datos
        key: 'id_especialidad',
      },
    },
    fecha_registro: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'medicos', // Nombre de la tabla en la base de datos
    timestamps: false,
  },
);

//Relacion
Medico.belongsTo(Especialidad, { foreignKey: 'id_especialidad' });

module.exports = Medico;
