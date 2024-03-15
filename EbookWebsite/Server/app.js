const express = require("express")
const dataBase = require("./DataBase/dataBase")
const router = require("./router/ContactRouter")
const app = express()
const cors = require("cors")
const writingRouter = require("./router/writingRoutes")
const formatingRoute = require("./router/FormatingRoute")
const coverDesignRoute = require("./router/coverDesignRouter")
const pubishRoute = require("./router/publishRoute")
const consultantRoute = require("./router/ConsultantRoute")

dataBase()
app.use(cors())
app.use(express.json())

// Contact Us Page Route
app.use("/",router)
app.use("/",writingRouter)
app.use("/",formatingRoute)
app.use("/",coverDesignRoute)
app.use("/",pubishRoute)
app.use("/",consultantRoute)

PORT = 8080

app.listen(PORT, ()=>{
    console.clear()
    console.log(`Server is running on port ${PORT}`)
})