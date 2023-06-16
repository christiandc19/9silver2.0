import React from "react";
import "./AboutSection.css";
// import Fade from 'react-reveal/Fade';
import Contact2 from "../contact/Contact2";
import { BsCheckLg } from "react-icons/bs";

import MissionSection1 from "../../assets/missionSection1.jpg";
// import Staff from '../../assets/staff.jpg'
// import Clinic from '../../assets/clinic.jpg'

const AboutSection = () => {
  return (
    <>
      <div className="about-section sectionbg">
        <div className="about-content container">
          <div className="about-flex">
            <div className="about-left">
              <h1>ABOUT US</h1>
              <p>
              Our mission at 9 Silver is to connect employees that are talented, motivated, and driven to excellence with great businesses by opening up opportunities for both. Our goals are to provide high-quality outsourced employment, human resource services, and to empower business owners and employees to be their best.
              </p>
              <br />
              <p>
                <span>
                  <BsCheckLg />
                </span>
                We connect talents and job demands.
              </p>
              <br />
              <p>
                <span>
                  <BsCheckLg />{" "}
                </span>
                We help jobseekers to find better offer from temporary employment to permanent.
              </p>
              <br />
            </div>

            <div className="about-right">
              <img src={MissionSection1} alt="Therapy Session" loading="lazy" />
            </div>
          </div>
        </div>
      </div>

      <Contact2 />
    </>
  );
};

export default AboutSection;
