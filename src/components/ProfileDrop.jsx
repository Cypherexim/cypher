import { Button } from '@chakra-ui/react'
import { fontStyle, fontWeight } from '@mui/system'
import React from 'react'
import './ProfileDrop.css'
import {AiOutlineRight} from 'react-icons/ai'
import {RiLogoutCircleRFill} from 'react-icons/ri'

const ProfileDrop = () => {
  return (
    <div className='profile-drop-cont'>
        <div className='profile-drop-cont1'> 
        <div>
          <img className='profile-drop-img' src='images/account.png'/>
        </div>
        <div style={{width:"80%",marginLeft:"10%"}}>
            <p className='profile-drop-text'>Manav Thakur </p>
            <p className='profile-drop-text1'>Product Manager</p>
            </div>
    </div>
    <div className='profile-drop-opt'>
    <img  src="images/exim.png"  />
    <p>Eximine Private Limited</p>
    </div>
    <div className='profile-drop-opt'>
    <img  src="images/mail.png"  />
    <p>info@eximpanel.com</p>
    </div>
    <div className='profile-drop-opt'>
    <img  src="images/num.png"  />
    <p>+917860112345</p>
    </div>
    <div className='profile-drop-opt'>
    <img  src="images/admin.png"  />
    <p>Admin</p>
    </div>
    <div className='profile-drop-opt'>
    <img  src="images/pass.png"  />
    <p>Password</p>
    </div>
    <div className='profile-drop-plan'>
     <p   style={{marginLeft:"14%",fontSize:"12px",marginTop:"5%",fontWeight:"bold"}}>Current Plan:</p>
     <Button style={{backgroundColor:"rgb(52,158,210)",color:"white",marginLeft:"3%",marginTop:"2%"}}>Enterprises</Button>
     <AiOutlineRight style={{marginTop:"5%",marginLeft:"20%"}}/>
    </div>
    <div style={{display:"flex"}}>
      <RiLogoutCircleRFill style={{marginTop:"6%",marginLeft:"10%",height:"20px"}}/>
      <p style={{fontSize:"12px",marginTop:"6%",marginLeft:"5%",fontWeight:"400"}}>Log Out</p>
    </div>
    </div>
  )
}

export default ProfileDrop