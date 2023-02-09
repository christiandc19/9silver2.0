import React from 'react'
// import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

import './Mission.css'

import Wave from '../../assets/waves.svg'


const Mission = () => {
    return (

<>

        <div className='mission main-menu'>
        <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="mission-content">
                    <Fade top>
                    <h1>MISSION</h1>
                    </Fade>
                </div>
            </div>
</>
    )
}

export default Mission
