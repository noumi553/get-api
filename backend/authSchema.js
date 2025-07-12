const mongoose = require('mongoose')

const schemaModel = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const models = mongoose.model('auth', schemaModel)
module.exports = models