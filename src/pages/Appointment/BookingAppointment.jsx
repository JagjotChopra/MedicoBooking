import React, { useState } from 'react';
import axios from 'axios';
import './BookingAppointment.css'; 

function BookingAppointment() {
  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail:JSON.parse(localStorage.getItem('userData')).email,
    doctorName: localStorage.getItem('doctorName'),
    appointmentDate: '',
    reason: '',
    doctorId:localStorage.getItem('doctorId'),
    userId:JSON.parse(localStorage.getItem('userData'))._id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await axios.post('/api/v1/appointment', formData);
      console.log(response.data);
      alert('Appointment booked successfully!');
      setFormData({
        patientName: '',
        doctorName: '',
        appointmentDate: '',
        reason: '',
      });
    } catch (error) {
      console.error(error);
      alert('Error booking appointment');
    }
  };

  return (
    <div className='app-container'>
    <div className="BookingAppointment">
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient Name:</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Patient Email:</label>
          <input
            type="text"
            name="patientEmail"
            readOnly
            value={JSON.parse(localStorage.getItem('userData')).email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Doctor Name:</label>
          <input
            type="text"
            name="doctorName"
            value={localStorage.getItem('doctorName')}
            onChange={handleChange}
            readOnly
            required
          />
        </div>
        <div>
          <label>Appointment Date:</label>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Reason:</label>
          <input
            type="text"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
    </div>
  );
}

export default BookingAppointment;
