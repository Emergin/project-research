const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const dbUrl = 'mongodb://localhost:27017/User';
mongoose.connect(dbUrl, { useNewParser: true, useUnifiedTopology: true})
	.then(() => {
		console.log('connected to mongodb');
	})
	.catch((error) => {
		console.error('error connecting to mmongodb:', error);
	});


const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

