import React from 'react'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

import './Hero.css'

import Wave from '../../assets/waves.svg'


const Hero = () => {
    return (

<>

        <div className='hero main-menu'>
        <div className='hero-divider'>
        <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>

            </div>
                <div className="hero-content">
                    <Fade left>
                    <h1>LIVE SOBER. HEAL STRONGER.</h1>
                    </Fade>
                    <Fade right>
                    <h2>Safety. Structure. Support. Healing</h2>
                    </Fade>
                    <Fade bottom>
                    <h3>Transitional sober housing focused on healing and long-term recovery.</h3>
                    </Fade>

                <div>
                <Link to="/contact">
                    <button>GET HELP NOW</button>
                </Link>
                </div>
                </div>
            </div>
</>
    )
}

export default Hero
