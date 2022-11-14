import Services from './components/Services'
// import { 
//   BrowserRouter, 
//   Route, 
//   Link
// } from "react-browser-router";

import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Projects from './components/Projects';
import Expert from './components/Expert';


function App() {
  return (
    <div className="App">
   <Banner/>
   <Navbar/>
   <Services/>
   <About/>
   <Expert/>
   <Projects/>
   <Contact/>
   
    </div>
  );
}

export default App;
