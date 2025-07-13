const express = require('express');
const home = require('./backend/home');
const connectDataBase = require('./backend/connectMDB');
const contact = require('./backend/contact');
const auth = require('./backend/auth');
const postAuth = require('./backend/postAuth');
const login = require('./backend/login');
const contactMessage = require('./backend/contectMe');
const { midelware } = require('./backend/midelware');
const cookieParser = require('cookie-parser');
const logout = require('./backend/logout');
require("dotenv").config();
app = express();

const url = process.env.MONGO_URL
connectDataBase(url).then(() => { console.log('mongoose data base is connected') }).catch((error) => { console.log(error) })

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//api keys
app.use('/login', login);
app.use('/signup', postAuth);
app.use('/contacts', contactMessage);


//routes
app.use('/', home);
app.use('/contact', midelware, contact);
app.use('/auth', auth);
app.use('/logout',logout);

app.get('/api', (req, res) => {
    return res.json({
        name: "nouman aziz",
        f_name: "aziz ur rehman",
        program: "Bs computer sciense",
        semester: "7th semester",
        skills: ["data science", "mern stack"]
    });
});



const PORT = process.env.PORT || 6000

app.listen(PORT, () => { console.log(`The server is runing on port number ${PORT}`) });