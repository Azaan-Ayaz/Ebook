const formatingModel = require("../model/formatingModel")

const createFormatingController = async(req,res)=>{
    try {
        const {name,email,message} = req.body
        const user = await new formatingModel({
            name,
            email,
            message
        }).save()
        res.status(200).send({
            success: true,
            message:"Your response has been submitted",
            user:{
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        console.error(error)
        res.status(400).send({
            success: false,
            message: "Something went wrong"
        })
    }
}

const getFormatingController = async(req,res)=>{
    try {
        const user = await formatingModel.findOne({})
        if (!user){
            return res.status(401).send("User not found")
        }
        res.status(200).send({
            success: true,
            message:"Your data",
            user
        })
    } catch (error) {
        console.error(error)
    }
}

module.exports = {createFormatingController, getFormatingController}