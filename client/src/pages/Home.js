import React from 'react'
import Header from '../components/header/Header'
import Hero from '../components/header/Hero'
import { FaUserFriends, FaAward, FaSeedling } from 'react-icons/fa';
import { GiPublicSpeaker, GiDeliveryDrone } from 'react-icons/gi';
import { SiKnowledgebase } from 'react-icons/si';
import { MdOutlineInvertColors } from 'react-icons/md';
import { HiNewspaper } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import './style.css';
import Footer from '../components/footer/Footer';
import Partners from './Partners';
import Testimonials from './Testimonials';
import { Link } from 'react-router-dom';
import Sponser from './Sponsers';
import Supporter from './Supporter';
import Developmentp from './Developmentp';
import Insurance from './Insurance';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <div className="home">
                <div className="about-section pb-5">
                    <div className="col-md-10 offset-md-1 col-lg-10 offset-lg-1">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-bmg-section p-md-3 p-lg-3 p-3">
                                    <h5><span>What is</span> NYE Summit ?</h5>
                                    <p>
                                        Every year, Nepal Youth Entrepreneurship Summit 2022 is organized at the national level with
                                        the collaboration of the government and private sectors. This summit has evolved into a unique
                                        platform for fostering entrepreneurial mindset and skill development among young people. The
                                        one-day summit will feature a start-up story, a panel discussion, a group discussion, networking
                                        opportunities, presentations from successful young entrepreneurs, award presentations, an
                                        entrepreneurs expo, a demo exhibition of innovative works from around the globe, and an
                                        investment agreement, and start-up mentoring.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-nye-summit ">
                                    <iframe style={{ width: '100%' }} height={295} className="video" src="https://www.youtube.com/embed/5pa6JFBgIKY" title="YouTube video player" frameBorder={0}
                                        allow="accelerometer; autoplay; clipboard-write;
                                 encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="theme-section">
                    <div className="parallax">
                        <div className="col-lg-10 offset-md-1 parallal-content">
                            <h3>Nepal's largest & most comprehensive event on Entrepreneurship sector <br />
                                organized by the private sector in co-operation with government</h3>
                        </div>
                    </div>
                </div>
                <div className="highlight_nye p-5">
                    <div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                        <h3 className='pb-5 pt-3'>Highlights Of NYE Summit</h3>
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
                                                International Speakers</p>
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
                                                & Partners</p>
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
                                                Investors</p>
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
                <div className="distinguished-guest pb-4 container">
                    <div className="guest-header p-4 pt-md-5">
                        <h2>Distinguished Guest</h2>
                    </div>
                    <div className="guest-section">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-3">
                                <center>
                                    <div className="guest-card">
                                        <div className="card-image">
                                            <img src="./images/logo.png" className='w-100' alt="guest_image" />
                                        </div>
                                        <div className="card-content">
                                            <div className="card-name">
                                                <h5 className='pt-1'>Chief Guest</h5>
                                            </div>
                                            <div className="card-info">
                                                <p>Innaguration Ceremony</p>
                                                <p style={{ marginTop: '-15px' }}>(TBC)</p>
                                            </div>
                                        </div>
                                    </div>
                                </center>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <center>
                                    <div className="guest-card">
                                        <div className="card-image">
                                            <img src="./images/speaker/first/kpoli.jpg" className='w-100' alt="guest_image" />
                                        </div>
                                        <div className="card-content">
                                            <div className="card-name">
                                                <h5 className='pt-1'>Hon'ble K.P Sharma Oli</h5>
                                            </div>
                                            <div className="card-info">
                                                <p>Former Prime Minister of Nepal</p>
                                            </div>
                                        </div>
                                    </div>
                                </center>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <center>
                                    <div className="guest-card">
                                        <div className="card-image">
                                            <img src="./images/speaker/first/prachanda.jpg" className='w-100' alt="guest_image" />
                                        </div>
                                        <div className="card-content">
                                            <div className="card-name">
                                                <h5 className='pt-1'>Hon'ble Puspa Kamal Dahal</h5>
                                            </div>
                                            <div className="card-info">
                                                <p>Former Prime Minister of Nepal</p>
                                            </div>
                                        </div>
                                    </div>
                                </center>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <center>
                                    <div className="guest-card">
                                        <div className="card-image">
                                            <img src="./images/speaker/first/dilendrasir.jpg" className='w-100' alt="guest_image" />
                                        </div>
                                        <div className="card-content">
                                            <div className="card-name">
                                                <h5 className='pt-1'>Hon'ble Dilendra Prasad Badu</h5>
                                            </div>
                                            <div className="card-info">
                                                <p>Minister for Industry, Commerce and Supplies</p>
                                            </div>
                                        </div>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="speaker">
                    <div className="distinguished-guest pb-4 container">
                        <div className="guest-header p-4 pt-md-5">
                            <p>LISTEN TO THE</p>
                            <h2>Our Speakers</h2>
                        </div>
                        <div className="guest-section">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <center>
                                        <div className="guest-card">
                                            <div className="card-image">
                                                <img src="./images/speaker/first/sportandyouthminister.jpg" className='w-100' alt="guest_image" />
                                            </div>
                                            <div className="card-content">
                                                <div className="card-name">
                                                    <h5 className='pt-1'>Hon'ble Maheshwor Jung Gahatraj</h5>
                                                </div>
                                                <div className="card-info">
                                                    <p>Minister for Youth and Sports</p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <center>
                                        <div className="guest-card">
                                            <div className="card-image">
                                                <img src="./images/speaker/first/surendrapandey.jpg" className='w-100' alt="guest_image" />
                                            </div>
                                            <div className="card-content">
                                                <div className="card-name">
                                                    <h5 className='pt-1'>Hon'ble Surendra Pandey</h5>
                                                </div>
                                                <div className="card-info">
                                                    <p>Former Finance Minister</p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <center>
                                        <div className="guest-card">
                                            <div className="card-image">
                                                <img src="./images/speaker/first/Gagan-Kumar-Thapa.jpg" className='w-100' alt="guest_image" />
                                            </div>
                                            <div className="card-content">
                                                <div className="card-name">
                                                    <h5 className='pt-1'>Hon'ble Gagan Kumar Thapa</h5>
                                                </div>
                                                <div className="card-info">
                                                    <p>Former Health Minister</p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <center>
                                        <div className="guest-card">
                                            <div className="card-image">
                                                <img src="./images/speaker/first/mahaprasadadhikari.jpg" className='w-100' alt="guest_image" />
                                            </div>
                                            <div className="card-content">
                                                <div className="card-name">
                                                    <h5 className='pt-1'>Maha Prasad Adhikari</h5>
                                                </div>
                                                <div className="card-info">
                                                    <p>Governer, NRB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <center>
                                        <div className="guest-card">
                                            <div className="card-image">
                                                <img src="./images/speaker/first/chandrapddhakal.jpg" className='w-100' alt="guest_image" />
                                            </div>
                                            <div className="card-content">
                                                <div className="card-name">
                                                    <h5 className='pt-1'>Chandra Prasad Dhakal</h5>
                                                </div>
                                                <div className="card-info">
                                                    <p>Senior VP, FNCCI</p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <center>
                                        <div className="guest-card">
                                            <div className="card-image">
                                                <img src="./images/speaker/first/haribhaktasharma.png" className='w-100' alt="guest_image" />
                                            </div>
                                            <div className="card-content">
                                                <div className="card-name">
                                                    <h5 className='pt-1'>Hari Bhakta Sharma</h5>
                                                </div>
                                                <div className="card-info">
                                                    <p>Senior Entrepreneur</p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <center>
                                        <div className="guest-card">
                                            <div className="card-image">
                                                <img src="./images/speaker/first/swarnimsir.jpg" className='w-100' alt="guest_image" />
                                            </div>
                                            <div className="card-content">
                                                <div className="card-name">
                                                    <h5 className='pt-1'>Swarnim Wagle</h5>
                                                </div>
                                                <div className="card-info">
                                                    <p>Former VP, NPC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-4">
                                    <center>
                                        <div className="guest-card">
                                            <div className="card-image">
                                                <img src="./images/speaker/first/vidhusirana.jpg" className='w-100' alt="guest_image" />
                                            </div>
                                            <div className="card-content">
                                                <div className="card-name">
                                                    <h5 className='pt-1'>Vidushi Rana</h5>
                                                </div>
                                                <div className="card-info">
                                                    <p>Director, Goldstar Shoes</p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                </div>
                            </div>
                            <div className="view-all-button text-center">
                                <Link to='/speakers'><button>View All</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="speakers p-5" style={{ backgroundColor: '#062d7a' }}>
                    <div className="container">
                        <div className="speaker-head">
                            <h2>Moderator</h2>
                        </div>
                        <div className='moderator'>
                            <div className="mcard">
                                <div className="speakers-card">
                                    <div className="card-img">
                                        <img src="./images/speaker/first/tikaramyatri.jpg" alt="speaker_img" />
                                    </div>
                                    <div className="card-title">
                                        <div className="card-name">
                                            <h4>Tikaram Yatri</h4>
                                        </div>
                                        <div className="card-position">
                                            <p>Senior Jonourlist</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mcard">
                                <div className="speakers-card">
                                    <div className="card-img">
                                        <img src="./images/speaker/sudeepacharya.jpg" alt="speaker_img" />
                                    </div>
                                    <div className="card-title">
                                        <div className="card-name">
                                            <h4>Sudeep Aacharya</h4>
                                        </div>
                                        <div className="card-position">
                                            <p>Entrepreneur</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mcard">
                                <div className="speakers-card">
                                    <div className="card-img">
                                        <img src="./images/speaker/Bishal-Gaire.jpg" alt="speaker_img" />
                                    </div>
                                    <div className="card-title">
                                        <div className="card-name">
                                            <h4>Bishal Gaire</h4>
                                        </div>
                                        <div className="card-position">
                                            <p>Entrepreneur</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mcard">
                                <div className="speakers-card">
                                    <div className="card-img">
                                        <img src="./images/speaker/first/sujarikakc.jpg" alt="speaker_img" />
                                    </div>
                                    <div className="card-title">
                                        <div className="card-name">
                                            <h4>Sugarika Kc</h4>
                                        </div>
                                        <div className="card-position">
                                            <p>Media Person</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mcard">
                                <div className="speakers-card">
                                    <div className="card-img">
                                        <img src="./images/speaker/first/sangammahat.jpg" alt="speaker_img" />
                                    </div>
                                    <div className="card-title">
                                        <div className="card-name">
                                            <h4>Sangam Mahat</h4>
                                        </div>
                                        <div className="card-position">
                                            <p>Media Person</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="faq-sections pt-5">
                    <div className="faq">
                        <div className="col-lg-10 offset-lg-1 p-4 p-md-4 p-lg-5">
                            <div className="faq_head text-center pb-3">
                                <h2>Most Frequently Asked Questions</h2>
                            </div>
                            <div className="faq-quiestions pt-4">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Choose An Option!
                                                <BiSearch className='search' />
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <ol type='1'>
                                                    <Link to='/faq' style={{ textDecoration: 'none', color: '#000', }}><li>What is Nepal Youth Entrepreneurship Summit 2022 ?</li></Link>
                                                    <Link to='/faq' style={{ textDecoration: 'none', color: '#000', }}> <li>What does the summit objectives for?</li></Link>
                                                    <Link to='/faq' style={{ textDecoration: 'none', color: '#000', }}><li>Who will attend NYES 2022?</li></Link>
                                                    <Link to='/faq' style={{ textDecoration: 'none', color: '#000', }}><li>Where will the summit be held?</li></Link>
                                                    <Link to='/faq' style={{ textDecoration: 'none', color: '#000', }}><li>Will there be possibilities for networking?</li></Link>
                                                    <Link to='/faq' style={{ textDecoration: 'none', color: '#000', }}><li>How do I register?</li></Link>
                                                    <Link to='/faq' style={{ textDecoration: 'none', color: '#000', }}><li>What is the registration fee?</li></Link>
                                                    <Link to='/faq' style={{ textDecoration: 'none', color: '#000', }}><li>What methods are available for payment?</li></Link>
                                                    <Link to='/faq' style={{ textDecoration: 'none', color: '#000', }}><li>Will there be food available?</li></Link>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Testimonials />
                <Partners />
                <div className='partners container pt-5  pb-5' style={{ borderBottom: '3px solid #f54b02' }}>
                    <div className="title-sponser">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="partners-head pb-3">
                                    <h2>Title Sponsor</h2>
                                </div>
                                <div className="">
                                    <img src="./images/title.jpg" style={{ height: '100%', width: '100%' }} alt="title-sponser" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="partners-head pb-3">
                                    <h2>In Association With</h2>
                                </div>
                                <div className="title-sponser2 col-md-8 offset-md-2">
                                    <div className="row mt-md-3 mt-lg-4">
                                        <div className="col-md-5 col-lg-5">
                                            <center>
                                                <img src="./images/sponsor/NTA.jpg" style={{ width: '200px' }} alt="title-sponser" />
                                            </center>
                                        </div>
                                        <div className="col-md-7 col-lg-7">
                                            <center>
                                                <img src="./images/sponsor/worldlink.png" style={{ height: '60px', width: '220px' }} className=' mt-md-5' alt="title-sponser" />
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Developmentp />
                <Supporter />
                <Sponser />
                <Insurance />
                <div className="event-venue pt-5">
                    <div className="event-venue-head pb-4">
                        <h2>Event Venue</h2>
                    </div>
                    <div className="row rowe">
                        <div className="col-md-6 col-lg-6">
                            <img src="./images/location.png" className='w-100' alt="" />
                        </div>

                        <div className="col-md-6 col-lg-6">
                            <div className="venue">
                                <div className="venue-image">
                                    <img src="./images/solti.jpg" className='w-100' height={300} alt="venue_image" />
                                </div>
                                <div className="venue-title">
                                    <h3>Soaltee Hotel,Kathmandu-Nepal</h3>
                                    <p className='text-white'>11<sup>th</sup> September, 2022 9:00AM-7:00PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        </div >
    )
}

export default Home