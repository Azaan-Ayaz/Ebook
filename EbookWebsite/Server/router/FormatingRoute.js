const express = require("express")
const {createFormatingController, getFormatingController} = require("../controller/formatingController")

const formatingRoute = express.Router()

formatingRoute.post("/create-formating",createFormatingController)
formatingRoute.get("/get-formating",getFormatingController)

module.exports = formatingRoute