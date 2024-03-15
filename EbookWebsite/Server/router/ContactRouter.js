const express = require("express")
const { contactController } = require("../controller/ContactController")

const router = express.Router()

router.post("/create-contact", contactController)

module.exports = router