import React from 'react'
import './MissionSection.css'
import Fade from 'react-reveal/Fade';
import ContactForm from '../contact/ContactForm'

import Therapy from '../../assets/therapy.jpg'
import Staff from '../../assets/staff.jpg'
import Clinic from '../../assets/clinic.jpg'



const MissionSection = () => {
    return (
        <>
        <div className='mission-section container'>
        <h1 className='mission-header'>OUR PHILOSOPHY</h1>
        <p>9 Silver is a combination of sober living housing opportunities. Our mission is to create a stable and productive future through healing and close monitoring of all aspects of recovery. We oversee a handful of recovery clinic locations and sober living alternatives in Southern California. </p>

        <h1 className='mission-header'>OUR MINDSET</h1>


            <div>
                <div className="content">
                <div className='flex-right'>
                    <Fade top>
                    <div className='thumbnail'>
                        <img src={ Therapy } width="300" height="250" alt="Therapy Session" loading="lazy"/>
                        <div>                   
                        <p>To provide a structured environment that creates maximum healing.</p>
                        </div>
                    </div>
                    </Fade>


                    <Fade bottom>
                    <div className='thumbnail'>
                    <img src={ Staff } width="300" height="250" alt="Clinic Staff" loading="lazy"/>
                    <p>To create a structured, safe, and functional recovery environment that stabilizes your life and leads to long-term stability.</p>
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='thumbnail'>
                    <img src={ Clinic } width="300" height="250" alt="Bluecross  Logo" loading="lazy"/>
                    <p>To create an environment of recovery and healing that helps you rewrite your future and change your life.</p>
                    </div>
                    </Fade>
                         

                    </div>
                </div>
            </div>
        </div>

        <ContactForm />

</>
    )
}

export default MissionSection
