import React from "react";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { TfiPinterestAlt } from "react-icons/tfi";
import { GrInstagram } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import my from "../Images/my.png";
const Banner = () => {
  return (
    <header className="header" id="Home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header-contant">
              <div className="header-section">
                <ul className="header-ul">
                  <li>
                    <ImFacebook />
                  </li>
                  <li>
                    <AiOutlineTwitter />
                  </li>
                  <li>
                    <TfiPinterestAlt />
                  </li>
                  <li>
                    <GrInstagram />
                  </li>
                  <li>
                    <ImFacebook />
                    
                  </li>
                </ul>
             <div className="header-left"><h1>I am Vishawjeet saini</h1></div>   
                <p>
                  i am vishwajeet, professional web developer with long time
                  experience in this field
                </p>
                <div className="header-buttons">
                  <button className=" btn-outlins">My Portfolio</button>
                  <button className=" btn-smart">
                    <FaPlay className="play" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner-img">
              <img src={my} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
