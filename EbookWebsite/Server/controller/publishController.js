const publishModel = require("../model/publishingModel")

const createPublsihController = async(req,res)=>{
    try {
        const {name, email, message} = req.body
        const user = await new publishModel({
            name,
            email,
            message
        }).save()
        res.status(200).send({
            success: true,
            mesage:"Your response has been submitted",
            user:{
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        console.error(error)
        res.status(400).send({
            success: false,
            message: "Internal server error"
        })
    }
}

const getPublishController = async(req,res)=>{
    try {
        const user = await publishModel.findOne({})
        if (!user){
            return res.status(401).send("User not found")
        }

        res.status(200).send({
            success: true,
            message:"User's Data",
            user
        })
    } catch (error) {
        console.error(error)
        res.status(400).send({
            success: false,
            message:"Internal server error"
        })
    }
}

module.exports = {getPublishController, createPublsihController}