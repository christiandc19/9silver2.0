import React from 'react'
import Fade from 'react-reveal/Fade';

import './Venice.css'

import Wave from '../../assets/waves.svg'


const Venice = () => {
    return (
        <div className='Venice submenu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                <div className="Venice-content">
                    <Fade top>
                    <h1>VENICE, CALIFORNIA</h1>
                    </Fade>
            </div>
        </div>
    )
}

export default Venice
