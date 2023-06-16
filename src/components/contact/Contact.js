import React from "react";
import Fade from 'react-reveal/Fade';

import ContactForm from "./ContactForm";
import './Contact.css'


const Contact = () => {

    return (
      <>

<div className='contact-hero main-menu'>
            <div className="contact-hero-content">
            <Fade top>
                    <h1>HAVE SOME QUESTIONS?</h1>
                    <p>Give us a call to speak to our HR Department</p>
                    <h2>+1 (323) 643-3171 </h2>
            </Fade>
            </div>
     </div>

      <ContactForm />

      </>
    )
}

export default Contact