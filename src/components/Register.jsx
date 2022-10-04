import React,{useState} from 'react'

import './Register.css'
import CountryCode from './CountryCode'

const Register = () => {
    const [value, setValue] = useState()
    const [formData,setformData]=useState([])
    const country=(e)=>{
      
      setformData({
        ...formData,["MobileNumber"]:e,
    })
    
    }

    const Handle=(e)=>{
      
      const {name, value}=e.target
          setformData({
              ...formData,[name]:value,
          })
      }
      console.log(formData)

      const handleSubmit=(e)=>{
        e.preventDefault()
        
     
        fetch("http://ec2-54-210-2-244.compute-1.amazonaws.com:8080/user/signup",{
          method:"POST",
          headers:{
              "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"*"

          },
          body:JSON.stringify(formData),
        
        }).then(data => data.json())
        .then(data =>  { 
            console.log(data);
            if(data.message){
                alert(data.message); 
                // navigate("/")
            } else{
                alert(data.message); 
            }
        })
        .catch((err) => {
             alert ("This is a warning message!");
            console.error(err);
        })
        //  location.reload()
        }
  return (
    <div className='signcont'>
    <div style={{textAlign:"center"}}>
        <p >Register a new membership</p>
    </div>
   
      <form style={{marginTop:"25px",marginLeft:"7px"}}>
      <div style={{width:"96%",height:"20%",border:"2px solid red",display:"flex",border:"1px solid #ccc"}} >
            <input onChange={Handle} name="FullName" className='email' type="text" placeholder='FullName' />
            <img className='emailimg' src='images/user.png' />
          </div>
          <div style={{width:"96%",height:"20%",border:"2px solid red",display:"flex",border:"1px solid #ccc",marginTop:"15px"}} >
            <input onChange={Handle} name="CompanyName"   className='email' type="text" placeholder='Company Name' />
            <img className='emailimg' src='images/user.png' />
          </div>
          <div style={{width:"96%",height:"20%",border:"2px solid red",display:"flex",border:"1px solid #ccc",marginTop:"15px"}} >
            {/* <CountryCode/> */}
            <CountryCode  name="MobileNumber"   height="70px" value={value} change={country} className='email1' type="text" placeholder='Contact Number' />
            <img className='emailimg1' src='images/contacts.png' />
          </div>
          <div style={{width:"96%",height:"20%",border:"2px solid red",display:"flex",border:"1px solid #ccc",marginTop:"15px"}} >
            <input  name="Email"  onChange={Handle}  className='email' type="text" placeholder='Email' />
            <img className='emailimg' src='images/email.png' />
          </div>
          <div style={{width:"96%",height:"20%",border:"2px solid red",display:"flex",border:"1px solid #ccc",marginTop:"15px"}} >
            <input name="Password"  onChange={Handle}  className='email' type="text" placeholder='Password' />
            <img className='emailimg' src='images/padlock.png' />
          </div>
          
      </form>
     
      <div className='buttonmain'>
          <button onClick={handleSubmit} style={{display:"flex",gap:"5px",marginTop:"5px",fontSize:"13px",borderRadius:"5px"}}>
          <img className='signimg' src='images/login.png' />
          
            Sign Up
          </button>
        </div>
        <br/>
       <div  style={{marginTop:"25%",color:"#337ab7"}}>
       <a>I already have a membership</a>
       
       </div>
       <a style={{color:"#337ab7",cursor:"pointer"}}>Home</a>
    </div>
     
  )
}

export default Register
