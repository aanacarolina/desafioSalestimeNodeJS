const express = require("express")
const cors = require("cors")
const db = require("./data/databaseConfig")

db.connect()

const app = express()

app.use(cors())
app.use(express.json())


const index = require("./routes/index")
const users = require("./routes/userRoutes")


app.use("/", index)
app.use("/users", users)

module.exports = app