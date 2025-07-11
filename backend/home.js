const express = require('express')
const path = require('path')

const home = express.Router()

home.get('/',(req,res)=>{
    return res.sendFile(path.resolve(__dirname,'../public','index.html'))
})

module.exports = home;