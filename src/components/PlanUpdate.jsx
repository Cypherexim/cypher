import { Button } from '@chakra-ui/react'
import React from 'react'
import './PlanUpdate.css'
const PlanUpdate = () => {
  return (
    <div style={{display:"flex"}}>
    <div className='plan-first-box'>
       <div className='plan-profile'>
        <div>
        <img  style={{height:"40px",marginLeft:"5%"}} src='images/account.png'/>
        </div>
        <div style={{width:"50%",textAlign:"left",marginLeft:"5%"}}>
        <p style={{fontWeight:"bold"}}>Manav thakur</p>
        <p style={{fontSize:"10px"}}>Product Manager</p>
        </div>
        <a style={{fontSize:"11px",marginTop:"2%",color:"blue"}}>Edit</a>
        </div>
     <div className='plan-second-box'>
   <img style={{marginLeft:"3%"}} src="images/num.png" />
    <p style={{marginTop:"2%"}}>+917860112345</p>
    </div>
    <div className='plan-second-box'>
   <img style={{marginLeft:"3%"}} src="images/mail.png" />
    <p style={{marginTop:"2%"}}>info@eximpanel.com</p>
    </div>
    <div className='plan-second-box'>
   <img style={{marginLeft:"3%"}} src="images/exim.png" />
    <p style={{marginTop:"2%"}}>Exim Panel Private Limited</p>
    </div>
    <div className='plan-second-box'>
   <img style={{marginLeft:"3%"}} src="images/admin.png" />
    <p style={{marginTop:"2%"}}>Admin</p>
    </div>
    <div className='plan-second-box'>
   <img style={{marginLeft:"3%"}} src="images/pass.png" />
    <p style={{marginTop:"2%"}}>Password</p>
    <a style={{marginTop:"2%",color:"blue"}}>Change Password</a>
    </div>
    <div className='plan-second-box'>
   <img style={{marginLeft:"3%"}} src="images/enter.png" />
    <Button style={{height:"30px",width:"32%",backgroundColor:"rgb(52,158,210)",color:"white"}}>Enterprises</Button>
    <a style={{marginTop:"2%",color:"blue"}}>Upgrade</a>
    <p style={{marginTop:"2%"}}>or</p>
    <a style={{marginTop:"2%",color:"blue"}}>Renew</a>
    </div>
    <div className='plan-second-box'>
   <img style={{marginLeft:"3%"}} src="images/down.png" />
    <p style={{marginTop:"2%"}}>Downloading Points: 1200/1500</p>
    </div>
    <div className='plan-second-box'>
   <img style={{marginLeft:"3%"}} src="images/points.png" />
    <p style={{marginTop:"2%"}}>Searching Points: 1200/1500</p>
    </div>
    <div className='plan-second-box'>
   <img style={{marginLeft:"3%"}} src="images/time.png" />
    <p style={{marginTop:"2%"}}>Duration: 127/365</p>
    </div>
      </div>
      <div className='plan-box' >
      
        <p style={{textAlign:"center",marginTop:"8%"}}>Enterpreneur</p>
     <img className='priceimg' src="images/price.png" />
     <ul className='plan-ul'>
      <li >Feature one</li>
      <hr  style={{width:"70%",marginLeft:"15%",marginTop:"3%"}}/>
      <li style={{marginTop:"5%"}} >Feature one</li>
      <hr  style={{width:"70%",marginLeft:"15%",marginTop:"3%"}}/>
      <li style={{marginTop:"5%"}} >Feature one</li>
      <hr  style={{width:"70%",marginLeft:"15%",marginTop:"3%"}}/>
      <li  style={{marginTop:"5%"}}>Feature one</li>
      <hr  style={{width:"70%",marginLeft:"15%",marginTop:"3%"}}/>
      <li  style={{marginTop:"5%"}}>Feature one</li>
      <hr  style={{width:"70%",marginLeft:"15%",marginTop:"3%"}}/>
     </ul>
     <Button  style={{backgroundColor:"rgb(52,158,210)",marginTop:"10%",marginLeft:"30%",width:"100px",color:"white"}} >Select</Button>
      </div>
      <div className='plan-box' >
      
        <p style={{textAlign:"center",marginTop:"8%"}}>Enterpreneur</p>
     <img className='priceimg' src="images/price.png" />
     <ul className='plan-ul'>
      <li >Feature one</li>
      <hr  style={{width:"70%",marginLeft:"15%",marginTop:"3%"}}/>
      <li style={{marginTop:"5%"}} >Feature one</li>
      <hr  style={{width:"70%",marginLeft:"15%",marginTop:"3%"}}/>
      <li style={{marginTop:"5%"}} >Feature one</li>
      <hr  style={{width:"70%",marginLeft:"15%",marginTop:"3%"}}/>
      <li  style={{marginTop:"5%"}}>Feature one</li>
      <hr  style={{width:"70%",marginLeft:"15%",marginTop:"3%"}}/>
      <li  style={{marginTop:"5%"}}>Feature one</li>
      <hr  style={{width:"70%",marginLeft:"15%",marginTop:"3%"}}/>
     </ul>
     <Button  style={{backgroundColor:"rgb(52,158,210)",marginTop:"10%",marginLeft:"30%",width:"100px",color:"white"}} >Select</Button>
      </div>
      <div className='plan-box' >
      
        <p style={{textAlign:"center",marginTop:"8%"}}>Enterpreneur</p>
     <img className='priceimg' src="images/price.png" />
     <ul className='plan-ul'>
      <li >Feature one</li>
      <hr  style={{width:"70%",marginLeft:"15%",marginTop:"3%"}}/>
      <li style={{marginTop:"5%"}} >Feature one</li>
      <hr  style={{width:"70%",marginLeft:"15%",marginTop:"3%"}}/>
      <li style={{marginTop:"5%"}} >Feature one</li>
      <hr  style={{width:"70%",marginLeft:"15%",marginTop:"3%"}}/>
      <li  style={{marginTop:"5%"}}>Feature one</li>
      <hr  style={{width:"70%",marginLeft:"15%",marginTop:"3%"}}/>
      <li  style={{marginTop:"5%"}}>Feature one</li>
      <hr  style={{width:"70%",marginLeft:"15%",marginTop:"3%"}}/>
     </ul>
     <Button  style={{backgroundColor:"rgb(52,158,210)",marginTop:"10%",marginLeft:"30%",width:"100px",color:"white"}} >Select</Button>
      </div>
      </div>
    
  )
}

export default PlanUpdate
