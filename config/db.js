const { Sequelize } = require('sequelize');
require('dotenv').config();

const dbConnect = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    timezone: '-05:00',
  },
);

module.exports = dbConnect;
