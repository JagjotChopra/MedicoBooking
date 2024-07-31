import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DoctorDetail.css';

const DoctorDetail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState();
  let baseUrl="http://localhost:9000/";

  useEffect(() => {
    fetch("/api/v1/doctors/id/"+id)
      .then(response => response.json())
      .then((data) => {setDoctor(data.data[0]);console.log(data.data[0])})
      .catch(error => console.error('Error fetching doctor details:', error));
  }, [id]);

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div className="doctor-detail">
      <img src={`${baseUrl}${doctor.photo}`} alt={`Doctor ${doctor.name}`} />
    <div>
      <h1>{doctor.name}</h1>
      <p>Speciality: {doctor.speciality}</p>
      <p>Email: {doctor.email}</p>
      <p>About: {doctor.description}</p>
      </div>
      {/* Add more fields as necessary */}
    </div>
  );
};

export default DoctorDetail;
