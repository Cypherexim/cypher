import React, { useState } from 'react'
import './Export.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Getexdata } from '../redux/action'
// import { AiFillDatabase } from 'react-icons/ai'

const ExportTable = () => {
const[page,setPage] = useState(1);



const dataex = useSelector(store=>store.Alldata.Dataex.results)
  // console.log(dataex)


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
            <th>EST_VALUE_FC</th>
            <th>EST VALUE US$</th>
            <th>EXCHANGE RATE</th>
            <th>BUYER</th>
            <th>COUNTRY</th>
            <th>DISCHARGE POINT</th>
            <th>SHIPPER</th>
            </tr>
        </thead>
        <tbody>
        {dataex?.map(e=> <tr>
      
            <td className='tabletd'>{e.Date}</td>
            <td className='tabletd'>{e.HSCODE}</td>
            <td className='tabletd'>{e.HSCodeDesc}</td>
            <td className='tabletd'>{e.UQC}</td>
            <td className='tabletd'>{e.Quantity}</td>
            <td className='tabletd'>{e.InvValueFC}</td>
            <td className='tabletd'>{e.FOB_USD}</td>
            <td className='tabletd'>{e.Exchange_Rate}</td>
            <td className='tabletd'>{e.Imp_Name}</td>
            <td className='tabletd'>{e.Country_Origin}</td>
            <td className='tabletd'>{e.Descharge_Port}</td>
            <td className='tabletd'>{e.Exp_Name}</td>
            </tr>
            )}
           </tbody>
      </table>
    </div>
  )
}

export default ExportTable