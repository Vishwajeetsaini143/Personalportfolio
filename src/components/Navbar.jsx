import React, { useState } from 'react'
import {BiMenu} from "react-icons/bi"
const Navbar = () => {
    const [open,setOpen]=useState(false)
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='navbar-container'>
            <ul className='navbar-left'>
                <div className='navbar-left-logo'>
                    <h1>VISHU</h1>
                </div>
            </ul>
             <ul className={`navbar-right ${open?'show':''}`}>
                <li> <a href='#Home' >Home</a></li>
                <li><a href='#Projects' >Projects</a></li>
                <li><a href='#About' >About</a></li>
                <li><a href='#skils' >Skills</a></li>
                <li><a href='#Home' >Portfolio</a></li>
                <li><a href='#Blog' >Blog</a></li>
                <li><a href='#Contact' >Contact</a></li>
                
            </ul> 
            
        
           
            </div>
          
        </div>
        <div className='toggle' onClick={()=>setOpen(!open)}><BiMenu/></div>
    </div>
  )
}

export default Navbar