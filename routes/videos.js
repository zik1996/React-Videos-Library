const express = require("express");
const router = express.Router();

const videosController = require("../controllers/videos")

router.get("/", videosController.getHome);

//Get => /videos
router.get("/videos", videosController.getVideos);

//Get => /videos
router.get("/video/:id", videosController.getVideo);

//POST => /add-video
router.post("/addvideo", videosController.postVideo);

//POST => /editvideo/:id
router.put("/editvideo/:id", videosController.postEditVideo)

//POST => /deletevideo/:id
router.delete("/deletevideo/:id", videosController.postDeleteVideo)

module.exports = router;