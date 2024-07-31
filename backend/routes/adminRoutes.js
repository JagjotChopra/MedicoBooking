let express=require('express');
const multer = require('multer');
const path = require('path');

const adminController = require('../controller/adminController');



let adminRouter=express.Router();

adminRouter.route('/').post((request,response)=>{
    //console.log("admin route is running")
    adminController.adminLogin(request,response);
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  const upload = multer({ storage: storage });

adminRouter.route('/addDoctor').post(upload.single('photo'),(request,response)=>{
    adminController.addDoctor(request,response);
})


module.exports=adminRouter;