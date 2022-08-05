import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { RiArrowRightSLine } from 'react-icons/ri';
import './style.css'

const AdvisoryC = () => {
    return (
        <div>
            <Header />
            <div className="inner-hero ">
                <div className="parallalx">
                    <div className="parallal-content">
                        <h4>
                            Our Team <RiArrowRightSLine />
                            Advisory Committee
                        </h4>
                    </div>
                </div>
            </div>
            <div className="Organizing pt-5 pb-5">
                <div className="advisory-committee pt-3 mt-2 pb-4">
                    <div className="acommittee">
                        <div className="advisory-committed_head pb-5">
                            <h2>Advisory Committee</h2>
                        </div>
                        <div className="rows">
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/advisory/ramkumarphuyal.jpeg" alt='advisory_image' />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Hon. Ram Kumar Phuyal</h3>
                                    <span className="post">Member, National Planning Commission</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/advisory/binodsir.jpg" alt='advisory_image' />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Binod Guragain</h3>
                                    <span className="post">Director, Agriculture Development Bank Ltd</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/advisory/nar.png" alt='advisory_image' />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Dr. Nar Bahadur Bista</h3>
                                    <span className="post">CEO, Uniglobe College</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/advisory/narpdsir.jpg" alt='advisory_image' />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Naresh Prasad Shrestha</h3>
                                    <span className="post">Chairman, Bishal Media Group</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/logo.png" alt='advisory_image' />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Meena Sharma</h3>
                                    <span className="post">Consultant</span>
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

export default AdvisoryC