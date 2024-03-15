const mongoose = require("mongoose")

const writingSchema = new mongoose.Schema({
    name:{
        type: String,
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

const writingModel = mongoose.model("writing",writingSchema)

module.exports = writingModel