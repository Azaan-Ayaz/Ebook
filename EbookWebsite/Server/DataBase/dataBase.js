const mongoose = require("mongoose")

const dataBase = async() => {
    try {
        await mongoose.connect("mongodb+srv://azaan:azaan@cluster0.deanbuu.mongodb.net/E-book")
        console.log("Database is connected")
    } catch (error) {
        console.log({
            message: 'Database is not conneted',
            error: error
        })
    }
}

module.exports = dataBase