import React, { useState } from 'react'

const DatePicker = () => {
    const[date,setDate] = useState();
    // console.log("Date",date)
  return (
    <>
      {/* <h1>Selected Date : {date }</h1> */}
      <input  style ={{fontSize:"15px", height:"30px",width:"160px",borderRadius:"10px"}} type="date"  onChange={e=>setDate(e.target.value)} />
    </>
  )
}

export default DatePicker

