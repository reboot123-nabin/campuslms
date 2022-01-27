import React,{useState,useEffect} from 'react';
import { Dropdown } from 'react-bootstrap';

import { useNavigate ,NavLink} from 'react-router-dom';
import axios from 'axios';

const Navigation = () => {
const navigate=useNavigate();
    const[user,setuser]=useState({
        name:"",
        email:"",
        phone:""
    })
    const logout=()=>{
        localStorage.removeItem('token');
        navigate('/');
    }
    
    const viewprofile=()=>{
        axios.get('http://localhost:5000/api/v1/me',{
            headers: {
    
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
        .then((res)=>{
            setuser(res.data.user)
        })  
        .catch((err)=>{
            console.log(err);
        })
    }
    
    
    useEffect(()=>{
        viewprofile()
    },[])
  return <div>

<section id="navigation">
<div class="container-fluid">

<nav class="navbar navbar-expand-lg">
    <img src="think.png" alt="logo" class="logodesign" />
    <h4 class="logo">LOGO</h4>

    <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse  " id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto navigation-bar">
            <li class="nav-item mx-1">
                <a class="nav-link" href="#"  href="/">Home</a>
            </li>
            <li class="nav-item mx-1" >
                <a class="nav-link " href="#" >Courses</a>
            </li>

            <li class="nav-item mx-1">
                <a class="nav-link" href="#" >Teacher</a>
            </li>
            <li class="nav-item mx-1">
                <a class="nav-link" href="#" >Price</a>
            </li>
            <li class="nav-item mx-1">
                <a class="nav-link" href="#" >Testimonial</a>
            </li>
            <li class="nav-item mx-1">
                <a class="nav-link " href="#" >Blog</a>
            </li>
        
        </ul>
        <form class="form-inline my-2 my-lg-0">
        <div class="navbar-nav mx-auto p-5">
      


      {
                          localStorage.getItem('token') ? (
      
                              <>
                                <Dropdown style={{ maxHeight: "50px" }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {user.email}
        </Dropdown.Toggle>
      
        <Dropdown.Menu>
          <Dropdown.Item href="/profile">Profile</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={logout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
                              </>
      
                          ) : (
                              <Dropdown>
                              <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Login
                              </Dropdown.Toggle>
                            
                              <Dropdown.Menu>
                                <Dropdown.Item href="/login">Login</Dropdown.Item>
                                <Dropdown.Item href="/register">Register</Dropdown.Item>
                                <Dropdown.Item href="/profile" >Profile</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                              
      
      
                          )
                      }
          

              </div>
            
    </form>
        
    </div>
 


 

</nav>

</div>
</section>
  </div>;
};

export default Navigation;
