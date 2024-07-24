
  let mongoose=require('mongoose');

  let adminSchema=new mongoose.Schema({
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
  
  const admin=mongoose.model("admin",adminSchema,"admin")
  
  module.exports=admin;