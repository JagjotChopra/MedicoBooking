import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({isAuthenticated,role}) => {
    console.log(isAuthenticated())
    if(!isAuthenticated()){
        let path=''
        if(role=="admin"){
            path="/adminLogin"
        }
         if(role=="doctor"){
            path="/doctorLogin"
        }
        if(role=="user"){
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
