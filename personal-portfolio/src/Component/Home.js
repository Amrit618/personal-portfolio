import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Style.css"
import Common from './Common';
// import Images from "./src/Component/Images/profile.jpg";

const Home = () => {
  return (
    <>
<Common
  name ="Grow your business with Amrit" 
  imgsrc= "profile.jpg"
  visit = "/services"
  btname="Hire Me" 
   />
        </>
  )
}

export default Home;