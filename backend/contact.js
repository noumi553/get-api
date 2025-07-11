const express = require('express')
const path = require('path')

const contact = express.Router()

contact.get('/', async (req, res) => {
    return await res.sendFile(path.resolve(__dirname, '../public', 'Contact.html'))
})

module.exports = contact