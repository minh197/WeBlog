const { Sequelize } = require("sequelize");
require("dotenv").config();


const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_NAME}`) // Adjust the connection parameters as needed.

module.exports = sequelize;
