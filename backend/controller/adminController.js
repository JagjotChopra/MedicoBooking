const admin=require('../model/adminModel');
const Doctor=require('../model/doctorModel');
const jwt=require('jsonwebtoken');
const SECRET_STR="789456123";
function adminLogin(request,response){
    let userName=request.body.userName;
    let password=request.body.password;
    console.log(userName+" "+password)
    admin.find({userName,password}).then((data)=>{
        if(data.length){
                const token=jwt.sign({id:data[0]._id},SECRET_STR,{expiresIn:100})
            response.status(200).json(
                {
                    status:"success",
                    role:"admin",
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


const addDoctor = async (req, res) => {
    try {
      const { name, email, speciality, description, password } = req.body;
      const photo = req.file ? req.file.path : '';
  
      const newDoctor = new Doctor({
        name,
        email,
        speciality,
        description,
        password, // Note: For security reasons, you should hash the password before saving it
        photo,
      });
  
      await newDoctor.save();
      res.status(201).json({ message: 'Doctor added successfully', doctor: newDoctor });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

module.exports={adminLogin,addDoctor};