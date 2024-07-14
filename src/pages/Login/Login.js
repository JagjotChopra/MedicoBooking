import React from 'react'
import './Login.css'
const Login = () => {

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
          />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login
