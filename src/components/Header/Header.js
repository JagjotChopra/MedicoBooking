
import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div class="wrapper">
      <nav class="navbar">

            <div class="logo">  
            <img src="https://cdn-icons-png.freepik.com/512/3999/3999575.png" alt="test" />

               </div>

            <ul class="nav-items">
                <li>Home</li>
                <li>Services</li>
                <li>Find A Doctor</li>
                <li>Contact</li>
            </ul>
            <button class="login-btn">Login</button>
        </nav>

      
      </div>

    
  )
}

export default Header
