import React from "react";
import Dowanload from "./Dowanload";
import react from "../Images/my.png"

const About = () => {
  return (
    <div className="About" id="About">
      <div className="container">
        <div className="common">
          {/* <h3 className='heading'>Software Developer</h3> */}
          <h1 className="mainHeader">About Me</h1>
          <p className="mainContent">
            The first tenet of the developer mindset is cultivating the zen of
            coding: you have to learn to be calm, break your problem into the
            smallest steps possible,
          </p>
          <div className="commonBordar"></div>
        </div>
        <div className="row h-650 alignCenter">
          <div className="col-6">
            <div className="about-img">
              <img src={react} alt="" />
            </div>
          </div>
          <div className="col-6" id="Contact">
            <div className="about-info">
              <h1>Hi There</h1>
              <div className="about-info-p1">
              A web design quotation is a document that
               a web developer sends to a potential client
                to explain service specifics 
              and prices. Developers often send website
               quotations at the onset of a project and to 
               inform and persuade customers to opt for their
                services over another developers
              </div>
              <div className="about-info-p2">Web development is the building and maintenance 
              of websites; it's 
              the work that happens behind the scenes to
               make a website look great, work fast and perform
                well with a seamless user experience</div>
            </div>
            <div className="info-contacts">
              <div className="row">
                <div className="col-6">
                  <strong>Name</strong>
                  <p>Vishwajeet saini</p>
                </div>
                <div className="col-6">
                  <strong>Email</strong>
                  <p>sainivishu842@gmail.com</p>
                </div>
                <div className="col-6">
                  <strong>Phone</strong>
                  <p>9997616635</p>
                </div>
                <div className="col-6">
                  <strong>Linkdin</strong>
                 
          <p>    <a href="https://www.linkedin.com/mynetwork/">Link</a></p>
              
                </div>
              </div>
              <div className="row">
              <div className="col-6">
                  <strong>Download Resume</strong>
                  <p><Dowanload/></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
