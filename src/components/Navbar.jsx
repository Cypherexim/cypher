import React from 'react'
// import Profile from '../images/Profile.png'
import { useDisclosure,Modal,ModalBody,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,Input,ModalFooter,Button} from '@chakra-ui/react'

import './Navbar.css'
import Sidebar from './Sidebar'
import Countries from './Countries'
import ProfileDrop from './ProfileDrop'
const Navbar = () => {
  const{isOpen,onOpen,onClose} = useDisclosure()
  return (
    <div className='header'>
       <div className='title'>
       <img  className='logo' src="images/logo.png" onClick={onOpen} />
     <img  className='cr'  src = "./images/Title2.png"/>
  </div>

      <div className='setting'>
         <img className='team1' src="images/profile.png"  />
      
       
        <img className='team1' src="images/Not.png"/>
        

        <img className='team' src="images/Setting.png"/>
       
      </div>
      <div>
     
     <Modal isOpen={isOpen} onClose={onClose} size={400}   >
             <ModalOverlay />
             <ModalContent p={6} w={'90%'} >
               
               <ModalCloseButton  marginRight={"4%"}/>
             <ModalBody >
              <Countries/>
             </ModalBody>
     
              
             </ModalContent>
           </Modal>
     
               
               </div>
    </div>
    
  )
}

export default Navbar
