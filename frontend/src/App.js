import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import cors from 'cors';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Login from './Pages/User/Login';
import Registration from './Pages/User/Registration';
import Profile from './Pages/User/Profile';
import EditProfile from './Pages/User/EditProfile';
import Dashboard from './Pages/Admin/Dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navigation/>
     <Routes>
     
    <Route path="/" exact element={<Home/>} />
    <Route path="/login" exact element={<Login/>}/>
    <Route path="/register" exact element={<Registration/>}/>
    <Route path="/profile" exact element={<Profile/>}/>
    <Route path="/editprofile" exact element={<EditProfile/>}/>
    <Route path="/dashboard" exact element={<Dashboard/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

    </div>
  );
}

export default App;
