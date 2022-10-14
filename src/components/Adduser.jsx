import React from 'react'
import './Adduser.css'

const Adduser = () => {
  return (
    <div>
      <div>
        <h2 className='usertext'> Add User</h2>
      <div className='addbox'>
       <div className='addbox1'>Add User </div>
       <div style={{backgroundColor:"rgb(79,175,222)",color:"white"}} className='addbox1'>Plan Setup </div>
       <div style={{backgroundColor:"rgb(0,141,210)",color:"white"}}className='addbox1'>Payment </div>
      </div>
      <form className='mainform'>
        
   <label className='textlabel'>
    <p className='labeltext'>Full Name</p>
    <input className='namein'></input>
   </label>
   <label className='textlabel'>
    <p className='labeltext'>Company Name</p>
    <input className='namein1'></input>
   </label>
   <label className='textlabel'>
    <p className='labeltext'>Email</p>
    <input className='namein2'></input>
   </label>
   <label className='textlabel'>
    <p className='labeltext'>Contact</p>
    <input className='namein3'></input>
   </label>
   <label className='textlabel'>
    <p className='labeltext'>Designation</p>
    <input className='namein4'></input>
   </label>
   <label className='textlabel'>
    <p className='labeltext'>Location</p>
    <input className='namein5'></input>
   </label>
   <label className='textlabel'>
    <p className='labeltext'>Location</p>
    <input className='namein5'></input>
   </label>
   <label className='textlabel'>
    <p className='labeltext'>GST</p>
    <input className='namein5'></input>
   </label>
   <label className='textlabel'>
    <p className='labeltext'>IEC</p>
    <input className='namein5'></input>
   </label>
   <label className='textlabel'>
    <p className='labeltext'>Role Assign</p>
    <input className='namein5'></input>
   </label>
   
</form>
      </div>
    </div>
  )
}

export default Adduser
