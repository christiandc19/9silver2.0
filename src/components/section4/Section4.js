import React from 'react'

import AMFT from '../../assets/amft.jpg'
import CaseManager from '../../assets/case-manager.jpg'
import BehavioralTech from '../../assets/behavioral-tech.jpg'

import { Link as LinkRoll } from "react-scroll";
import { Link } from 'react-router-dom';



import './Section4.css'

const Section4 = () => {
  return (
    <>
     <div class="section4">
        <div class="section4-inner">
          <h1>Immediately hiring for...</h1>
            <div class="border"></div>
      
              <div class="row">

                <div class="column">
                  <div class="section4-box">
                        <img src={AMFT} alt="Mental Health" loading="lazy"/>
                      <div class="name">Remote California AMFT</div>
                        <p>
                        Our treatment approach focuses on helping individuals develop and improve mindfulness, Emotion Regulation, Communication, Boundaries, Value, acceptance and self-compassion.</p>
                      </div>

                      <div className='section4-btn'>
                      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/contact">
                          <button>Call Us</button>
                        </Link>
                      </LinkRoll>
                      </div>

                  </div>
        
        <div class="column">
          <div class="section4-box">
          <img src={CaseManager} alt="Mental Health" loading="lazy"/>
            <div class="name">Remote Case Managers</div>
            <p>Provides clinical information and education for inbound calls and outbound calls triages behavioral health crisis calls. Uses established protocols and independent professional judgment. Documents assessment, plans, interventions and results.</p>
          </div>
                      <div className='section4-btn'>
                      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/contact">
                          <button>Call Us</button>
                        </Link>
                      </LinkRoll>
                      </div>
        </div>
        
        <div class="column">
          <div class="section4-box">
          <img src={BehavioralTech} alt="Mental Health" loading="lazy"/>
            <div class="name">Remote Behavioral Technician</div>
            <p>The Behavioral Health Technician is responsible for the complete care and well-being of the clients while they are receiving services at the facility</p>
          </div>
                      <div className='section4-btn'>
                      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/contact">
                          <button>Call Us</button>
                        </Link>
                      </LinkRoll>
                      </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Section4
