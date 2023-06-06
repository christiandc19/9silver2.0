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
                9 Silver is a combination of sober living housing opportunities.
                Our mission is to create a stable and productive future through
                healing and close monitoring of all aspects of recovery. We
                oversee a handful of recovery clinic locations and sober living
                alternatives in Southern California.{" "}
              </p>
              <br />
              <p>
                <span>
                  <BsCheckLg />{" "}
                </span>
                To provide a structured environment that creates maximum
                healing.
              </p>
              <br />
              <p>
                <span>
                  <BsCheckLg />{" "}
                </span>
                To create a structured, safe, and functional recovery
                environment that stabilizes your life and leads to long-term
                stability.
              </p>
              <br />
              <p>
                <span>
                  <BsCheckLg />{" "}
                </span>
                To create an environment of recovery and healing that helps you
                rewrite your future and change your life.
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
