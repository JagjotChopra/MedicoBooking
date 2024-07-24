const admin=require('../model/adminModel');
const jwt=require('jsonwebtoken');
const SECRET_STR="789456123";
function adminLogin(request,response){
    let userName=request.body.userName;
    let password=request.body.password;
    admin.find({userName,password}).then((data)=>{
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

module.exports={adminLogin};