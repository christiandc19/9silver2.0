import React from 'react'
import Fade from 'react-reveal/Fade';

import './NorthDetroit.css'

import Wave from '../../assets/waves.svg'


const NorthDetroit = () => {
    return (
        <div className='NorthDetroit submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="NorthDetroit-content">
                    <Fade top>
                    <h1>NORTH DETROIT, LOS ANGELES</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default NorthDetroit
