const mongoose = require('mongoose')
 mongoose.connect("mongodb://localhost:27017/paytm")

 const userSchema = mongoose.Schema({
    username:String,
    password:String,
    firstname:String,
    lastname:String,
 })

 const User =mongoose.model("User",userSchema);
 module.export={
    User
 } 