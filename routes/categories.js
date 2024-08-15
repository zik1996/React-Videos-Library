const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categories")

router.get("/categories", categoryController.getCategories)

router.post("/add-category", categoryController.postCategory)

module.exports = router;