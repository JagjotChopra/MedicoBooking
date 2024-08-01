import React, { useState } from 'react'
import './Login.css'
import img from '../../assets/Images/ai-generated-8881542_1280.jpg';
import {  Link,useNavigate } from 'react-router-dom';
const Login = (props) => {
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  const navigate = useNavigate();
  let endpoints=props.endpoints;

  function login(e) {
    e.preventDefault();
  
    fetch('/api/v1'+endpoints, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Specify content type as JSON
      },
      body: JSON.stringify({ // Convert the object to a JSON string
        "userName": email,
        "password": password
      })
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data); // Handle the data from the API
      if(data.status=="success"){
        localStorage.setItem('user',data.role);
        localStorage.setItem('token',data.token);
        if(data.role=="admin"){
          navigate('/adminDashboard');
        }
         if(data.role=="user"){
          console.log(JSON.stringify(data.userData));
          localStorage.setItem('userData',JSON.stringify(data.userData));
          navigate('/userDashboard');
        }
        if(data.role=="doctor"){
          navigate('/doctorDashboard');
        }
        
      }
    })
    .catch((err) => {
      console.error('Fetch error:', err); // Improved error handling
    });


  }
  
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>{props.userType}  Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={(e) => login(e)} className="btn">Login</button>
        {
          props.userType == "User" ? <p style={{ textAlign: 'right' }}>Don't Have an Account?<Link to="/signUp"> Sign Up</Link></p> : null
        }
      </form>
    </div>



  );
}

export default Login
