const express = require('express')
const path = require('path')
const models = require('./authSchema')
const { setTheUser } = require('./token')

const login = express.Router()

login.post('/', async (req, res) => {
    const { email, password } = req.body
    let user = await models.findOne({ email, password });
    if (!user) {
        return res.status(401).send('Invalid email or password');
    }
    const token = setTheUser(user);
    res.cookie("uid", token);
    res.sendFile(path.resolve(__dirname, '../public', 'Contact.html'));
})


module.exports = login