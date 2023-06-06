import React from 'react'
import ContactForm from '../contact/ContactForm'
import Fade from 'react-reveal/Fade';



import './NorthDetroitSection.css'



const NorthDetroitSection = () => {
  return (
<>
<div className="NorthDetroit-section-header container">
                <h1>LOS ANGELES - NORTH DETROIT</h1><br/>
                <p>Especially early on in your recovery, a structured, comfortable living environment can make all the difference. Come find healing just a few minutes away from shopping at The Grove, hiking in the canyons, and all the sites Hollywood has to offer.
                </p>
</div>

<div className="NorthCitrus-section-header container">
                <h2>Gallery</h2>
              </div>


              <div className='homes container'>
                  <Fade top>
                    <div className='thumbnail'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/detroit1-min.jpg"  alt="Home" loading="lazy"/>
                    </div>
                    </Fade>

                  <Fade top>
                    <div className='thumbnail'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/detroit2-min.jpg"  alt="Home" loading="lazy"/>
                    </div>
                  </Fade>

                  <Fade top>
                    <div className='thumbnail'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/detroit3.jpg" alt="Home" loading="lazy"/>
                    </div>
                  </Fade>

                  <Fade top>
                    <div className='thumbnail'>
                        <img src="https://55silver.s3.us-west-1.amazonaws.com/55silver_medias/detroit3.jpg" alt="Home" loading="lazy"/>
                    </div>
                  </Fade>
              </div>


<div className="NorthDetroit-section-header container">
            <br />
            <h1>TALK TO SOMEONE AT OUR NORTH DETROIT HOME TODAY!</h1>
            <p>Our Support team is available 24 hours a day 7 Days a week.</p>
        </div>
<ContactForm />

    </>
  )
}

export default NorthDetroitSection
