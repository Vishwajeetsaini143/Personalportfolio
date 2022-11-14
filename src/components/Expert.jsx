import React from "react";
import {MdDone} from "react-icons/md"
const Expert = () => {
  return (
    <div className="expert" id="skils">
      
      <div className="container ">
      <h1 className="hdata">Skils</h1>
        <div className="row datap">
          
          <div className="col-6">
            <p>I,M EXPERT ON</p>
            <h1>Let,s Work Together</h1>
            <div className="expart-p">
              A software development quotation is a project cost estimate,
              usually sent with a software development proposal before you start
              the job. This document is more important than an invoice because
              your prospective client must agree to the software quotation and
              terms before proceeding with the project.
            </div>
            <div>
              <button>Hire Me Now</button>
            </div>
          </div>
          <div className="col-6">
            <div className="Expert-main"></div>
            <div className="expert-right">
           <div className="expert-h">
           <span><MdDone/></span>
           <p>React JS</p>
          
            </div>   
             
            </div>
            <div className="expert-right">
           <div className="expert-h">
           <span><MdDone/></span>
           <p>Bootstarp</p>
          
            </div>   
             
            </div>
            <div className="expert-right">
           <div className="expert-h">
           <span><MdDone/></span>
           <p>Javascript</p>
        
            </div>   
              
            </div>
            <div className="expert-right">
           <div className="expert-h">
           <span><MdDone/></span>
           <p>Html</p>
           
            </div>   
              
            </div>
            <div className="expert-right">
           <div className="expert-h">
           <span><MdDone/></span>
           <p>Css</p>
          
            </div>   
              
            </div>
            
            

            
            

            
            
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Expert;
