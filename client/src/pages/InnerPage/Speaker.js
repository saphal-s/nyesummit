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
                                    <img src="./images/speaker/first/sportandyouthminister.jpg" className='w-100' alt="guest_image" />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Hon'ble Maheshwor Jung Gahatraj</h3>
                                    <span className="post">Minister for Youth and Sports</span>
                                </div>
                            </div>
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
                                    <img src="./images/speaker/pkg.jpg" className='w-100' alt="guest_image" />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Mr. Pawan Kumar Golyan</h3>
                                    <span className="post">Chairman, CBFIN</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/speaker/first/chandrapddhakal.jpg" className='w-100' alt="guest_image" />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Mr. Chandra Prasad Dhakal</h3>
                                    <span className="post">Senior VP, FNCCI</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/speaker/bhawanirana.jpg" className='w-100' alt="guest_image" />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Mrs. Bhawani Rana</h3>
                                    <span className="post">Former President, FNCCI</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/speaker/Siddhantarajpandey.jpg" className='w-100' alt="guest_image" />

                                </div>
                                <div className="team-info">
                                    <h3 className="title">Mr. Siddhanta Raj Pandey</h3>
                                    <span className="post">CEO, Business Oxygen</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/speaker/Umeshraghubanshi.JPG" alt='advisory_image' />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Mr. Umesh Raghubansi</h3>
                                    <span className="post"> CEO, InfoDevelopers </span>
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