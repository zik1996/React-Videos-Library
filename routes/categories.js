const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categories")

router.get("/categories", categoryController.getCategories)

//GET => single category
router.get("/category/:id", categoryController.getCategory)

router.post("/addcategory", categoryController.postCategory)

module.exports = router;