const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin")

// GET => /admin
router.get("/admin", adminController.getAdmin)

// POST => /add-admin
router.post("/add-admin", adminController.postAdmin)

module.exports = router;