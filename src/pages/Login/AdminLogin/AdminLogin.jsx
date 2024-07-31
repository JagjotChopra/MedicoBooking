import React, { useEffect } from 'react'
import Login from '../Login'
import { verifyLocalStorage } from '../../../auth'
import { useNavigate } from 'react-router-dom'


const AdminLogin = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    if(verifyLocalStorage()){
      return navigate('/adminDashboard');
    }
  },[])
 
  return (
    <div>
      <Login userType="Admin" />
    </div>
  )
}

export default AdminLogin
