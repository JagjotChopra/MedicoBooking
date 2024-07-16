//import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';


function App() {
  return (
   <>
    <Header/>
    <Home/>
    {/* <Login/> */}
    {/* <Signup/> */}
    {/* <AdminDashboard/> */}
    <Footer/>
   </>
  );
}

export default App;
