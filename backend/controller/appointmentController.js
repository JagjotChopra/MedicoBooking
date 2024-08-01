const Appointment=require('../model/appointmentModel');

async  function bookAnAppointment (req, res)  {
    const { patientName, patientEmail, doctorName, appointmentDate, reason, userId,doctorId } = req.body;
  
    try {
      const newAppointment = new Appointment({
        patientName,
        patientEmail,
        doctorName,
        appointmentDate,
        reason,
        userId,
        doctorId
      });
  
      const savedAppointment = await newAppointment.save();
      res.status(201).json(savedAppointment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error booking appointment' });
    }
  }




module.exports={bookAnAppointment};