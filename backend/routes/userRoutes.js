let express=require('express');
let userRouter=express.Router();


// api would look like => localhost:8000/api/v1/users/
userRouter.route('/').get(()=>{
    // -- Private API use by admin
}).post(()=>{
    // -- signUp API
})


// api would look like => localhost:8000/api/v1/users/[id]
userRouter.route('/:id').get(()=>{
        // -- Private API use by particular User
}).put(()=>{
        //-- Private API TO edit info by particular User
})

module.exports=userRouter;