const consultantModel = require("../model/ConsultantModel")

const createConsultantController = async(req,res) => {
    try {

        // Validation
        const {name, email, message} = req.body
        if (!name){
            return res.status(401).send("Name is required")
        }
        if (!email){
            return res.status(401).send("Email is required")
        }
        if (!message){
            return res.status(401).send("Message s required")
        }

        const user = new consultantModel({
            name,
            email,
            message
        }).save()
        res.status(200).send({
            success: true,
            message:"Your reponse has been submitted"
        })
    } catch (error) {
        console.error(error)
        res.status(400).send({
            success: false,
            message:"Something went wrong"
        })
    }
}

const getConsultantController = async(req,res) =>{
    try {
        const user = await consultantModel.findOne({})
        if (!user){
            res.status(401).send({
                success: false,
                message: "User's data not found"
            })
            res.status(200).send({
                success: true,
                message:"User's data list",
                user:{
                    name: user.name,
                    email: user.email,
                    mesasge: user.message
                }
            })
        }
    } catch (error) {
        console.error(error)
        res.status(400).send({
            success: false,
            message: "Something went wrong"
        })
    }
}

module.exports = {createConsultantController, getConsultantController}