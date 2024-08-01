import React, { useEffect } from 'react'
import Login from '../Login'
import { verifyLocalStorage } from '../../../auth'
import { useNavigate } from 'react-router-dom'
const UserLogin = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    if(verifyLocalStorage()){
      return navigate('/userDashboard');
    }
  },[])
  return (
    <div>
      <Login userType="User" endpoints="/users/login" />
    </div>
  )
}

export default UserLogin
