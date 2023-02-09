import React from 'react'
import './Whoweare.css'
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom'

import { Link as LinkRoll } from 'react-scroll'



import WhatWeDoImg1 from '../../assets/whatwedo1.jpg'




const Whoweare = () => {
  return (
<>


<div className='homepage-wrap'>
        <Fade left>
        <div className="SoberLiving-box SoberLiving-left">
                     <div className='SoberLiving-title'><br/>
                <h1>WHY CHOOSE 9 SILVER?</h1>
            </div><br/>
                <p>
                Build a new life at one of our sober living homes across Los Angeles, providing support and a community of healing behind you, every step of the way. <br/> <br/>Transitioning back into society is difficult in many situations that's why we offer an opportunity of a new beginning to the world of sobriety.
                </p>

                <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                <Link to="/sober-living">
                    <button>LEARN MORE</button>
                </Link>
                </LinkRoll>
                </div>
            </div>
        </Fade>

        <Fade right>
        <div className="SoberLiving-box box">
            <img src={WhatWeDoImg1} width="600px" height="350px" alt="Palm Springs Rehab Logo" loading="lazy" />
        </div>
        </Fade>
</div>


</>
  )
}

export default Whoweare