let mongoose=require('mongoose');

let doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    speciality:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    }
})

const doctor=mongoose.model("doctor",doctorSchema,"doctors")

module.exports=doctor;