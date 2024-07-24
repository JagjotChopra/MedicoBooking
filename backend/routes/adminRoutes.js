let express=require('express');
const adminController = require('../controller/adminController');
let adminRouter=express.Router();

adminRouter.route('/').post((request,response)=>{
    //console.log("admin route is running")
    adminController.adminLogin(request,response);
})


module.exports=adminRouter;