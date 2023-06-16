import React from "react";
import "./AboutHome.css";
import Fade from "react-reveal/Fade";

const MissionHome = () => {
  return (
    <>
      <div className="mission-home">
        <div className="mission-home-content container">
          <Fade top>
            <h1>OUR MISSION</h1>
          </Fade>
          <Fade left>
            <p>
            Our mission at 9 Silver is to connect employees that are talented, motivated, and driven to excellence with great businesses by opening up opportunities for both. Our goals are to provide high-quality outsourced employment, human resource services, and to empower business owners and employees to be their best. 
            </p>
          </Fade>
          <Fade right>
            <h2>"Your Future Begins Here..."</h2>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default MissionHome;
