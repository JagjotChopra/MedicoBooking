let express=require('express');
const path = require('path');
const doctorRouter = require('./routes/doctorRoutes');
const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const DBConnection = require('./dbConnection');
const appointmentRouter = require('./routes/appointmentRoutes');

let server=express();

//dbConnecting
DBConnection();

// using middlewares
server.use(express.json());

server.use('/api/v1/doctors',doctorRouter);
server.use('/api/v1/users',userRouter);
server.use('/api/v1/admin',adminRouter);
server.use('/api/v1/appointment',appointmentRouter);

server.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files

//server things
const PORT=9000;
server.listen(PORT,()=>{
    console.log("server is started")
})