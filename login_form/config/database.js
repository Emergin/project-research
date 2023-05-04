const mysql = require('mysql2');
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '$#@trubel',
  database: 'myDB',
};
const connection = mysql.createConnection(dbConfig);
connection.connect();
module.exports = connection;
