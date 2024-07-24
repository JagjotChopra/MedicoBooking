let doctor=require('../model/doctorModel');
let jwt=require('jsonwebtoken')
const SECRET_STR="789456123";

function getAllDoctors(request,response){
   doctor.find().then((allDoctors)=>{
    response.status(200).json(
        {
            status:"success",
            data:allDoctors,
            count:allDoctors.length
        }
    )
   }).catch((err)=>{
    response.status(400).json(
        {
            status:"failed",
            error:err
        }
    )
   });
     
}

function getDoctorById(request,response){
   //  console.log(request.params.id);
    doctor.find({_id:request.params.id}).then((allDoctors)=>{
        response.status(200).json(
            {
                status:"success",
                data:allDoctors,
                count:allDoctors.length
            }
        )
       }).catch((err)=>{
        response.status(400).json(
            {
                status:"failed",
                error:err
            }
        )
       });
}

function getDoctorByName(request,response){

    const regex = new RegExp(request.query.name, 'i'); // 'i' makes the search case-insensitive
    doctor.find({ name: { $regex: regex } }).then((data)=>{
        response.status(200).json(
            {
                status:"success",
                data,
                count:data.length
            }
        )
    }).catch((err)=>{
        response.status(400).json(
            {
                status:"failed",
                error:err
            }
        )
    })

}

function addNewDoctor(request,response){
    // console.log(request.body);
    doctor.create(request.body).then((data)=>{
        response.status(201).json(
            {
                status:"success",
                data,
            }
        )
    }).catch((err)=>{
        response.status(400).json(
            {
                status:"failed",
                error:err
            }
        )
    })
}

function doctorLogin(request,response){
    let email=request.body.email;
    let password=request.body.password;
    doctor.find({email,password}).then((data)=>{
      // console.log(data);
        if(data.length){
                const token=jwt.sign({id:data[0]._id},SECRET_STR,{expiresIn:100})
            response.status(200).json(
                {
                    status:"success",
                    token
                }
            )
        }
        else{
            response.status(400).json(
                {
                    status:"failed",
                    msg: "Invalid Credentials"
                }
            )
        }
    }).catch((err)=>{
        response.status(400).json(
            {
                status:"failed",
                msg: "Error: "+err
            }
        )
    })
}

module.exports={getAllDoctors,addNewDoctor,getDoctorByName,getDoctorById,doctorLogin}