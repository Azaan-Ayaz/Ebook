const mongoose = require("mongoose")

const publishSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
})

const publishModel = mongoose.model("publish",publishSchema)

module.exports = publishModel