import chat1 from "../Newimages/chat1.png";
import chat2 from "../Newimages/chat2.png";
import chat3 from "../Newimages/chat3.png";
import chat4 from "../Newimages/chat4.png";
import gym1 from "../Newimages/gym1.png";
import gym2 from "../Newimages/gym2.png";
// import gym3 from "../Newimages/gym3.png"
// import gym4 from "../Newimages/gym4.png"
import shop1 from "../Newimages/shop1.png";
import shop2 from "../Newimages/shop2.png";
import shop3 from "../Newimages/shop3.png";
import shop4 from "../Newimages/shop4.png";
import net1 from "../Newimages/net1.png";
import net2 from "../Newimages/net2.png";
import net3 from "../Newimages/net3.png";
// import net4 from "../Newimages/net"
import Slider from "./Slider";
import {FaReact} from 'react-icons/fa'
import {TbBrandJavascript} from "react-icons/tb"
import {ImHtmlFive} from "react-icons/im"
import {FaCss3Alt} from "react-icons/fa"

const Projects = () => {
  const data = [
    {
      app: "chat-app",
      text: "It is one to one real time chat appliction using firebase and react js  ",
      tools: "Html5,Css3,javascript,Reactjs, firebase",
      live: "https://mysecretchat11.netlify.app/",
      sliderImage: [chat1, chat2, chat3, chat4],
    },
    {
      app: "Fitness Website",
      text: "t is a fitness gym website. Using Rapid Apis for showing all type exercise. user can filterand search exercise",
      live: "https://vishugym.netlify.app/",
      tools: "Html5,Css3,javascript,Reactjs, Rapid Api",
      sliderImage: [gym1, gym2, gym1, gym2],
    },
    {
      app: "Ecommerce website",
      text: "It is a e-commercewebsite. That show datafrom Api  and also haveadd to cart functionality User can filterproduct and search product",
      tools: "Html5,Css3,javascript,Reactjs,Firebase",
      live: "https://vishwajeetshoppingcard.netlify.app/",
      sliderImage: [shop1, shop2, shop3, shop3, shop4],
    },
    {
      app: "Netfilx",
      text: "It is a netfilx website. That show data from Api show all movies",
      tools: "Html5,Css3,javascript,Reactjs, Api",
      live: "https://mymovies143.netlify.app/",
      sliderImage: [net1, net2, net3, net2],
    },
  ];

  return (
    <div className="services" id="Projects">
      <div className="container data">
        <h1>Projects</h1>
        <div className="row">
          {data?.map((item) => {
            return (
              <>
                <div className="col-6 ">
                  <div className="projects">
                    <div className="project-link">
                      <div className="data-paroject">
                        <div className="project-name">
                          <h2>{item.app}</h2>
                          <p>{item.text}</p>
                          <a href={item.live}>Live Link</a>
                        </div>
                        <div className="project-tools">
                          <h3>Technology</h3>
                          {/* <p>{item.tools}</p> */}
                        <div className="icons">
                          <span className="icon"><FaReact /></span>
                          <span className="icon"><TbBrandJavascript/></span>
                          <span className="icon"><ImHtmlFive/></span>
                          <span className="icon"><FaCss3Alt/></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Slider sliderData={item.sliderImage} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
