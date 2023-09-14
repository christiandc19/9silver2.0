import React from 'react'
import './Section1.css'

import { RxMagnifyingGlass } from 'react-icons/rx';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineTeam } from 'react-icons/ai';
import Fade from 'react-reveal/Fade';


const Section1 = () => {
  return (
    <>
      <div className='section1'>

        <Fade left>
            <div className='section1-header'>
                <h1>Why 9 Silver?</h1><br/>
                <p>Top offers from the best employers in the market. Apply and we will support you throughout the recruitment process.
                </p>
            </div>
        </Fade>

        <div className='section1-flex1'>

        <Fade left>
          <div className='flexItems '>
            <RxMagnifyingGlass className='flex-icon'/> 
            <h1>Diverse candidate database</h1>
            <p>Whether it be nurses, medical billers and coders, or advanced practitioners, we have a database full of quality healthcare professionals ready to work.</p>
          </div>
          </Fade>


        <Fade right>
          <div className='flexItems '>
            <BsPeople className='flex-icon'/> 
            <h1>Personalized workforce solutions</h1>
            <p>Our healthcare recruiting agency is committed to helping your business thrive, working with you to create quality solutions to solve your unique staffing challenges.</p>
          </div>
      </Fade>

      <Fade bottom>
          <div className='flexItems '>
            <AiOutlineTeam className='flex-icon'/> 
            <h1>Expert recruitment partners</h1>
            <p>Candidates are trained and certified by expert recruiters. From contract to full-time positions, your needs will be met with excellence.</p>
          </div>
        </Fade>

</div>


      </div>



    </>
  )
}

export default Section1


