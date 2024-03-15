const mongoose = require("mongoose")

const consultantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

const consultantModel = mongoose.model("Consultant",consultantSchema)

module.exports = consultantModel