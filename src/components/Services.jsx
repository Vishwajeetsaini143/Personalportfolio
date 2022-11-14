import React, { useState } from 'react'
import {FaReact} from 'react-icons/fa'
import {TbBrandJavascript} from "react-icons/tb"
import {ImHtmlFive} from "react-icons/im"
import {FaCss3Alt} from "react-icons/fa"
import {SiJquery} from "react-icons/si"
import {BsBootstrapFill} from "react-icons/bs"

const Services = () => {
  const [state]=useState([
    {
      icon:<FaReact/>,
      heading:" React",
      text:" What happens is not as important as how you react to what happens. Our lives are not determined."
    },
    {
      icon:<TbBrandJavascript/>,
      heading:"Javascript",
      text:"The best thing about JavaScript is its implementation of functions. It got almost everything right."
    },
    {
      icon:<ImHtmlFive/>,
      heading:" Html",
      text:"I learned HTML in high school and then graduated to CSS. It's a great way to exercise my mind."
    },
    {
      icon:<FaCss3Alt/>,
      heading:" Css",
      text:" Collection of hand-picked HTML and CSS blockquote code examples: animated, hover effects, typography styles,"
    },
    {
      icon:<SiJquery/>,
      heading:"Jquery",
      text:"jQuery is by far the most widely used library for JavaScript. · “believe the power of jQuery is highly underutilized CSS symbol blockquotes."
    },
    {
      icon:<BsBootstrapFill/>,
      heading:"Bootstrap ",
      text:"Responsive Quotes built with Bootstrap 5. HTML & CSS. Quote boxes with quote symbol, blockquotes, various quote styles with HTML & CSS"
    },
  ])
 
  return (
    <div className='services' id='Services'>
        <div className='container'>
            <div className='services-header'>
               
                <div className='common'>
                <h3 className='heading'>Software Developer</h3>
                <h1 className='mainHeader'>I Web Developer</h1>
                <p className='mainContent'>
                The first tenet of the developer mindset is cultivating the zen of 
                coding: you have to learn
                 to be calm, break your problem into the smallest steps possible,
                    
                </p>
                <div className='commonBordar'></div>
                </div>
                <div className='row bgmain'>

                {state.map(item=>(
                   
                    <div className='col-4 bgmain'>
                      <div className='services-box'>
                        <span className='commonIcons'>{item.icon}</span>
                      
                        <div className='services-box-header'>
                          {item.heading}
                        </div>
                        <div className='services-box-p'>
                           {item.text}
                        </div>
                      </div>
                    </div>
                    
                  



                ))}
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Services