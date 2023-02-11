import React from 'react'
import Fade from 'react-reveal/Fade';
import './SoberLiving.css'


import Service1 from '../../assets/treatment-1.jpg'
import Service2 from '../../assets/treatment-2.jpg'
import Service3 from '../../assets/treatment-3.jpg'


import ContactForm from '../contact/ContactForm';

import Wave from '../../assets/waves.svg'


import { FaRegStar } from 'react-icons/fa';

const SoberLiving = () => {
    return (
        <>


{/* -------------------------------- HERO -------------------------------------- */}

        <div className='SoberLiving main-menu'>
            <div className='hero-divider'>
                <img src={Wave} loading="lazy" alt='divider' repeat-x/>
            </div>
            <div className="SoberLiving-content">
                <Fade right>
                    <h1>SOBRIETY IN LOS ANGELES</h1>
                </Fade>
            </div>
        </div>

{/* -------------------------------- SECTION 1 -------------------------------------- */}



    <div className='SoberLiving-wrap'>
    <Fade left>
        <div className="SoberLiving-box">
            <div className='SoberLiving-title'><br/>
                <h1>WHAT IS SOBER LIVING?</h1>
            </div><br/>
                <p>
                Structured, on-site community support with group sessions, one-on-one counseling and all from the comfort of home.
Check out a full breakdown of our sober living services now here.

A strong support system is how you move forward with your recovery.

Especially if your world on the outside includes the ongoing presence of drugs and alcohol that could trigger a relapse, a closely monitored approach to recovery could be the right path for you. At 9 Silver, stay as long as you need to become your best self.

Our sober living homes feature upscale furnishings and amenities, with support of round-the-clock staff to help you realize your full potential. Explore all our locations now.
                </p>
            </div>
    </Fade>
    <Fade right>
        <div className="SoberLiving-box box">
            <img src={Service1} alt="Sover Living" loading="lazy" />
        </div>
    </Fade>
</div>



<div className='SoberLiving-wrap'>
<Fade left>
    <div className="SoberLiving-box box">
        <img src={Service2}  alt="Sover Living" loading="lazy" />
    </div>
</Fade>

<Fade right>
    <div className="SoberLiving-box">
        
            <div className='SoberLiving-title'><br/>
                <h1>BENEFITS OF SOBER LIVING IN LOS ANGELES</h1> <br/>
            </div>
                <p>
                From thriving culture, arts & entertainment scene, and diverse beach and mountain, there’s something for everyone in LA.
Taking part in all the exciting sights that a vibrant city like LA has to offer is a way to keep yourself busy and stay focused during your recovery.<br/> <br/>Besides the sights, attractions, and perpetually beautiful weather, Los Angeles is also a major destination city for those seeking sobriety. Among the hotbed of quality LA clinics, you are joining one of the strongest recovery communities in the country
                </p>
    </div>
</Fade>
</div>



<div className='SoberLiving-wrap'>
<Fade left>
        <div className="SoberLiving-box">
            <div className='SoberLiving-title'>
                <h1>BENEFITS OF 55 SILVER SOBER LIVING</h1>
            </div><br/>
                <p>
                We believe that no one should have to go through the early stages of recovery alone. 9 Silver housing provides a safe space to facilitate reintegration back into the world as a sober member of society. Enjoy a comfortable and stable living situation with 9 Silver while you pick up the pieces and build a new life for yourself. Here’s what you can expect from your time at one of our sober living homes:
                <ul> <br/>
                    <li> <FaRegStar className='star'/> Jobs Mentoring. </li>
                    <li> <FaRegStar className='star'/> Heal at Your Own Pace. </li>
                    <li> <FaRegStar className='star'/> Lifestyle Monitoring. </li>
                    <li> <FaRegStar className='star'/> One-on-One Counseling. </li>
                    <li> <FaRegStar className='star'/> A Sober Healing Environment. </li>
                </ul>
                </p>
            </div>
</Fade>

<Fade right>
        <div className="SoberLiving-box box">
            <img src={Service3} alt="Sover Living" loading="lazy" />
        </div>
</Fade>
</div>










        <ContactForm />
        </>
    )
}

export default SoberLiving
