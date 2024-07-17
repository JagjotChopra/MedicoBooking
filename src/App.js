
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import FindDoctor from './pages/FindDoctor/FindDoctor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<Signup/>} />
        <Route path="/adminDasboard" element={<AdminDashboard/>} />
        <Route path="/findDoctor" element={<FindDoctor/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    
   </>
  );
}

export default App;
