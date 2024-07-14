import React from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Contact from '../../components/Contact/Contact';
import Login from '../Login/Login';
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard';
import AddDoctor from '../../components/AdminDashboard/AddDoctor';
import SeeList from '../../components/AdminDashboard/SeeList';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <section class="find-doctor">
        <h1 className='heading-doc'>Find a Doctor</h1>
        <input type="text" class="search-box" placeholder="Search for a doctor..." />

        <div class="doctors-row">
          <div class="doctor-card">
            <img src="doctor1.jpg" alt="Doctor Image" />
            <h2>Dr. Jane Doe</h2>
            <p>Specialist in Cardiology</p>
            <p>Over 10 years of experience</p>
            <button>See Full Info</button>
          </div>
          <div class="doctor-card">
            <img src="doctor2.jpg" alt="Doctor Image" />
            <h2>Dr. John Smith</h2>
            <p>Specialist in Neurology</p>
            <p>Over 15 years of experience</p>
            <button>See Full Info</button>
          </div>
          <div class="doctor-card">
            <img src="doctor3.jpg" alt="Doctor Image" />
            <h2>Dr. Alice Brown</h2>
            <p>Specialist in Pediatrics</p>
            <p>Over 8 years of experience</p>
            <button>See Full Info</button>
          </div>
          <div class="doctor-card">
            <img src="doctor4.jpg" alt="Doctor Image" />
            <h2>Dr. Michael Johnson</h2>
            <p>Specialist in Dermatology</p>
            <p>Over 12 years of experience</p>
            <button>See Full Info</button>
          </div>
        </div>
      </section>

      <Contact />
      <Login />
      <AdminDashboard />
      <AddDoctor />
      <SeeList />
    </div>
  );
}

export default Home;
