import React from 'react';
import { Link } from 'react-router-dom';
import MyPic from './img/myPic.png'
import Particles from 'react-particles-js';

const FrontPage = () => {
    return (
        <div className="dashboard-body">
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 150,
                            "density": {
                                "enable": true,
                                "value_area": 1803.4120608655228
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 7,
                                "color": "#d1d"
                            },
                            "polygon": {
                                "nb_sides": 4
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.4008530152163807,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": .5,
                                "opacity_min": 0.2,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 1.5,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 40,
                                "size_min": 0.3,
                                "sync": true
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 0,
                            "color": "#000000",
                            "opacity": 0.7687847739990702,
                            "width": 0.6413648243462091
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": true,
                            "straight": true,
                            "out_mode": "out",
                            "bounce": true,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "window",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "bubble"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 100,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }} />
                <div className="hero-main-area">
                    <div className="hero-padding">
                        <div className="hero-main-wrap">
                            <div className="hero-profile-wrap">
                                <div className="hero-image">
                                    <img src={MyPic} alt="" />
                                </div>
                                <div className="hero-content">
                                    <h2>MD. Akhtaruzzaman</h2>
                                    <h3>I am A Frontend Developer</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                                        quae culpa eligendi tempore non illum odio in omnis quasi hic.
              </p>
                                </div>
                                <div className="hero-social">
                                    <span>
                                        <Link to="/"><i className="fab fa-facebook"></i></Link>
                                    </span>
                                    <span>
                                        <Link to='/'><i className="fab fa-twitter"></i></Link>
                                    </span>
                                    <span>
                                        <Link to='/'><i className="fab fa-skype"></i></Link>
                                    </span>
                                    <span>
                                        <Link to='/'><i className="fab fa-instagram"></i></Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
            
        </div>
    );
};

export default FrontPage;