import React from 'react';
import {
    FaMapMarkerAlt, FaPhoneAlt,
    FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube
} from 'react-icons/fa';
import { FacebookProvider, Page } from 'react-facebook';
import { FiMail } from 'react-icons/fi';
import logo from '../../img/nblogo.png'
import './style.css'

const Footer = () => {
    return (
        <div className='pt-4' style={{ borderTop: '1px solid #ccc' }}>
            <div className="col-md-10 offset-md-1 col-lg-10 offset-lg-1">
                <div className="row">
                    <div className="col-lg-4 col-lg-4">
                        <div className="footer-card">
                            <div className="footer-logo">
                                <img src={logo} height={150} className="w-100 p-3" alt="" />
                            </div>
                            <div className="footer-text pt-3">
                                <p>Nepal Business.com is a media house operated under Bishal Media Group is regularly advocating for the economic prosperity of Nepal.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-lg-4">
                        <div className="footer-contact">
                            <h3 className='pt-md-5 pb-md-3'>Contact</h3>
                            <div className="d-flex">
                                <FaMapMarkerAlt className='icon' />
                                <p>Dillibazar, Kathmandu,Nepal</p>
                            </div>
                            <div className="d-flex">
                                <FiMail className='icon' />
                                <p>Dillibazar, Kathmandu</p>
                            </div>
                            <div className="d-flex">
                                <FaPhoneAlt className='icon' />
                                <p>9841049104</p>
                            </div>
                            <div className="sicons d-flex">
                                <a href="https://www.facebook.com/nyes2022" target="__blank">
                                    <div className="sicon">
                                        <FaFacebookF className='ficon' />
                                    </div>
                                </a>
                                <div className="sicon">
                                    <FaInstagram className='iicon' />
                                </div>
                                <div className="sicon">
                                    <FaLinkedinIn className='licon' />
                                </div>
                                <a href="https://www.youtube.com/channel/UCVbPjGSrjyBWvYRnkT2TZVg" target="__blank">
                                    <div className="sicon">
                                        <FaYoutube className='yicon' />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-lg-4 pt-md-3 mt-md-5">
                        <FacebookProvider appId="993140114703555" >
                            <Page href="https://www.facebook.com/nyes2022" tabs="timeline" height="220px" />
                        </FacebookProvider>
                    </div>
                </div>
            </div>
            <footer className='footers'>
                <p>&copy;2022 Nepal Youth Intrepreneurship summit</p>
                <p>Powered By <a href="http://www.sinepal.com/" target="__blank" >Smart Innovation</a></p>
            </footer>
        </div >
    )
}

export default Footer