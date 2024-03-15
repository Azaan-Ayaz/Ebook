const express = require("express")
const {getPublishController, createPublsihController} = require("../controller/publishController")

const pubishRoute = express.Router()

pubishRoute.post("/create-publish",createPublsihController)
pubishRoute.get("/get-publish",getPublishController)

module.exports = pubishRoute