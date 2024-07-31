import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({isAuthenticated,role}) => {
    console.log(isAuthenticated())
    if(!isAuthenticated()){
        let path=''
        if(role=="admin"){
            path="/adminLogin"
        }else if(role=="doctor"){
            path="/doctorLogin"
        }
        else{
            path="/userLogin"
        }

        return <Navigate to={path} />
    }
  return (
    <>
    <Outlet/>
    </>
  )
}

export default ProtectedRoute
