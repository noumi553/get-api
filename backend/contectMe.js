const express = require("express")
const path = require("path")
const cModel = require("./contactShema")

const contactMessage = express.Router()

contactMessage.post("/", async (req, res) => {
    const { name, email, message } = req.body
    if (!name || !email || !message) return res.send("Please fill the message")
    await cModel.create({name,email,message});
    return res.sendFile(path.resolve(__dirname,'../public','Contact.html'))
});

module.exports = contactMessage