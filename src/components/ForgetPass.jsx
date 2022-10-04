import React,{useState} from 'react'
import './Forgetpass.css'
import { Button } from '@chakra-ui/react'

const ForgetPass = () => {
    const [formData,setformData]=useState()

    const Handle=(e)=>{
       
  
        const {name, value}=e.target
            setformData({
                ...formData,[name]:value,
            })
        }
        console.log(formData)
  const handleSubmit=(e)=>{
    e.preventDefault()
    
  
    const create={
      "email": formData.email,
    }
    fetch("http://localhost:5000/forgetpassword",{
      method:"POST",
      headers:{
          "content-type":"application/json",
      },
      body:JSON.stringify(create),
    
    }).then(data => data.json())
    .then(data =>  { 
        console.log(data);
        alert(data.status); 
       })
    // .catch((err) => {
    //      alert ("This is a warning message!");
    //     console.error(err);
    // })
    
    }
  return (
    <form className='forgetcont'>
        <div className='forgetcont1'>
         <h1 className='forgettext'>Forget Password</h1>
        </div>
        <div style={{marginTop:"2%",marginLeft:"10%"}}>
            <p style={{fontSize:"12px",fontWeight:"bold"}}>Email Address</p>
            <input className='forgetinput' type="text" name="email" onChange={Handle} placeholder='Enter Email' /> 
            </div>
            <Button colorScheme='blue' width='73%' marginTop="3%" marginLeft="10%" onClick={handleSubmit} >Submit</Button>
        
    </form>
  )
}

export default ForgetPass