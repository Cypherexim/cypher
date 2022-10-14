import React,{useState} from 'react'
import './Sidebar.css'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import{BsChevronDown , BsChevronUp} from 'react-icons/bs'
import { ButtonGroup, Checkbox } from '@chakra-ui/react'
import DatePicker from './DatePicker'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { Button } from '@chakra-ui/react'
import {RiBookmarkFill} from 'react-icons/ri'
import{MdDownloadForOffline} from 'react-icons/md'
import Table from './Table'
import { useSelector,useDispatch } from 'react-redux'
import ExportTable from './ExportTable'
import { Getexdata } from '../redux/action'
import { useDisclosure,Modal,ModalBody,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,Input,ModalFooter} from '@chakra-ui/react'


import { Getdata } from '../redux/action'
import HsCode from './HsCode'


const Sidebar = () => {
  const [openSide,  setOpenSide] = useState(false);
  const[down , setDown] = useState(false);
  const[up, setUp] = useState(true);
  const[search,setSearch] = useState("");
  const[count,setCountry] = useState(false);
  const[exprt ,setExport] = useState(false);
  const[impt ,setImport] = useState(false);
  const[hscd ,setHscd] = useState(false);
  const[hsdes , setHsdes] = useState(false);
const country = ['Afghanistan','Albania', 'Algeria','Andorra', 'Angola', 'Antigua and Barbuda','Argentina','Armenia','Australia','Austria', 'Azerbaijan','Afghanistan','Albania', 'Algeria','Andorra', 'Angola', 'Antigua and Barbuda','Argentina','Armenia','Australia','Austria', 'Azerbaijan'];
const [value, setValue] = useState('Choose');
const[period , setPeriod] = useState("");
const [hide ,setHide] = useState(false);
const[fromData,setFromData] = useState();
const dispatch = useDispatch();
const[change ,setChange] = useState(false);
 
const records = useSelector(store=>store.Alldata)
console.log(records)


const handleShow =(event)=>{
  const getUser = event.target.value;
  setHide(getUser)
}

const periodChange = (e) => {
  setPeriod(e.target.value)
}

const handleChange = (event) => {
  setValue(event.target.value);
};
const handleSearch = (e) => {
  setSearch(e.target.value)

}
console.log(search);


const formData =(e)=>{
const {name,value} = e.target
setFromData({
  ...fromData,[name]:value
})
}

console.log(fromData);

const handleSubmit =() =>{
{change ? dispatch(Getdata(fromData)) : dispatch(Getexdata(fromData))}
}

const handleSee =(e) =>{
 setChange(e.target.value) 
}

const handleType=(e)=>{
if(e.target.value =="import"){
  setChange(true);
} else if(e.target.value =="export"){
  setChange(false);
} 
}
const{isOpen,onOpen,onClose} = useDisclosure()

return (
  
    <div className='main'>
    
      <div>
      <div> {openSide ? null:
        <div className='rightbox' onClick={()=> setOpenSide(true)}> 
          <FiChevronRight className='righticon' />
        </div> }
        {openSide ?
      <div className='mainsidebox'>
      
      <div className='custom'>
    <div className='icon'  onClick={()=> setOpenSide(false)}>
      <FiChevronLeft className='icon1'/>
     </div>
     </div>
     { up ? null :
     <div className='ship'>
      <div className='ship1'>
        <img className='shipimg3' src ="images/Ship.png"/>
        </div>
        <div className='drop1'>
        <p className='advsearch'>Advance Search</p>
        < BsChevronDown  className='advdrop'  onClick={()=> setUp(true)}/>
        </div>  
        
       </div> }
       { up ?
      <div className='mainsidebox1'>
       <div className='ship'>
      <div className='ship1'>
        <img className='shipimg3' src ="images/ship.png"/>
        </div>
        <div className='ship2'>
        <p className='shiptext'>Shipments</p>
        </div>
       </div>
       <div className='ship'>
      <div className='ship1'>
        <img className='shipimg3' src ="images/analysis.png"/>
        </div>
        <div className='ship2'>
        <p className='shiptext'>Analysis</p>
        </div>
       </div>
       <div className='ship'>
      <div className='ship1'>
        <img className='shipimg3' src ="images/work.png"/>
        </div>
        <div className='ship2'>
          <div className='drop1'> 
        <p className='shiptextwork' >WorkStation</p>
    {down ? null : 
        < BsChevronDown  className='drop' onClick={()=> setDown(true)}/>}
        {down ?  
        < BsChevronUp className='drop' onClick={()=> setDown(false)}/>:null}
        </div> 
        </div>
        
       </div>
       { down ? 
        <div className='tags'> 
          <li> Import</li>
          <li>Export</li>
        </div> :null}
       <div className='ship'>
      <div className='ship1'>
        <img className='shipimg3' src ="images/not.png"/>
        </div>
        <div className='ship2'>
        <p className='shiptext'>Notification</p>
        </div>
       </div>
       <div className='ship'>
      <div className='ship1'>
        <img className='shipimg3' src ="images/search1.png"/>
        </div>
        <div className='ship2'>
        <p className='shiptext'>Search</p>
        </div>
       </div>
       <div className='ship'>
      <div className='ship1'>
        <img className='shipimg3' src ="images/task.png"/>
        </div>
        <div className='ship2'>
        <p className='shiptext'>Task</p>
        </div>
       </div>
       <BsChevronUp  className='dash'  onClick={()=> setUp(false)}/>
      </div> : null}
    </div> 
       :null}
      </div>
      <div> 
        {openSide ?
      <div className='mainsidebox'>
      
      <div className='custom'>
      <img className='funnel'   src="https://img.icons8.com/ios-glyphs/30/FFFFFF/empty-filter.png"/>
      <div className='custom1'>Custom Filter</div>
      </div>
     
      <div className='mainsidebox1'>
      <div className='test'>
       <div className='test1' >
         <p >Exporter Name</p>
         </div>
       {exprt ? null : 
        < BsChevronDown  className='drop2' onClick={()=> setExport(true)}/>}
        {exprt ?  
        < BsChevronUp className='drop2' onClick={()=> setExport(false)}/>:null}

        
      
       </div>
       {/* { exprt ? 
        <div className='country'> 
        <input  placeholder='search' onChange={handleSearch}/>
          {country.filter(e=>e.toLowerCase().includes(`${search}`)).map(e=><div><Checkbox>{e}</Checkbox> </div>)}
        </div> :null  } */}
      <div className='test'>
       <div className='test1' >
         <p >Importer Name</p>
         </div>
       {exprt ? null : 
        < BsChevronDown  className='drop2' onClick={()=> setExport(true)}/>}
        {exprt ?  
        < BsChevronUp className='drop2' onClick={()=> setExport(false)}/>:null}

        
      
       </div>
       {/* { impt ? 
        <div className='country'> 
        <input  placeholder='search' onChange={handleSearch}/>
          {country.filter(e=>e.toLowerCase().includes(`${search}`)).map(e=><div><Checkbox>{e}</Checkbox> </div>)}
        </div> :null} */}
       <div className='test'>
      
     
          <div className='test1'> 
        <p >Country</p>
        </div> 
    {count ? null : 
        < BsChevronDown  className='drop2' onClick={()=> setCountry(true)}/>}
        {count ? 
        < BsChevronUp className='drop2' onClick={()=> setCountry(false)}/>:null}
     
       
       </div>
       { count ? 
        <div className='country'> 
        <input  placeholder='search' onChange={handleSearch}/>
            {country.filter(e=>e.toLowerCase().includes(`${search}`)).map(e=><div><Checkbox>{e}</Checkbox> </div>)}
        </div> :null}
        <div className='test'>
       <div className='test1' >
         <p >HS Code</p>
         </div>
       {exprt ? null : 
        < BsChevronDown  className='drop2' onClick={()=> setExport(true)}/>}
        {exprt ?  
        < BsChevronUp className='drop2' onClick={()=> setExport(false)}/>:null}

        
      
       </div>
       {/* { hscd ? 
        <div className='country'> 
        <input  placeholder='search' onChange={handleSearch}/>
          {country.filter(e=>e.toLowerCase().includes(`${search}`)).map(e=><div><Checkbox>{e}</Checkbox> </div>)}
        </div> :null} */}

<div className='test'>
       <div className='test1' >
         <p >HS Code Description</p>
         </div>
       {exprt ? null : 
        < BsChevronDown  className='drop2' onClick={()=> setExport(true)}/>}
        {exprt ?  
        < BsChevronUp className='drop2' onClick={()=> setExport(false)}/>:null}

        
      
       </div>
       {/* { hsdes ? 
        <div className='country'> 
        <input  placeholder='search' onChange={handleSearch}/>
          {country.filter(e=>e.toLowerCase().includes(`${search}`)).map(e=><div><Checkbox>{e}</Checkbox> </div>)}
        </div> :null}  */}
       
       <div className='test'>
       <div className='test1' >
         <p >Port of Discharge</p>
         </div>
       {exprt ? null : 
        < BsChevronDown  className='drop2' onClick={()=> setExport(true)}/>}
        {exprt ?  
        < BsChevronUp className='drop2' onClick={()=> setExport(false)}/>:null}

        
      
       </div>
       {/* { hsdes ? 
        <div className='country'> 
        <input  placeholder='search' onChange={handleSearch}/>
          {country.filter(e=>e.toLowerCase().includes(`${search}`)).map(e=><div><Checkbox>{e}</Checkbox> </div>)}
        </div> :null}  */}
        
      
        <div className='test'>
       <div className='test1' >
         <p >Port of Loading</p>
         </div>
       {exprt ? null : 
        < BsChevronDown  className='drop2' onClick={()=> setExport(true)}/>}
        {exprt ?  
        < BsChevronUp className='drop2' onClick={()=> setExport(false)}/>:null}

        
      
       </div>
     {/* { hsdes ? 
      <div className='country'> 
      <input  placeholder='search' onChange={handleSearch}/>
        {country.filter(e=>e.toLowerCase().includes(`${search}`)).map(e=><div><Checkbox>{e}</Checkbox> </div>)}
      </div> :null}  */}
      
      <div className='test'>
       <div className='test1' >
         <p >Mode of Port</p>
         </div>
       {exprt ? null : 
        < BsChevronDown  className='drop2' onClick={()=> setExport(true)}/>}
        {exprt ?  
        < BsChevronUp className='drop2' onClick={()=> setExport(false)}/>:null}

        
      
       </div>
     {/* { hsdes ? 
      <div className='country'> 
      <input  placeholder='search' onChange={handleSearch}/>
        {country.filter(e=>e.toLowerCase().includes(`${search}`)).map(e=><div><Checkbox>{e}</Checkbox> </div>)}
      </div> :null}  */}
      
      
      <div className='test'>
       <div className='test1' >
         <p >UQC</p>
         </div>
       {exprt ? null : 
        < BsChevronDown  className='drop2' onClick={()=> setExport(true)}/>}
        {exprt ?  
        < BsChevronUp className='drop2' onClick={()=> setExport(false)}/>:null}

        
      
       </div>
     {/* { hsdes ? 
      <div className='country'> 
      <input  placeholder='search' onChange={handleSearch}/>
        {country.filter(e=>e.toLowerCase().includes(`${search}`)).map(e=><div><Checkbox>{e}</Checkbox> </div>)}
      </div> :null}  */}
      
      <div className='test'>
       <div className='test1' >
         <p >Quantity</p>
         </div>
       {exprt ? null : 
        < BsChevronDown  className='drop2' onClick={()=> setExport(true)}/>}
        {exprt ?  
        < BsChevronUp className='drop2' onClick={()=> setExport(false)}/>:null}

        
      
       </div>
      </div>  
    </div> 
       :null}
      </div>
      </div>
    <div className='content'>
      <div className='contentmain'>
      <div className='contentmain2'>
       <p >What's Trending</p>
      </div>
      <div className='contentmain2'>
       <p >Company Profile</p>
      </div>
      <div className='contentmain2'>
       <p >Hs Code Analysis</p>
      </div>
      <div className='contentmain2'>
       <p >Country Analysis</p>
      </div>
      <div className='contentmain2'>
       <p >Port Analysis</p>
      </div>
      <div className='contentmain2'>
       <p >Customize Analysis</p>
      </div>
      </div>
      <div className='feature'>
       <div  className='feat' >
       
      <div className='direct'>
       
       <select className='opt1' onChange={handleType}>
        
         <option value={"direction"}>Direction</option>
          <option  value={"import"}>Import </option>
          <option value={"export"}>Export</option>
        </select>
      
      </div>
      <div>
      <select className='opt1' value={value} onChange={handleChange}    >
         
        
         <option>Last Month</option>
         <option>Last 3 Month</option>
         <option>Last 6 Month</option>
           <option>Last Year</option>
         <option>Last  One Year</option>
         <option>Custom</option>
       </select>
       </div>
    
       <div className='start'>
       <p>From</p>
        <div className='start1'>
        <input  style ={{fontSize:"15px", height:"30px",width:"160px",borderRadius:"10px"}} type="date" name='fromDate'  onChange={formData} />       
        </div>
       </div>
       <div className='start'>
       <p>To</p>
        <div className='start1' onChange={(e) =>{handleShow(e)}} >
        <input  style ={{fontSize:"15px", height:"30px",width:"160px",borderRadius:"10px"}} type="date" name='toDate'  onChange={formData} />       
       </div>
       </div>
   
      </div>
      { hide ?
       <div>
      <div className='feat'>
      <div className='direct'>
       HS Code
       <input className='opt1' name ="HSCODE" onChange={formData} />
       <AiOutlinePlusCircle  className='hsdesc' onClick={onOpen}/>
           

       <Modal isOpen={isOpen} onClose={onClose} size={400}   >
             <ModalOverlay />
             <ModalContent p={6} w={'40%'} >
               
               <ModalCloseButton  marginRight={"3%"}/>
             <ModalBody >
              <HsCode/>
             </ModalBody>
     
              
             </ModalContent>
           </Modal>


          </div>
          <div className='direct'>
             Product      
         <input className='opt1'   name ="HSCodeDesc" onChange={formData}/>
       </div>
      <Button  className='mainsearch'  style={{backgroundColor:"rgb(52,158,210)",height:"30px"}} onClick={handleSubmit}>Search</Button>
       </div>
       <div className='feat'>
      <div clas sName='direct'>
      Exporter
       <input className='opt1' name ="EXPORTER_NAME" onChange={formData}  />
       </div>
          <div className='direct' style={{marginLeft:"20px"}}>
             Importer      
         <input className='opt1' name ="Importer_Name" onChange={formData} />
       </div>
      <Button className='mainsearch' style={{backgroundColor:"rgb(52,158,210",height:"30px"}}>Reset</Button>
       </div>  
       </div> 
  :null }
       </div> 
      <div className='datavaluesmain'>
        <div  className='records' >  
        <p>Records</p>
        <p>{records?records.length:null}</p>
        </div>
        <div  className='records' >  
        <p>Code</p>
        <p>1284</p>
        </div>
        <div  className='records' >  
        <p>Exporters</p>
        <p>1284</p>
        </div>
        <div  className='records' >  
        <p>Importers</p>
        <p>1284</p>
        </div>
        <div  className='records' >  
        <p>Country</p>
        <p>1284</p>
        </div>
        <div  className='records' >  
        <p>Records</p>
        <p>1284</p>
        </div> 
        <RiBookmarkFill  className='save'/>
        < MdDownloadForOffline className='download' />
          
      <div  style={{display:"flex"}}>
         <select className='pageselect' >
         <option>25 </option>
          <option >50</option>
          <option >100</option>
          <option >200</option>
        </select>
      
      </div>
</div>
<div className='databox'>
    
{ change ? <Table/> : <ExportTable/>}
     </div>
      </div>
     
    </div>
  )
}

export default Sidebar
