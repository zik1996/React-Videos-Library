const Video = require("../models/videos")

exports.getHome =  (req, res)=>{
    res.send("<h1>Welcome to videos DB project controller</h1>")
} 

exports.getVideos = (req, res)=>{
    Video.find()
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.postVideo = (req, res)=>{
    const VideoId = req.body.VideoId;
    const Title = req.body.Title;
    const Url = req.body.Url;
    const Comments = req.body.Comments;
    const Category_Id = req.body.Category_Id;

    const video = new Video({
        VideoId:VideoId,
        Title: Title,
        Url: Url,
        Comments:Comments,
        Category_Id:Category_Id
    })

    video.save()
    .then((result)=>{
        res.json({
            message:"Video Added Successfully",
            videos : result
        })
    })
    .catch(err=>{
        console.log(err)
    })
}