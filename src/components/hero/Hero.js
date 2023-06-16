import React from "react";
import { Link as LinkRoll } from "react-scroll";
import { Link } from 'react-router-dom';

import Fade from 'react-reveal/Fade';

import "./Hero.css";

const Hero = () => {
  return (
    <>
<figure>

	<div class="imagesContainer">

  <div className="hero-caption">

    <Fade left>
      <h1>YOUR FUTURE BEGINS HERE</h1>
    </Fade>


    <Fade left>
    <h2>9 Silver can help you succeed</h2>
    </Fade>

    <Fade right>
    <p>Executive Search Firm Specializing in Healthcare Recruitment.
</p>
    </Fade>

    <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
          <Link to="/contact">
                <button>Call Us</button>
          </Link>
      </LinkRoll>

  </div>


		<div class="imageDiv image1">
    </div>
		<div class="imageDiv image2 fadeInClass"></div>
	</div>
</figure>
    </>
  );
};

export default Hero;
