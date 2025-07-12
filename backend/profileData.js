const { getTheUser } = require('./token');
const express = require('express')
const models = require('./authSchema')

const profileData = express.Router()

profileData.get('/', async (req, res) => {
    const token = req.cookies?.uid;
    if (!token) {
        return res.status(401).json({ error: 'No token found' });
    }

    const user = getTheUser(token);
    if (!user) {
        return res.status(401).json({ error: 'Invalid token' });
    }

    // Optionally fetch fresh data from DB
    const fullUser = await models.findById(user._id).select('name email');
    if (!fullUser) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json({
        name: fullUser.name,
        email: fullUser.email
    });
});

module.exports=profileData