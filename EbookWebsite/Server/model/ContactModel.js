const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required : true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number
    },
    message:{
        type: String,
    }
})

const contactModel = mongoose.model("Contact",contactSchema)

module.exports = contactModel