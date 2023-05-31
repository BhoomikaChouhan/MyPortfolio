import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png"
import Card from '../Card/Card';

const Services = () => {
  return (
    <div className="services">

        {/* left side */}
        <div className="awesome">
         <span>My Awesome</span>
         <span>services</span>
         <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus optio facere quam laborum, 
            <br />
            ipsum quos reprehenderit harum qui cupiditate repellat nemo fuga porro </span> 
            <button className='button s-button' >
             Download CV </button>  
            <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className="cards">
        <div style={{left: '14rem'}} >
          <Card
          emoji={HeartEmoji}
          heading = {'Design'}
          detail = {"Figma,Photoshop lorem lorem lorem lorem"}
          />
        </div>
        {/* 2nd card */}
        <div style={{top:"12rem",left:"-4rem"}} >
         <Card
          emoji={Glasses}
          heading={"Developer"}
          detail={"Html, Css, javascript, React"}
         />
        </div>

         {/* 3rd card */}
         <div style={{top:"19rem",left:"12rem"}} >
         <Card
          emoji={Humble}
          heading={"UI/UX"}
          detail={"Lorem ispum dummy text are usually usein section where we need some random text"}
         />
        </div>

        </div>

    </div>
  )
}

export default Services