const express = require('express');
const path = require('path')
const logout = express.Router();

logout.post('/', (req, res) => {
    res.clearCookie('uid'); // 'uid' is the cookie name you set during login
    res.sendFile(path.resolve(__dirname,'../public','index.html')); // or send a file, like res.sendFile(...)
});

module.exports = logout;
