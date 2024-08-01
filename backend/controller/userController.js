const user=require('../model/userModel');
const jwt=require('jsonwebtoken');
const SECRET_STR="789456123";
function userLogin(request,response){
    let email=request.body.userName;
    let password=request.body.password;
    console.log(email+" "+password)
    user.find({email,password}).then((data)=>{
        if(data.length){
                const token=jwt.sign({id:data[0]._id},SECRET_STR,{expiresIn:100})
            response.status(200).json(
                {
                    status:"success",
                    role:"user",
                    token,
                    userData:data[0]
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


function userSignup(request,response){
    // console.log(request.body);
    user.create(request.body).then((data)=>{
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





module.exports={userLogin,userSignup};