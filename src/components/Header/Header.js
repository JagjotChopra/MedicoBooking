
import React, { useState } from 'react'
import './Header.css'


const Header = () => {
  // value we will get from redux
  let [user,setUser]=useState('guestUser')
  return (
    <div class="wrapper">
      <nav class="navbar">

            <div class="logo"> 
            <h2>Medico</h2> 
            <img src="https://cdn-icons-png.freepik.com/512/3999/3999575.png" alt="test" />
                <h2>Booking</h2>
                
               </div>

            <ul class="nav-items">
                

                {

              (  user=="user"||user=="guestUser")?<>
                  <li>Home</li>
                <li>Services</li>
                <li>Find A Doctor</li>
                <li>Contact</li>
                  </>:null
                }
{
                  user=="admin"?<>
                  <li>Dashboard</li>
                <li>Add Doctor</li>
                <li>See User List</li>
                  </>:null
                }

            </ul>

           {
           (  user=="user"||user=="admin")?<button class="login-btn">Logout</button>:
           <button class="login-btn">Login</button>
           } 
        </nav>

      
      </div>

    
  )
}

export default Header
