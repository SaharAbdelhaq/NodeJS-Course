const mysql = require("mysql2");

let pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "testing-db",
});

module.exports = pool;
