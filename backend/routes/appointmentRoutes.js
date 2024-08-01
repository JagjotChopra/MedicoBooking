let express=require('express');
let appointmentRouter=express.Router();
const appointmentController = require('../controller/appointmentController');

appointmentRouter.route('/').get(()=>{
    
}).post((request,response)=>{
    console.log("Request come for booking an appointment ")
    appointmentController.bookAnAppointment(request,response);
        
  })




module.exports=appointmentRouter;