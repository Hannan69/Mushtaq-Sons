import React from 'react'
import './About.css'

import sticker from "../../assets/stickers.jpg";
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={sticker} alt="" />
        </div>
        <div className="about-right">
            <h3>About Us</h3>
            <h2>Crafting Labels, Defining Identity.</h2>
            <p>Mushtaq and Sons started in 2001 with a simple goal: to provide reliable, high-quality service to our clients. Over the years, we've grown into a close-knit team of 21 passionate professionals dedicated to understanding your needs and delivering tailored solutions. We’ve had the privilege of building long-term relationships with clients across different industries, always
            focused on trust, integrity, and customer satisfaction. As we continue to evolve, we're committed to staying innovative and adapting to the market's changing needs.</p>
            
        </div>
    </div>
  )
}

export default About