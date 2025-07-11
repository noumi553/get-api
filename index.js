const express = require('express')
const home = require('./backend/home')
const connectDataBase = require('./backend/connectMDB')
const contact = require('./backend/contact')
const auth = require('./backend/auth')
const postAuth = require('./backend/postAuth')
require("dotenv").config()
const path = require('path')
app = express()

const url = process.env.MONGO_URL
connectDataBase(url).then(()=>{console.log('mongoose data base is connected')}).catch((error)=>{console.log(error)})

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//api keys
app.use('/signup',postAuth)


//routes
app.use('/',home)
app.use('/contact',contact)
app.use('/auth',auth)

app.get('/api',(req,res)=>{
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