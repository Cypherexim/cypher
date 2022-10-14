import React, { useState } from 'react'


const DatePicker = () => {
    const[date,setDate] = useState();

  return (
     <>
  
    
      <input  style ={{fontSize:"15px", height:"30px",width:"160px",borderRadius:"10px"}} type="date"  onChange={e=>setDate(e.target.value)} />
    </>
  )
}

export default DatePicker

