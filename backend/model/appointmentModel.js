const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  patientName: {
    type: String,
    required: true
  },
  patientEmail: {
    type: String,
    required: true
  },
  doctorName: {
    type: String,
    required: true
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'doctors',
    required: true
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
