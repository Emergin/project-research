const express = require('express');
const router = express.Router();
const User = require('../models/user');
router.get('/', async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});
router.post('/', async (req, res) => {
	const user = new User({
		name: req.body.name,
		role: req.body.role
	});
	try {
		const newUser = await user.save();
		res.status(201).json(newUser);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});
module.exports = router;
