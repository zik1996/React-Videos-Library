const express = require("express");
const router = express.Router();

const videosController = require("../controllers/videos")

router.get("/", videosController.getHome);

//Get => /videos
router.get("/videos", videosController.getVideos);

//POST => /add-video
router.post("/add-video", videosController.postVideo);

module.exports = router;