const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'dev',
  password: 'squiddy',
  database: 'car_rentalsDb',
});

module.exports = db;
