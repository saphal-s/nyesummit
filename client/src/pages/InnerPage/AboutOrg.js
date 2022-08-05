import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { RiArrowRightSLine } from 'react-icons/ri';
import './style.css'

const AboutOrg = () => {
    return (
        <div>
            <Header />
            <div className="inner-hero ">
                <div className="parallalx">
                    <div className="parallal-content">
                        <h4 className='ps-2 pe-2'>
                            Summit 2022 <RiArrowRightSLine />
                            About The Organizer
                        </h4>
                    </div>
                </div>
            </div>
            <div className="Organizing pt-5 pb-5">
                <div className="advisory-committee pt-3 mt-2 pb-4">
                    <div className="acommittee">
                        <div className="advisory-committed_head pb-5">
                            <h2>
                                About NB
                            </h2>
                        </div>
                        <div className="about-text">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-lg-6">
                                        <p>
                                            Nepal Business.com is a media house operated under Bishal Media Group is regularly advocating for the economic prosperity of Nepal. Under this project, the media house is working with the governmental authority, private sectors, and Donor agencies for building the business environment through articles, news portals, TV programs, High-level dialogues, Summit, conferences, research studies, and several pieces of training. Nepalbusiness.com has been disseminating news articles and other media content regularly in both Nepali and English mediums to connect the bond with millions of people.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <a href="https://nepalbusiness.com/" target="__blank"> <img src="./images/nblogo.png" className='w-100' alt="about_image" /></a>
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

export default AboutOrg