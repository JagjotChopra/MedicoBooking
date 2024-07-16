import React from 'react'
import './FindADoctor.css'
import doc1 from '../../assets/Images/doctors/ai-generated-8451270_640.png'
import doc2 from '../../assets/Images/doctors/ai-generated-8578391_640.png'
import doc3 from '../../assets/Images/doctors/nurse-2019420_640.jpg'
import doc4 from '../../assets/Images/doctors/pexels-thirdman-5327585 (1).jpg'
const FindADoctor = () => {
  return (
    <section class="find-doctor">
    <h1 className='heading-doc'>Find a Doctor</h1>
    <hr className='divider'/>
    <div className="search-box">
    <input type="text"  placeholder="Search for a doctor..." />
    </div>
   
    <div class="doctors-row">
      <div class="doctor-card">
        <img src={doc1} alt="Doctor Image" />
        <h2>Dr. Jane Doe</h2>
        <p>Specialist in Cardiology</p>
        <p>Over 10 years of experience</p>
        <button>See Full Info</button>
      </div>
      <div class="doctor-card">
        <img src={doc2} alt="Doctor Image" />
        <h2>Dr. John Smith</h2>
        <p>Specialist in Neurology</p>
        <p>Over 15 years of experience</p>
        <button>See Full Info</button>
      </div>
      <div class="doctor-card">
        <img src={doc3} alt="Doctor Image" />
        <h2>Dr. Alice Brown</h2>
        <p>Specialist in Pediatrics</p>
        <p>Over 8 years of experience</p>
        <button>See Full Info</button>
      </div>
      <div class="doctor-card">
        <img src={doc4} alt="Doctor Image" />
        <h2>Dr. Michael Johnson</h2>
        <p>Specialist in Dermatology</p>
        <p>Over 12 years of experience</p>
        <button>See Full Info</button>
      </div>
    </div>
  </section>
  )
}

export default FindADoctor
