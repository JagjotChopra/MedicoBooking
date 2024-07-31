
import React, { useState } from 'react'
import './Header.css'
import { Link,useNavigate } from 'react-router-dom'


const Header = () => {
  // value we will get from redux
  const naviagte=useNavigate();
  let user;
  if(localStorage.getItem('user')){
      user=localStorage.getItem('user');
  }
  else{
    user="guestUser";
  }

  function logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    naviagte('/');
  }
  

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
           (  user=="user"||user=="admin")?<button class="login-btn" onClick={logout}>Logout</button>:
           <>
             <div class="dropdown">
        <button class="dropdown-button">Login</button>
        <div class="dropdown-content">
            <Link to="/userLogin">User</Link>
            <Link to="/adminLogin">Admin</Link>
            <Link to="/doctorLogin">Doctor</Link>
        </div>
    </div>
           </>
          //  <Link to="/login"> <button class="login-btn">Login</button></Link>
           
           } 
        </nav>

      
      </div>

    
  )
}

export default Header
