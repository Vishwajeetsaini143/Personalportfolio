import React from 'react'
import {ImFacebook} from 'react-icons/im'
import {AiOutlineTwitter} from 'react-icons/ai'
import {TfiPinterestAlt} from 'react-icons/tfi'
import {GrInstagram} from 'react-icons/gr'
// import {FaPlay} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact' id='Blog'>
        <div className='common'>

            <div className='contactSection'>
               
                    <div className='row justifyCenter'>
                        <div className='col-12'>
                        <div className='contactSection-logo'>
                    <h1>VISHU</h1>
                    </div>
                      <p>  The first tenet of the developer mindset is cultivating 
                        the zen of coding: you have to learn to be calm, break your problem into the smallest steps possible, and methodically go through your scripts line by line to root out the bug. 
                        Most importantly, you can't give up until it's done.</p>
                       
                            <ul className='contactCircles'>
                            <li><ImFacebook/></li>
                            <li><AiOutlineTwitter/></li>
                            <li><TfiPinterestAlt/></li>
                            <li><GrInstagram/></li>
                           
                            </ul>
                       
                            </div>
                        
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact