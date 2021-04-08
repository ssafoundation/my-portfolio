import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
import AboutSkill from './AboutSkill';
import Course from './Course';
import Profile from './img/profole.JPG'
import Skills from './Skills';
const About = () => {
    return (
        <div className="dashboard-body">
            <div className="about-area">
                <div className="about-padding">

                    <div className="cv-main-area">
                        <div className="cv-header header-top">
                            <aside className="cv-sidebar">
                                <div className="profile-image">
                                    <img src={Profile} alt="" />
                                </div>
                                <div className="profile-title">
                                    <h3>MD. Akhtaruzzaman</h3>
                                    <h5>Web Developer</h5>
                                </div>
                            </aside>
                            <div className="cv-body">
                                <div className="cv-about">
                                    <div className="about-title">
                                        <h2>About<span>Me</span></h2>
                                    </div>
                                    <div className="about-content">
                                        <p>Hello, I Am Akhtaruzzaman Monir. I Am A Pixel Perfect Professional And Skilled front-end Developer. I Am Experienced And Expert In Web Development Section And Working Form 2020. Full And Fresh Hand Code Is My Power. Client Satisfaction Is My First Priority. My experience in web design and development, coding languages HTML, CSS, JavaScript, PHP. Framework WordPress & react js, And Bootstrap Each Website I Make Will Be Responsive And Will Load Fast.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cv-header">
                            <aside className="cv-sidebar">
                                <div className="profile-content">
                                    <h3>CONTACT ME</h3>
                                    <div className="contact-mobile">
                                        <span><i className="fas fa-phone    "></i></span>
                                        <h4>+8801764147315</h4>
                                    </div>
                                    <div className="contact-mobile">
                                        <span><i className="fas fa-envelope-open    "></i></span>
                                        <h4>akhtar01947@gmail.com</h4>
                                    </div>
                                    <div className="contact-mobile">
                                        <span><i className="fas fa-location-arrow    "></i></span>
                                        <h4>Melendah, Jamalpur (2000), Bangladesh</h4>
                                    </div>
                                    <div className="social-area">
                                        <h3>SOCIAL LINKS</h3>
                                        <div className="contact-mobile">
                                            <span><i className="fab fa-facebook-f    "></i></span>
                                            <h4><Link to="/">Go To Facebook</Link></h4>
                                        </div>
                                        <div className="contact-mobile">
                                            <span><i className="fab fa-twitter"></i></span>
                                            <h4><Link to="/">Go To Twitter</Link></h4>
                                        </div>
                                        <div className="contact-mobile">
                                            <span><i className="fab fa-instagram"></i></span>
                                            <h4><Link to="/">Go To Instagram</Link></h4>
                                        </div>
                                        <div className="contact-mobile">
                                            <span><i className="fab fa-skype"></i></span>
                                            <h4><Link to="/">Go To Skype</Link></h4>
                                        </div>
                                    </div>
                                    <div className="languge-list">
                                        <h3>LANGUAGES</h3>
                                    </div>
                                </div>
                            </aside>
                            <div className="cv-body">
                                <div className="cv-about">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="academic-content">
                                                <div className="bachelor">
                                                    <h4><b>ACADEMIC</b> EDUCATION:</h4>
                                                    <h5>bachelor of Arts</h5>
                                                    <p>2014-2018</p>
                                                    <p>National University </p>
                                                </div>
                                                <div className="higher-education">
                                                    <h4>Higher Secondary Education </h4>
                                                    <p>2012-2013</p>
                                                    <p>Madrasah board</p>
                                                </div>
                                                <div className="secondary-education">
                                                    <h4>Secondary Education </h4>
                                                    <p>2010-2011</p>
                                                    <p>Madrasah board</p>
                                                </div>
                                            </div>
                                            <div className="skill-qualification">
                                                <div className="academic-content">
                                                    <h4>PROFESSIONAL <b>QUALIFICATION</b>:</h4>
                                                    <div className="graphics-skill">
                                                        <h4>Graphic Design </h4>
                                                        <p>I’m a Color Graphic, Social Media Graphic Designer. I have helped many businesses and entrepreneurs find the perfect color palette to resonate with their brand.</p>
                                                    </div>
                                                    <div className="graphics-skill">
                                                        <h4>Web Design</h4>
                                                        <p>I am a dedicated professional website designer and developer with almost a decade of experience.</p>
                                                    </div>
                                                    <div className="graphics-skill">
                                                        <h4>Web Developpment</h4>
                                                        <p>I am a dedicated professional website designer and developer with almost a decade of experience.</p>
                                                    </div>
                                                </div>
                                                <div className="academic-content">
                                                    <h4>FremWork Skills</h4>
                                                    <AboutSkill />
                                                </div>
                                                <Skills />
                                                
                                                
                                                
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <Course/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;