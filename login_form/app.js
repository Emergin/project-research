const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Define a route for serving the form
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'login.html');
  res.sendFile(filePath);
});

// Define a route for submitting the form
app.post('/submit-name', (req, res) => {
  const name = req.body.name;
  res.send(`Hello, ${name}!`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
