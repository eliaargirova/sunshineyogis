import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";
import { useState } from "react";

function Slider() {

  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    "public/images/hero-4.png",
    "https://unsplash.com/photos/woman-stretching-on-mountain-top-during-sunrise-I2YSmEUAgDY",
    "https://unsplash.com/photos/woman-stretching-on-mountain-top-during-sunrise-I2YSmEUAgDY",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide-1);
    
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src="public/images/hero-4.png" alt="" />
        <img src="public/images/hero-1.png" alt="" />
        <img src="public/images/hero-2.png" alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider;
