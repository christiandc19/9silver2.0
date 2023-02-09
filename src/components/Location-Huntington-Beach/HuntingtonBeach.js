import React from 'react'
import Fade from 'react-reveal/Fade';

import './HuntingtonBeach.css'

import Wave from '../../assets/waves.svg'


const HuntingtonBeach = () => {
    return (
        <div className='HuntingtonBeach submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="HuntingtonBeach-content">
                    <Fade top>
                    <h1>HUNTINGTON BEACH CALIFORNIA</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default HuntingtonBeach
