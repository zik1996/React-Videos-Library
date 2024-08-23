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
    const Likes = req.body.Likes;
    const Category_Id = req.body.Category_Id;

    const video = new Video({
        VideoId:VideoId,
        Title: Title,
        Url: Url,
        Comments:Comments,
        Likes : Likes,
        Category_Id:Category_Id
    })

    video.save()
    .then((result)=>{
      res.send(result)
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getVideo = (req, res, next)=>{
    let id = parseInt(req.params.id)
    Video.find({VideoId : id})
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.postEditVideo = (req, res)=>{
    let id = parseInt(req.params.id);

    let updateVideo = {
        VideoId : req.body.VideoId,
        Title : req.body.Title,
        Url : req.body.Url,
        Comments : req.body.Comments,
        Likes : req.body.Likes,
        Category_Id : req.body.Category_Id,

    }
    Video.findOneAndUpdate({VideoId:id}, {$set:updateVideo})
    .then(result=>{
        res.json({
            message : "Video Updated Successfully"
        })
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.postDeleteVideo = (req, res, next)=>{
    let id = parseInt(req.params.id);

    Video.findOneAndDelete({VideoId:id})
    .then(result=>{
        res.json({
            message: "Video Deleted successfully",
            video : result
        })
    })
}