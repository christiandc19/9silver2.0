import React from "react";
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

import './ContactForm.css';


const ContactForm = () => {
  


    return (
        <>

<section className="contact-container">
    <div className="contact-details">

      <div class="address details">
          <h3> <BsFillPinMapFill /></h3>
          <div class="topic">Address</div><br/>
          <div class="text-one">1800 Vine Street,</div>
          <div class="text-two">Los Angeles CA 90028</div>
      </div>

      <div class="phone details">
      <h3> <AiOutlinePhone /></h3>
          <div class="topic">Phone</div><br/>
          <div class="text-one"><a href="tel:3236433171"> +1 (323) 643-3171</a></div>
      </div>

        <div class="email details">
        <h3> <AiOutlineMail /></h3>
          <div class="topic">Email</div><br/>
          <div class="text-one"> info@9silver.biz</div>
        </div>

    </div>

    <div className="iframe container">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.6482282307707!2d-118.326328!3d34.104151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf3ed11d5b7b%3A0xf51f8b1896e97fc7!2s1800%20Vine%20St%2C%20Los%20Angeles%2C%20CA%2090028!5e0!3m2!1sen!2sus!4v1686934600086!5m2!1sen!2sus" title="location" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

</section>
 

        </>
    )
}

export default ContactForm