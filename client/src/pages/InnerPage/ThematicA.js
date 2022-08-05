import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { RiArrowRightSLine } from 'react-icons/ri';
import { FaUserFriends, FaAward, FaSeedling } from 'react-icons/fa';
import { GiPublicSpeaker, GiDeliveryDrone } from 'react-icons/gi';
import { SiKnowledgebase } from 'react-icons/si';
import { MdOutlineInvertColors } from 'react-icons/md';
import { HiNewspaper } from 'react-icons/hi';
import './style.css'

const ThemeA = () => {
    return (
        <div>
            <Header />
            <div className="inner-hero ">
                <div className="parallalx">
                    <div className="parallal-content">
                        <h4>
                            Summit 2022 <RiArrowRightSLine />
                            Thematic Area
                        </h4>
                    </div>
                </div>
            </div>
            <div className="Organizing pb-5">
                <div className="advisory-committee pt-3 mt-2 pb-4">
                    <div className="acommittee">
                        <div className="about-text ms-3 ms-md-0 ms-lg-0">
                            <div className="highlight_nye pt-md-3">
                                <div className='container'>
                                    <h3 className='pb-4 pt-3'>Highlights Of NYE Summit</h3>
                                    <div className="col-md-4 offset-md-4 col-lg-4 offse-lg-4">
                                        <img src="./images/area.jpg" className='w-100' alt="theme_image" />
                                    </div>
                                    <div className="highlight-card">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                                                <div className="highlight-card">
                                                    <div className="card">
                                                        <h1>600+</h1>
                                                        <p>Youth <br />
                                                            Delegates</p>
                                                    </div>
                                                    <div className="peope-icon">
                                                        <FaUserFriends className='icon' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                                                <div className="highlight-card">
                                                    <div className="card">
                                                        <h1>30+</h1>
                                                        <p>National and<br />
                                                            International Speaker</p>
                                                    </div>
                                                    <div className="peope-icon">
                                                        <GiPublicSpeaker className='icon' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                                                <div className="highlight-card">
                                                    <div className="card">
                                                        <h1>10+</h1>
                                                        <p>successful Startup<br />
                                                            Presentation and Awards</p>
                                                    </div>
                                                    <div className="peope-icon">
                                                        <FaAward className='icon' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                                                <div className="highlight-card">
                                                    <div className="card">
                                                        <h1>30+</h1>
                                                        <p>Mentor<br />
                                                            Seed Founding Opportunities</p>
                                                    </div>
                                                    <div className="peope-icon">
                                                        <FaSeedling className='icon' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                                                <div className="highlight-card">
                                                    <div className="card">
                                                        <h1>40+</h1>
                                                        <p>Collaboration <br />
                                                            & Partner</p>
                                                    </div>
                                                    <div className="peope-icon">
                                                        <SiKnowledgebase className='icon' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                                                <div className="highlight-card">
                                                    <div className="card">
                                                        <h1>70+</h1>
                                                        <p>Startup <br />
                                                            Investor</p>
                                                    </div>
                                                    <div className="peope-icon">
                                                        <MdOutlineInvertColors className='icon' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                                                <div className="highlight-card">
                                                    <div className="card">
                                                        <h1>60+</h1>
                                                        <p>Facebook Live<br />
                                                            & news coverage</p>
                                                    </div>
                                                    <div className="peope-icon">
                                                        <HiNewspaper className='icon' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
                                                <div className="highlight-card">
                                                    <div className="card">
                                                        <h1>15+</h1>
                                                        <p>Innovative expo<br />
                                                            &  Drone Activities</p>
                                                    </div>
                                                    <div className="peope-icon">
                                                        <GiDeliveryDrone className='icon' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ThemeA