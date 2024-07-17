import React from 'react'
import './Services.css'
const Services = () => {
  return (
    
    <div className="services-section">
    <div className="text-content">
      <h2>Providing the best medical Services</h2>
      <p>World class care for everyone. Our health system offers unmatched expert health care.</p>
    </div>
    <hr className='divider'/>
    <div className="service-cards">
      <div className="service-card">
      <i class="fa fa-user-md" aria-hidden="true"></i>
        <div className="service-info">
          <h3>Find a Doctor</h3>
          <p>Locate experienced doctors and specialists in your area.</p>
          <button className="icon-btn">→</button>
        </div>
      </div>
      <div className="service-card">
      <i class="fa fa-map-marker" aria-hidden="true"></i>
        <div className="service-info">
          <h3>Find a Location</h3>
          <p>Discover our medical facilities near you.</p>
          <button className="icon-btn">→</button>
        </div>
      </div>
      <div className="service-card">
      <i class="fa fa-pencil-square" aria-hidden="true"></i>
        <div className="service-info">
          <h3>Book an Appointment</h3>
          <p>Schedule an appointment with our healthcare providers.</p>
          <button className="icon-btn">→</button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Services
