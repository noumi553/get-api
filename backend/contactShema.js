const mongoose = require("mongoose")

const contactModels =  new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
    }
});

const cModel = mongoose.model("message",contactModels)

module.exports = cModel