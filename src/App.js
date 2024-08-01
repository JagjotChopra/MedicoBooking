
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import FindDoctor from './pages/FindDoctor/FindDoctor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import AdminLogin from './pages/Login/AdminLogin/AdminLogin';
import UserLogin from './pages/Login/UserLogin/UserLogin';
import DoctorLogin from './pages/Login/DoctorLogin/DoctorLogin';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { verifyLocalStorage } from './auth';
import DoctorDetail from './pages/DoctorDetail/DoctorDetail';
import UserDashboard from './pages/UserDashboard/userDashboard';
import BookingAppointment from './pages/Appointment/BookingAppointment';

function App() {
  
  return (
   <>
   <BrowserRouter>
   <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/adminLogin" element={<AdminLogin/>} />
        <Route path="/userLogin" element={<UserLogin/>} />
        <Route path="/doctorLogin" element={<DoctorLogin/>} />
        <Route path="/signUp" element={<Signup/>} />
        <Route path="/doctor/id/:id" element={<DoctorDetail />} />
        <Route element={<ProtectedRoute isAuthenticated={verifyLocalStorage} role="admin" />}>
           <Route path="/adminDashboard" element={<AdminDashboard/>} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={verifyLocalStorage} role="user" />}>
           <Route path="/userDashboard" element={<UserDashboard/>} />
           <Route path="/bookingAppointment" element={<BookingAppointment/>} />
        </Route>

        
        <Route path="/findDoctor" element={<FindDoctor/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    
   </>
  );
}

export default App;
