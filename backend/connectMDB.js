const mongoose = require('mongoose')
mongoose.set("strictQuery",true)

async function connectDataBase(url){
    return await mongoose.connect(url)
}

module.exports = connectDataBase