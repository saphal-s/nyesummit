import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { RiArrowRightSLine } from 'react-icons/ri';
import './style.css'

const OrganizingC = () => {
    return (
        <div>
            <Header />
            <div className="inner-hero ">
                <div className="parallalx">
                    <div className="parallal-content">
                        <h4>
                            Our Team <RiArrowRightSLine />
                            Organizing Committee
                        </h4>
                    </div>
                </div>
            </div>
            <div className="Organizing pt-5 pb-5">
                <div className="advisory-committee pt-3 mt-2 pb-4">
                    <div className="acommittee">
                        <div className="advisory-committed_head pb-5">
                            <h2>Organizing Committee</h2>
                        </div>
                        <div className="rows">
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/bishalsir.jpg" alt='advisory_image' />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Mr Bishal Gaire</h3>
                                    <span className="post">Chairperson</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/advisory/arjun.jpg" alt='advisory_image' />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Mr. Arjun Bista</h3>
                                    <span className="post">Event Coordinator</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/advisory/binaya.jpg" alt='advisory_image' />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Mr. Binaya Maharjan</h3>
                                    <span className="post">Social Media Coordinator</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/advisory/rajkumar.jpg" alt='advisory_image' />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Mr. Raj Kumar Adhikari</h3>
                                    <span className="post">Operation Coordinator</span>
                                </div>
                            </div>
                            <div className="our-team">
                                <div className="team-image">
                                    <img src="./images/advisory/samir.jpg" alt='advisory_image' />
                                </div>
                                <div className="team-info">
                                    <h3 className="title">Mr. Samir Adhikari</h3>
                                    <span className="post">Volunteers Coordinator</span>
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

export default OrganizingC