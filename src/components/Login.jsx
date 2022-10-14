
import React,{useState} from 'react'
import './Login.css'
import Navbar from './Navbar'
import Register from './Register'
import { Link, Navigate,useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData,setformData]=useState()
  const navigate=useNavigate()


  const Handle=(e)=>{
     

      const {name, value}=e.target
          setformData({
              ...formData,[name]:value,
          })
      }
      console.log(formData)
const handleSubmit=(e)=>{
  e.preventDefault()
  

  // const create={
  //   "email": formData.email,
  //   "password": formData.password,
  // }
  fetch("http://ec2-54-210-2-244.compute-1.amazonaws.com:8080/user/signin",{
    method:"POST",
    headers:{
        "content-type":"application/json",
    },
    body:JSON.stringify(formData),
  
  }).then(data => data.json())
  .then(data =>  { 
      console.log(data);
      if(data){
          alert(data.message);
          navigate("/"); 
     
      } else{
          alert(data.message); 
      }
  })
  .catch((err) => {
       alert ("This is a warning message!");
      console.error(err);
  })
  
  }
  return (
    <div style={{display:"flex"}}>
        <div className='regtmain'>
      <Register />
    </div>
    <div className='loginmain'>
 
        <div style={{height:"25%",width:"60%"}}>
         <img  style={{marginTop:"-12%",marginLeft:"40px"}} src="images/Title2.png"/>
        </div>
        <div style={{marginTop:"30px"}}>
      <p className='loginbox'>
        <span style={{fontSize:"28px",fontWeight:"bold"}}>Welcome</span>
        <br/>
        Please sign in to your Account
        </p>
        </div>
        <form >
          <div style={{width:"90%",height:"20%",border:"2px solid red",display:"flex",border:"1px solid #ccc"}} >
            <input className='email' type="text" placeholder='Email' name="Email" onChange={Handle} />
            <img className='emailimg' src='images/email.png' />
          </div>
          <div style={{width:"90%",height:"20%",border:"2px solid red",display:"flex",border:"1px solid #ccc",marginTop:"12px"}} >
            <input className='email' placeholder='Password'  name="Password" onChange={Handle} />
            <img className='emailimg' src='images/padlock.png' />
          </div>
        </form>
        <div className='buttonmain'>
        
         <button style={{display:"flex",gap:"5px",marginTop:"4px"}} onClick={handleSubmit} >
          <img className='signimg' src='images/login.png' />
          
            Sign In
          </button>
        </div>
        <div className='list'>
        
          <li> Forget Password?</li>
          <li > Sign up</li>
          <li>Home</li>
      
        </div>
    </div>
  
    </div>
    
  )
}

export default Login
