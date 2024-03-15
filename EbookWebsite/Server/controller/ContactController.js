const contactModel = require("../model/ContactModel")

const contactController = async(req,res)=>{
    try {

        // Validation
        const {firstName, lastName, email, phone, message} = req.body
        if(!firstName) {
            return res.status(400).send("First Name is required")
        }
        if(!lastName) {
            return res.status(400).send("Last Name is required")
        }
        if(!email) {
            return res.status(400).send("Email is required")
        }
        if(!message) {
            return res.status(400).send("Messageis required")
        }

        // Save User
        const user = await new contactModel({
            firstName,
            lastName,
            email,
            phone,
            message
        }).save()
    
        res.status(200).send({
            success: true,
            message:"Your Response has been stored",
            user
        })
    
    } catch (error) {
        console.error(error)
        res.status(500).send({
            success: false,
            message: "Internal Server Error "
        })
    }
}

module.exports = {contactController}