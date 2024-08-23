const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    UserId: {
        type : String,
        required : true
    },
    UserName : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    Mobile : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("user", userSchema)