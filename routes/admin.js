const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin")

router.get("/admin", adminController.getAdmin)

router.post("/add-admin", adminController.postAdmin)

module.exports = router;