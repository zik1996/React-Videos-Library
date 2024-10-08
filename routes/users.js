const express = require("express");
const router = express.Router();

const userController = require("../controllers/users")

router.get("/users", userController.getUsers)

//GET => Get single video
router.get("/user/:id", userController.getUser)

// Add File Using Multer Option
router.post("/adduser", userController.postUser)

module.exports = router;
