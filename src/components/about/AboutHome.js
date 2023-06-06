import React from "react";
import "./AboutHome.css";
import Fade from "react-reveal/Fade";

const MissionHome = () => {
  return (
    <>
      <div className="mission-home">
        <div className="mission-home-content container">
          <Fade top>
            <h1>ABOUT US</h1>
          </Fade>
          <Fade left>
            <p>
              9 Silver is a combination of sober living housing opportunities.
              Our mission is to create a stable and productive future through
              healing and close monitoring of all aspects of recovery. We
              oversee a handful of recovery clinic locations and sober living
              alternatives in Southern California.
            </p>
          </Fade>
          <Fade right>
            <h2>"Find your happiness and put it first."</h2>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default MissionHome;
