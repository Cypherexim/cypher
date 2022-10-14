import React from 'react'
import "./hscode.css"
import { useDispatch, useSelector } from 'react-redux'
import { Gethsdata } from '../redux/action'
import { useEffect } from 'react'
import { Checkbox } from '@chakra-ui/react'

const HsCode = () => {

const hsdata = useSelector(store=>store.Alldata.Hscode.results)    
const dispatch = useDispatch()
useEffect(()=>{
    dispatch(Gethsdata())
},[dispatch])

  return (
    <div>
    <div className='hsmainbox'>
      <div>
        <input className='hssearch'  placeholder='search'/>
      </div>
      <div className='hsmidbox'>
      {hsdata?.map(e =><div className='datacont'>{e.HSCODE}</div>)}
      </div>
    </div>
    </div>
  )
}   

export default HsCode
