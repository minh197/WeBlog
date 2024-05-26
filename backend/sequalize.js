const { Sequelize } = require("sequelize");


const sequelize = new Sequelize('postgres://mnguyen411:minh123@localhost:5432/travelblog') // Adjust the connection parameters as needed.

module.exports = sequelize;
