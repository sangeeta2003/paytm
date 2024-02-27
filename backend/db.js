const mongoose = require('mongoose')
 mongoose.connect("mongodb://localhost:27017/paytm")

 const userSchema = mongoose.Schema({
    username:{
     type: String,
     required:true,
     unique:true,
     trim:true,
     lowerCase:true,
     maxlength:30,
     minlength:5
   },
    password:{
     type: String,
     required:true,
     unique:true,
     maxlength:20,
     minlength:5,

   },
    firstname:{
      type:String,
      required:true,
      unique:true,
      maxlength:20,
      minlength:5,
    },
    lastname:{
      type:String,
      required:true,
      unique:true,
      maxlength:20,
      minlength:5,
    }
 })

 const User =mongoose.model("User",userSchema);
 module.export={
    User
 } 