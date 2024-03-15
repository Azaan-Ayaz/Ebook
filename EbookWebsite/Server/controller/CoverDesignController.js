const coverDesignModel = require("../model/coverDesignModel")

const createCoverDesign = async(req,res)=>{
    try {
        const {name, email, message} = req.body
        const user = await new coverDesignModel({
            name,
            email,
            message
        }).save()
        res.status(200).send({
            success: true,
            message: "Your response has been submitted",
            user:{
                name: user.name
            }
        })
    } catch (error) {
        console.error(error)
        res.status(400).send({
            success:false,
            messsage:"Something went wrong`"
        })
    }
}

const getCoverDesign = async(req,res)=>{
    try {
        const user = await coverDesignModel.findOne({})
        if (!user){
            return res.status(200).send("User not found")
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
            message: "Something went wrong"
        })
    }
}

module.exports = {createCoverDesign, getCoverDesign}