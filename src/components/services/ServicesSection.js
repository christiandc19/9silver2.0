import React from 'react'
import Fade from 'react-reveal/Fade';
import './ServicesSection.css'

import IconBed from '../../assets/icon-bed.jpg'
import IconExercise from '../../assets/icon-exercise.jpg'
import IconFacilities from '../../assets/icon-facilities.jpg'
import IconSupport from '../../assets/icon-support.jpg'
import IconMentoring from '../../assets/icon-mentoring.jpg'
import IconMonitoring from '../../assets/icon-monitoring.jpg'
import IconMoneyManagement from '../../assets/icon-money-management.jpg'
import IconJobs from '../../assets/icon-jobs.jpg'
import IconMeals from '../../assets/icon-meals.jpg'
import IconTransport from '../../assets/icon-transport.jpg'
import IconStaff from '../../assets/icon-staff.jpg'
import IconFamily from '../../assets/icon-family.jpg'



import Group from '../../assets/group.jpg'


const ServicesSection = () => {
    return (
        <>
        <div className='ServicesSection'>
            <div className="ServicesSection-container">
                <div>
                <h1>OUR SERVICES</h1>
                <p>A balanced approach to recovery through community & action.</p>
                </div>
                <div className="content">
                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconBed} height="50" alt="bed icon" loading="lazy"/>
                                <p>Private and Group Rooms</p>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconExercise} height="50" alt="Person Exercisign Icon" loading="lazy"/>
                                <p>Daily Activities</p>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconFacilities} height="50" alt="Facility Amenities icon" loading="lazy"/>
                                <p>Top-Notch facilities</p>
                                </div>
                            </Fade>

                            
                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconSupport} height="50" alt="Heart icon" loading="lazy"/>
                                <p>24/7 Support</p>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconMentoring} height="50" alt="Mentoring icon" loading="lazy"/>
                                <p>One-On-One Mentoring</p>
                                </div>
                            </Fade>


                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconMonitoring} height="50" alt="Nursing Monitoring icon" loading="lazy"/>
                                <p>Nurse Mentoring</p>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconMoneyManagement} height="50" alt="Money Gear icon" loading="lazy"/>
                                <p>Money Management</p>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconJobs} height="50" alt="Suitcase icon" loading="lazy"/>
                                <p>Jobs Program</p>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconMeals} height="50" alt="Meal icon" loading="lazy"/>
                                <p>Group Meals</p>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconTransport} height="50" alt="car icon" loading="lazy"/>
                                <p>Transportation</p>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconStaff} height="50" alt="Staff icon" loading="lazy"/>
                                <p>On-Site Staff</p>
                                </div>
                            </Fade>

                            
                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconFamily} height="50" alt="Family icon" loading="lazy"/>
                                <p>Family Services</p>
                                </div>
                            </Fade>
                </div>
            </div>


            <div className='group'>
            <Fade bottom>
                <img src={Group} width="500px" height="320px" alt="Company Team" loading="lazy" />
            </Fade>
            </div>



        </div>
        </>
    )
}

export default ServicesSection
