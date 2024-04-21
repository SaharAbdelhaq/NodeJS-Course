//Configuration file for Sequelize.

const Sequelize = require("sequelize");

const sequelize = new Sequelize("testing-db", "root", "123456", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
