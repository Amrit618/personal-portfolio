import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
 import Home from "./Component/Home";
import Services from "./Component/Services";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import Footer from './Component/Footer';
import Hire from './Component/Hire';
import {
  Routes,
  Route,
  
} from "react-router-dom";




function App() {
  return (
    <>
       <div>
    
    {/* <Helmet>
        <title>Amrit Bastakoti</title>
        <meta name="description" content="Helmet application" />
    </Helmet> */}
 
    
        <Helmet>
            <title>Amrit Bastakoti</title>
            <meta name="description" content="Amrit Bastakoti" />
        </Helmet>
   
    </div>
    <Navbar />
      <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/hire" element={<Hire />}></Route>
      {/* <Navigate replace to="/" /> */}
      
     </Routes>
    <Footer />
    
     </>  
    
    
    
  );
}

export default App;
