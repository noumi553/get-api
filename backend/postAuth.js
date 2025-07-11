const express = require('express');
const path = require('path');
const model = require('./authSchema');

const postAuth = express.Router();

postAuth.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate required fields
        if (!name || !email || !password) {
            return res.status(400).send("Please fill in all required fields.");
        }

        // Check if user already exists (optional but recommended)
        const existingUser = await model.findOne({ email });
        if (existingUser) {
            return res.status(409).send("User with this email already exists.");
        }

        // Create the user
        await model.create({ name, email, password });

        // Redirect or serve sign-in page
        return res.sendFile(path.resolve(__dirname, '../public', 'signin.html'));
    } catch (error) {
        console.error('Signup error:', error);
        return res.status(500).send("Internal Server Error. Please try again.");
    }
});

module.exports = postAuth;
