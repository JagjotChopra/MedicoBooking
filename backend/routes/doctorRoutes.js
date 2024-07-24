let express=require('express');
let doctorController=require('../controller/doctorController');
const authController = require('../middleware/authController');
let doctorRouter=express.Router();

// url => localhost:8000/api/v1/doctors

doctorRouter.route('/').get( (request,response)=>{
   // ----PUBLIC API METHOD
    if(request.query.name)  // passing query string in Url TO find a doctor by his name
    {
       // console.log("name query string come to find doctor by name")
      doctorController.getDoctorByName(request,response);
    }
    else    // GET REQUEST COME TO GET ALL DOCTORS
    {
      //  console.log("GET REQUEST COME TO GET ALL DOCTORS ");
        doctorController.getAllDoctors(request,response);
    }
   
}).post((request,response)=>{
    //----PRIVATE API METHOD ONLY FOR ADMIN --Add New Doctor => POST REQUEST  
     doctorController.addNewDoctor(request,response); 
})

// url would look like => localhost:8000/doctors/login
doctorRouter.route('/login').post((request,response)=>{
  console.log("Request come")
      doctorController.doctorLogin(request,response);
})


// url would look like => localhost:8000/api/v1/doctors/[id] ------ See Detail of Specific Doctor -
doctorRouter.route('/id/:id').get((request,response)=>{
     // Return Specific Doctor Detail based on ID --PUBLIC API Get Request
    doctorController.getDoctorById(request,response);
}).post(()=>{
//----PRIVATE API METHOD ONLY FOR ADMIN

})




 
module.exports=doctorRouter;