const mongoose = require("mongoose")

const formatingSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required: true
    }
})

const formatingModel = mongoose.model("formating",formatingSchema)

module.exports = formatingModel