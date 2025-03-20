import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Grid from './Components/Grid/Grid'
import CertSection from './Components/Certificate/Certificate'
import ProductGrid from './Components/ProductGrid/ProductGrid'
import Card from './Components/Card/Card'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      
        <Title subTitle='What we Deal in' title='PRODUCTS'/>
        <ProductGrid/>
        <Title subTitle='What we Use' title='MACHINES'/>
        <Services/>
        <Title subTitle='Ensuring Quality and Compliance' title='CERTIFICATIONS'/>
        <CertSection/>
        <Title subTitle='Inspiring Purpose and Progress' title='Our Mission'/>
        <Grid/>
        <About/>
        <Title subTitle='Get in Touch' title='CONTACT US'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App