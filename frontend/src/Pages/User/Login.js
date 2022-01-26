import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/free-regular-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import Email from "@material-ui/icons/Email";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const Login = () => {
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    const navigate= useNavigate();


    const[user,setUser]=useState({

    email:"",

    password:""
})

const handleInput=(e)=>{
    e.preventDefault();
    const{name,value}=e.target;
    setUser({...user,[name]:value});


}



    const loginform=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/v1/login',user,{
            headers: {
                "Content-Type": 'application/json',
                'Accept': 'application/json'
            },
        })
        .then((res)=>{
            toast.success(res.data.message);
            localStorage.setItem('token', res.data.token)
            setUser(res.data.user.name);
            console.log(res.data.user)
            setTimeout(()=>{
                navigate('/profile')
            },3500)
           
;;        })
        .catch((err)=>{
            console.log(err);
            toast.error("Invalid credentials!");
        })
        
    }
  return <div>
<ToastContainer/>
<div class="loginform" >
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-12 background">
                    <h2 style={{padding:'20px', color:'White'}}>Educational Website</h2>

                </div>

                <div class="col-md-6 col-0">
                <h2 style={{color:'#00428D',borderbottom:'2px solid #00428D'}} class="text-center">Login</h2>
                    <form class="mt-5">
                        <div className="form-group">
                          {/* <label for="exampleInputEmail1">Email address</label>
                          <input type="email" onChange={handleInput} name="email" value={user.email} className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                           */}


                          <InputLabel htmlFor="standard-adornment-password">
        Email
      </InputLabel>
      <Input className="form-control"
        type="email"
        onChange={handleInput} name="email" value={user.email}
        endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <Email/>
              </IconButton>
            </InputAdornment>
          }
      />
                        </div>


                        
                        <div clasclassNames="form-group">
                       



                          
      <InputLabel htmlFor="standard-adornment-password">
        Password
      </InputLabel>
      <Input className="form-control"
        type={values.showPassword ? "text" : "password"}
        onChange={handleInput} name="password" value={user.password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
                         
                        </div>
                        <div className="form-check mt-3">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                          <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <div className="form-check mt-3 d-flex justify-content-center">
                        <button type="submit" className="buttoncolor mt-4" style={{background:'#35B500',color:'white'}} onClick={loginform}>Login</button>
                        </div>

    <p class="mt-5" style={{color:'rgb(183, 183, 183)'}}>Don't have an Account? <span style={{color:'#35B500'}}><a href="/register">Create Account</a></span> it takes 
    less than minute </p>
                      
                      </form>


                      
   
                </div>
            </div>
        </div>
    </div> 



  </div>;
};

export default Login;
