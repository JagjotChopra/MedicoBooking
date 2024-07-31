import React, { useEffect, useState } from 'react';
import './FindADoctor.css';
import { useNavigate } from 'react-router-dom';

const FindADoctor = () => {
  const [doctors, setDoctors] = useState([]);

  const navigate= useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    fetch('/api/v1/doctors')
      .then(response => response.json())
      .then(data => setDoctors(data.data))
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  const fetchDoctors = (name = '') => {
    fetch(`/api/v1/doctors?name=${name}`)
      .then(response => response.json())
      .then(data => setDoctors(data.data))
      .catch(error => console.error('Error fetching doctors:', error));
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    fetchDoctors(value);
  };

  const handleSeeInfoClick = (doctorId) => {
    navigate(`/doctor/id/${doctorId}`);
  };

  return (
    <section className="find-doctor">
      <h1 className="heading-doc">Find a Doctor</h1>
      <hr className="divider" />
      <div className="search-box">
        <input type="text" value={searchTerm}
          onChange={handleSearchChange}  placeholder="Search for a doctor..." />
      </div>

      <div className="doctors-row">
        {
        doctors.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <img src={doctor.photo} alt={`Doctor ${doctor.name}`} />
            <h2>{doctor.name}</h2>
            <p>{doctor.speciality}</p>
            <button onClick={() => handleSeeInfoClick(doctor._id)}>See Full Info</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FindADoctor;
