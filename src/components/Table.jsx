import React, { useState } from 'react'
import './table.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Getdata } from '../redux/action'
import { AiFillDatabase } from 'react-icons/ai'

const Table = () => {
const[page,setPage] = useState(1);



const data = useSelector(store=>store.Alldata.Data.results)
console.log(data)

const dispatch = useDispatch()

useEffect(() =>{
  dispatch(Getdata())
},[dispatch])

return (
    <div>
   <table className='tablemain'>
        <thead>
           <tr >
            <th>DATE</th>
            <th>TARIFF CODE</th>
            <th>ITEM DESCRIPTION</th>
            <th>UQC</th>
            <th>QTY</th>
            <th>UNT PRICE FC</th>
            <th>EST VALUE US$</th>
            <th>TOTAL VALUE US$</th>
            <th>VENDER</th>
            <th>COUNTRY</th>
            <th>DISCHARGE POINT</th>
            <th>BUYER</th>
            </tr>
        </thead>
        <tbody>
        {data?.map(e=> <tr>
      
            <td className='tabletd'>{e.Date}</td>
            <td className='tabletd'>{e.HSCODE}</td>
            <td className='tabletd'>{e.HSCodeDesc}</td>
            <td className='tabletd'>{e.UQC}</td>
            <td className='tabletd'>{e.Quantity}</td>
            <td className='tabletd'>{e.UnitPriceFC}</td>
            <td className='tabletd'>{e.Asset_Value_USD}</td>
            <td className='tabletd'>{e.Importer_Value_USD}</td>
            <td className='tabletd'>{e.EXPORTER_NAME}</td>
            <td className='tabletd'>{e.COUNTRY_OF_ORIGIN}</td>
            <td className='tabletd'>{e.Discharge_Port}</td>
            <td className='tabletd'>{e.Importer_Contact_Person}</td>
            </tr>
            )}
           </tbody>
      </table>
    </div>
  )
}

export default Table