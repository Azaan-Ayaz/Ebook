const express = require("express")
const {createWritingController, getWritingController} = require("../controller/writingController")

const writingRouter = express.Router()

writingRouter.post("/create-writing",createWritingController)
writingRouter.get("/get-writing",getWritingController)

module.exports = writingRouter