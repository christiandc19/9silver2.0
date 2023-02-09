import React from "react";
import Fade from 'react-reveal/Fade';

import './Services.css'
import Wave from '../../assets/waves.svg'



const Services = () => {

    return (
            <>
            <div className='services main-menu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" repeat-x alt='wave divider'/>
            </div>
                        <div className="services-content">
                            <Fade top>
                                <h1>SERVICES</h1>
                            </Fade>
                        </div>
                    </div>



            </>
    )

    }
export default Services




