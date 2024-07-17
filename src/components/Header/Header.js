
import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
  // value we will get from redux
  let [user,setUser]=useState('guestUser')
  return (
    <div class="wrapper">
      <nav class="navbar">
              <Link to="/">
            <div class="logo"> 
            <h2>Medico</h2> 
            <img src="https://cdn-icons-png.freepik.com/512/3999/3999575.png" alt="test" />
                <h2>Booking</h2>
                
               </div>
               </Link>
            <ul class="nav-items">
                

                {

              (  user=="user"||user=="guestUser")?<>
                 <li><Link to="/"> Home </Link></li> 
                <li>Services</li>
                <li><Link to="/findDoctor">Find A Doctor</Link></li>
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
           <Link to="/login"> <button class="login-btn">Login</button></Link>
           } 
        </nav>

      
      </div>

    
  )
}

export default Header
