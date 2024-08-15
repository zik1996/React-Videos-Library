const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    Category_Id :{
        type : Number,
        required : true
    },
    CategoryName :{
        type : String,
        required : true
    }
})

module.exports = mongoose.model("category", categorySchema)