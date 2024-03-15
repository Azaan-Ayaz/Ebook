const express = require("express")
const {createCoverDesign, getCoverDesign} = require("../controller/CoverDesignController")

const coverDesignRoute = express.Router()

coverDesignRoute.post("/create-cover_design",createCoverDesign)

coverDesignRoute.get("/get-cover_design",getCoverDesign)

module.exports = coverDesignRoute