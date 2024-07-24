let express=require('express');
const doctorRouter = require('./routes/doctorRoutes');
const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const DBConnection = require('./dbConnection');
let server=express();

//dbConnecting
DBConnection();

// using middlewares
server.use(express.json());
server.use('/api/v1/doctors',doctorRouter);
server.use('/api/v1/users',userRouter);
server.use('/api/v1/admin',adminRouter);


//server things
const PORT=9000;
server.listen(PORT,()=>{
    console.log("server is started")
})