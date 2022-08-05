import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './style.css'

const Speaker = () => {
    return (
        <div>
            <Header />
            <div className="inner-hero ">
                <div className="parallalx">
                    <div className="parallal-content">
                        <h4>
                            Our Speakers
                        </h4>
                    </div>
                </div>
            </div>
            <div className="Organizing pt-5 pb-5">
                <div className="advisory-committee pt-3 mt-2 pb-4">
                    <div className="acommittee container">
                        <div className="advisory-committed_head pb-5">
                            <p className='text-center' >LISTEN TO THE</p>
                            <h2>Our Speakers</h2>
                        </div>
                        <div className="rows">
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/speaker/first/surendrapandey.jpg" className='w-100' alt="guest_image" />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Hon'ble Surendra Pandey</h3>
                                    <span className="post">Former Finance Minister</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/speaker/first/Gagan-Kumar-Thapa.jpg" className='w-100' alt="guest_image" />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Gagan <br /> Thapa</h3>
                                    <span className="post">Former Health Minister</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/speaker/first/mahaprasadadhikari.jpg" className='w-100' alt="guest_image" />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Maha Prasad Adhikari</h3>
                                    <span className="post">Governer</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/speaker/first/sekhargolcha.jpg" alt='advisory_image' />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Sekhar <br /> Golcha</h3>
                                    <span className="post">President, FNCCI</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/speaker/first/chandrapddhakal.jpg" alt='advisory_image' />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Chandra Prasad Dhakal</h3>
                                    <span className="post">Senior Vp, FNCCI</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/speaker/first/haribhaktasharma.png" alt='advisory_image' />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Hari Bhakta Sharma</h3>
                                    <span className="post">Senior Entrepreneur</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/speaker/first/swarnimsir.jpg" alt='advisory_image' />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Swarnim <br /> Wagle</h3>
                                    <span className="post">Senior Economic Advisor</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/speaker/first/vidhusirana.jpg" alt='advisory_image' />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Vidushi <br /> Rana</h3>
                                    <span className="post">Director, Goldstar Shoes</span>
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

export default Speaker