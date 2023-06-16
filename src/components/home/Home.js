import React from 'react'
// import ServicesSection from '../services/ServicesSection';
// import WhatWeDo from '../whatWeDo/Whatwedo';
// import Whoweare from '../Whoweare/Whoweare'
import ContactForm from '../contact/ContactForm';
// import Gallery from '../gallery/Gallery';
import AboutHome from '../about/AboutHome';
import Section1 from '../section1/Section1'
import Header from '../header/Header';
import Section2 from '../section2/Section2';
import Section3 from '../section3/Section3';
import Section4 from '../section4/Section4';




const home = () => {
  return (
    <>
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    {/* <WhatWeDo /> */}
    {/* <Whoweare />
    <Gallery />
    <ServicesSection /> */}
    <AboutHome />
    <ContactForm />
    </>
  )
}

export default home
