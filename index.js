const express = require('express')
require("dotenv").config()

app = express()

app.get('/',(req,res)=>{
    return res.json({
        name:"nouman aziz",
        f_name: "aziz ur rehman",
        program: "Bs computer sciense",
        semester: "7th semester",
        skills:["data science","mern stack"]
    });
})

const PORT = process.env.PORT || 6000

app.listen(PORT,()=>{console.log(`The server is runing on port number ${PORT}`)})