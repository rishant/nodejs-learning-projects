const Sequelize = require("sequelize");

// Multple profile support for Environment.
const envPath = process.env.NODE_ENV == null ? `.env`: `.env.${process.env.NODE_ENV}`;
require('dotenv').config({ path: envPath })

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
});

module.exports = sequelize;