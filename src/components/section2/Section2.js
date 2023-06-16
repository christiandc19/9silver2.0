import React from 'react'
import Card1 from '../../assets/section2-1-min.jpg'
import Card2 from '../../assets/section2-2-min.jpg'
import Card3 from '../../assets/section2-3-min.jpg'
import Card4 from '../../assets/section2-4-min.jpg'
import Card5 from '../../assets/section2-5-min.jpg'
import Card6 from '../../assets/section2-6-min.jpg'

import './Section2.css'

const Section2 = () => {
  return (
    <>
      
      <div className='section2'>

        <div className='section2-content'>

            <div className='section2-flex'>

                <div className='section2-flexItem overlay'>
                    <img src={Card1} alt="Mental Health" loading="lazy"/>
                    <div className="centered">
                        <h1>In-Patient Detox and Residential Center</h1>
                    </div>
                </div>

                <div className='section2-flexItem overlay'>
                    <img src={Card2} alt="Mental Health" loading="lazy"/>
                    <div className="centered">
                        <h1>Health Sciences Higher Education</h1>
                    </div>
                </div>

                <div className='section2-flexItem overlay'>
                    <img src={Card3} alt="Mental Health" loading="lazy"/>
                    <div className="centered">
                        <h1>Community Based Non-Profit</h1>
                    </div>
                </div>

                <div className='section2-flexItem overlay'>
                    <img src={Card4} alt="Mental Health" loading="lazy"/>
                    <div className="centered">
                        <h1>Individual Substance Abuse and Mental Health Therapy</h1>
                    </div>
                </div>

                <div className='section2-flexItem overlay'>
                    <img src={Card5} alt="Mental Health" loading="lazy"/>
                    <div className="centered">
                        <h1>Long Term Care</h1>
                    </div>
                </div>

                <div className='section2-flexItem overlay'>
                    <img src={Card6} alt="Mental Health" loading="lazy"/>
                    <div className="centered">
                        <h1>Behavioral Health</h1>
                    </div>
                </div>


            </div>

        </div>

      </div>

    </>
  )
}

export default Section2
