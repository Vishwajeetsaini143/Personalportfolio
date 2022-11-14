import React from "react";
import {FaReact} from 'react-icons/fa'
import {TbBrandJavascript} from "react-icons/tb"
import {ImHtmlFive} from "react-icons/im"
import {FaCss3Alt} from "react-icons/fa"
import {SiJquery} from "react-icons/si"
import {FaPlay} from "react-icons/fa"
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
                  <FaReact />
                  </li>
                  <li>
                  <SiJquery/>
                  </li>
                  <li>
                  <TbBrandJavascript/>
                  </li>
                  <li>
                  <ImHtmlFive/>
                  </li>
                  <li>
                  <FaCss3Alt/>
                    
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
