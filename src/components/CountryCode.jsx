import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'


const CountryCode = ({change,value}) => {

  return (
    <div>
       <PhoneInput  
       international
 defaultCountry="IN"
 value={value}
 onChange={change}/>
     
    </div>
  )
}

export default CountryCode
