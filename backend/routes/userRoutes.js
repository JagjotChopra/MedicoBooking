let express=require('express');
let userRouter=express.Router();
let userController=require('../controller/userController');

// api would look like => localhost:8000/api/v1/users/
userRouter.route('/').get(()=>{
    // -- Private API use by admin
}).post((request,response)=>{
    console.log("Request come user signup")
        userController.userSignup(request,response);
        
  })

userRouter.route('/login').post((request,response)=>{
    console.log("Request come user login")
    userController.userLogin(request,response);
})


// api would look like => localhost:8000/api/v1/users/[id]
userRouter.route('/id/:id').get(()=>{
        // -- Private API use by particular User
}).put(()=>{
        //-- Private API TO edit info by particular User
})

module.exports=userRouter;