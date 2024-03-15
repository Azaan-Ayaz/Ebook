const express = require("express")
const {createConsultantController, getConsultantController} = require("../controller/ConsultantController") 

const consultantRoute = express.Router()

consultantRoute.post("/create-consultant_user",createConsultantController)
consultantRoute.get("/get-consultant_user",getConsultantController)

module.exports = consultantRoute