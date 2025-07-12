const jwt = require("jsonwebtoken");
require("dotenv").config()
const secreteKey = process.env.SECTET_KEY;

function setTheUser(user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
    }, secreteKey)
};

function getTheUser(token) {
    if (!token) return null
    return jwt.verify(token, secreteKey)
}

module.exports = {
    setTheUser,
    getTheUser,
}