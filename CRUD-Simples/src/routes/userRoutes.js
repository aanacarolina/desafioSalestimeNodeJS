const express = require("express")
const router = express.Router()
const controller = require("../controllers/userController")


router.get("/user", controller.getAll)

router.post("/user", controller.createUser)

router.get("/user/:id", controller.getById)

router.patch("/user/:id", controller.updateUser)

router.delete("/user/:id", controller.deleteUser)

module.exports = router