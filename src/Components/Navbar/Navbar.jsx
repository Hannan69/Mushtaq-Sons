import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'
import menuicon from '../../assets/menu.png'
import { Link } from 'react-scroll';
const Navbar = () => {
  const [sticky,setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[]);
  const [mobileMenu,setMobileMenu] = useState(false)
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);

  }

  return (
    <nav className ={`container ${sticky? 'dark-nav' : ''}`}>
        
        <img src={logo} alt ="" className='logo'/>
        <ul className ={mobileMenu?'' : 'hide-mobile-menu'}>
            <li><Link to ='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to ='new-product-grid' smooth={true} offset={-200} duration={500}>Products</Link></li>
            <li><Link to ='services-grid' smooth={true} offset={-200} duration={500}>Machines</Link></li>
            <li><Link to ='oeko-tex-section' smooth={true} offset={-200} duration={500}>Certifications</Link></li>
            <li><Link to ='mission-grid' smooth={true} offset={-180} duration={500}>Our Mission</Link></li>
            <li><Link to ='about' smooth={true} offset={-180} duration={500}>About Us</Link></li>
            <li><Link to ='contact' smooth={true} offset={-240} duration={500} className='btn'>Contact Us</Link></li>

        </ul>
        <img src={menuicon} alt="" className ="menuIcon" onClick={toggleMenu}/>

    </nav>
  )
}

export default Navbar