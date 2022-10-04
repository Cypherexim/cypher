import React, { useState } from 'react'
import './Countries.css'

import { Countrydata } from './Countrydata'
// import  right from './images/right.png'
const Countries = () => {
  const [search , setSearch] = useState("");


  const handleSearch = (e) => {
    setSearch(e.target.value)
   
  }
  console.log(search);

  return (
    <div style={{margin:"auto",width:"90%"}} >
      <div className='countryhead'>
       <div style={{width:"78%",display:"flex",gap:"3.5%"}}>
        <div style={{display:"flex",gap:"3%",width:"21%"}}>
       {/* <p>Countries</p> */}
       <input  style={{width:"65%",height:"60%",color:"black",marginTop:"2%",borderRadius:"3px",marginLeft:"2px" }} onChange={handleSearch} placeholder='...Countries'/>
       </div>
       <div style={{display:"flex",gap:"4%",width:"60%"}}>
        <div >
       <p >Direction</p>
       </div>
       <div>
       <p>   Accuracy</p>
       </div>
       <div style={{marginLeft:"20px"}}>
       <p> Availability</p>
       </div>
       <div style={{marginLeft:"90px"}}>
       <p > Description</p>
       </div>
       </div>
       </div>
       <p  style={{}}>Advance Search</p>
      </div>
       <div style={{height:"400px",overflowY:"scroll"}}>
       <table className='name' >
     <tbody>
        {Countrydata.filter(e=>e.name.toLowerCase().includes(`${search}`)).map(e => {
          return (
            <tr style={{width:"100%",fontSize:"14px"}} >
              <td style={{width:"18%",marginRight:"100px",textAlign:"left"}} >{e.name}</td>
              <td style={{width:"8%"}}>{e.direction}</td>
              <td style={{width:"7%"}}>{e.avail}</td>
              <td style={{width:"21%"}}>{e.date}</td>
              <td style={{width:"40%",textAlign:"left"}}>{e.fields}</td>
              <td><img style={{width:"70%",height:"20%",}} src={e.tabimg} /></td>
              
            </tr>
          )
        })}
        </tbody>
        
      </table>
       </div>
    </div>
  )
}

export default Countries
