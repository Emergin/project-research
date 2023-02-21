const express = require('express');
const mariadb = require('mariadb');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// create a connection pool to the MariaDB database
const pool = mariadb.createPool({
  host: 'localhost:3000',
  user: 'root',
  password: '',
  database: 'user', table: 'users'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API endpoint to handle form submissions
app.post('/api/submit', (req, res) => {
  const { name } = req.body;
  pool.getConnection((err, conn) => {
    if (err) throw err;
    const query = 'INSERT INTO users (name) VALUES (?)';
    conn.query(query, [name], (err, results) => {
      if (err) throw err;
      res.send({ message: 'User added successfully' });
      conn.release();
    });
  });
});

// start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
