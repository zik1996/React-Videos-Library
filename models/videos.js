const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    VideoId :{
        type : Number,
        required:true,
        unique: true
    },
    Title :{
        type : String
    },
    Url :{
        type : String
    },
    Comments :{
        type: String
    },
    Likes : {
        type: Number
    },
    Category_Id :{
        type: Number
    }
})

module.exports = mongoose.model("Video", videoSchema)