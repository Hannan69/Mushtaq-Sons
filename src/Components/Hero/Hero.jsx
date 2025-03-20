import React from 'react';
import './Hero.css';
import backgroundVideo from '../../assets/herobgvideo.mp4';

const Hero = () => {
  return (
    <div className="hero container">
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-text">
        <h1>We Create Customized Labels That Stand Out</h1>
        <p>Tailored Solution for All Your Branding Needs</p>
        <button className="btn">Mushtaq & Sons</button>
      </div>
    </div>
  );
};

export default Hero;
