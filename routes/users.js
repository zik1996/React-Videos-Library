const express = require("express");
const router = express.Router();

const userController = require("../controllers/users")

router.get("/users", userController.getUsers)

router.post("/add-users", userController.postUser)

module.exports = router;