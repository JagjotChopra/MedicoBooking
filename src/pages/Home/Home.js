import React from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Contact from '../../components/Contact/Contact';
import Login from '../Login/Login';

import AdminDashboard from '../AdminDashboard/AdminDashboard';
import AddDoctor from '../AdminDashboard/AddDoctor';
import SeeList from '../AdminDashboard/SeeList';
import FindADoctor from '../../components/FindADoctor/FindADoctor';


const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <FindADoctor/>
      <Contact />

    </div>
  );
}

export default Home;
