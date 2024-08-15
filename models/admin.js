const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    adminId : {
        type : String,
        required : true
    },
    adminName : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
 
})

module.exports = mongoose.model("admin", adminSchema)