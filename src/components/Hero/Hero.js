import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div class="hero-banner">
    <div class="container">
        <div class="text-section">
            <h1>We help patients live a healthy, longer life.</h1>
            <p>Our mission is to provide top-notch healthcare services to ensure the well-being of our patients.</p>
            <button class="appointment-btn">Request an Appointment</button>
        </div>
        <div class="image-section">
            <img src="https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg" alt="Healthcare"/>
        </div>
    </div>
</div>
  )
}

export default Hero
