let mongoose=require('mongoose');

let userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const user=mongoose.model("user",userSchema,"users")

module.exports=user;