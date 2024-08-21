const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
require('dotenv').config()

const videosRoutes = require("./routes/videos")
const categoryRoutes = require("./routes/categories")
const userRoutes = require("./routes/users")
const adminRoutes = require("./routes/admin")

const app = express();
MONGO_URI = process.env.MONGO_URI;

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.use(videosRoutes)
app.use(categoryRoutes)
app.use(userRoutes)
app.use(adminRoutes)

mongoose.connect(MONGO_URI)
.then(()=>{
    console.log("Data base connected")
})
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT} created`)
    })
})
.catch(err=>{
    console.log(err)
})