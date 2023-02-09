import React from 'react'
import Fade from 'react-reveal/Fade';

import './NorthCitrus.css'

import Wave from '../../assets/waves.svg'


const NorthCitrus = () => {
    return (
        <div className='NorthCitrus submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="NorthCitrus-content">
                    <Fade top>
                    <h1>NORTH CITRUS, LOS ANGELES</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default NorthCitrus
