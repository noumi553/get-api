const express = require('express')
const path = require('path')

const auth = express.Router()

auth.get('/', async(req,res)=>{
    return await res.sendFile(path.resolve(__dirname,'../public','signin.html'))
})

module.exports = auth