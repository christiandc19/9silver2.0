import React from 'react'
import Fade from 'react-reveal/Fade';

import './WestHollywood.css'

import Wave from '../../assets/waves.svg'


const WestHollywood = () => {
    return (
        <div className='WestHollywood submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="WestHollywood-content">
                    <Fade top>
                    <h1>WEST HOLLYWOOD, CALIFORNIA</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default WestHollywood
