import React from 'react'
import ContactForm from '../contact/ContactForm';
import AboutHome from '../about/AboutHome';
import Section1 from '../section1/Section1'
import Section2 from '../section2/Section2';
import Section3 from '../section3/Section3';
import Section4 from '../section4/Section4';




const home = () => {
  return (
    <>
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <AboutHome />
    <ContactForm />
    </>
  )
}

export default home
