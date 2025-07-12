const express = require('express');
const path = require('path');
const models = require('./authSchema');

const postAuth = express.Router();

postAuth.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.send("Please fill in all required fields.");
        }

        // Check if email already exists
        const existingUser = await models.findOne({ email: email });
        if (existingUser) {
            return res.send("Email is already registered.");
        }

        // Create new user
        await models.create({ name, email, password });

        // Redirect or serve sign-in page
        return res.sendFile(path.resolve(__dirname, '../public', 'signin.html'));
    } catch (error) {
        console.error('Signup error:', error);
        return res.status(500).send("Internal Server Error. Please try again.");
    }
});

module.exports = postAuth;
