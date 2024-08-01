import React from 'react'
import './Hero.css'
import bannerImg from '../../assets/Images/ai-generated-8881542_1280.jpg';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    //     <div class="hero-banner">
    //     <div class="container">
    //         <div class="text-section">
    //             <h1>We help patients live a healthy, longer life.</h1>
    //             <p>Our mission is to provide top-notch healthcare services to ensure the well-being of our patients.</p>
    //             <button class="appointment-btn">Request an Appointment</button>
    //         </div>
    //         <div class="image-section">
    //             <img src="https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg" alt="Healthcare"/>
    //         </div>
    //     </div>
    // </div>

    <div className="banner-container">
      <img src={bannerImg} className="banner-image" />
      <div className="overlay"></div>
      <div className="banner-content">
        <h1 className='banner-text'>We help patients live a healthy, longer life.</h1>
        <p className='banner-text-2'>Our mission is to provide top-notch healthcare services to ensure the well-being of our patients.</p>
        <Link to="/findDoctor"><button id="banner-button" class="appointment-btn">Request an Appointment</button></Link>
      </div>
    </div>
  )
}

export default Hero
