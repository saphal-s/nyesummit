import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { RiArrowRightSLine } from 'react-icons/ri';
import { FaHandPointRight } from 'react-icons/fa';
import './style.css'

const Faq = () => {
    return (
        <div>
            <Header />
            <div className="inner-hero ">
                <div className="parallalx">
                    <div className="parallal-content">
                        <h4>
                            Home <RiArrowRightSLine />
                            FAQ
                        </h4>
                    </div>
                </div>
            </div>
            <div className="faq p-5">
                <div className="col-md-10 offset-md-1">
                    <div className="faq-head">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="qa pt-md-4">
                        <h4>1. What is Nepal Youth Entrepreneurship Summit 2022 ?</h4>
                        <p><span><FaHandPointRight className='hand' /></span> Nepal Youth Entrepreneurship Summit 2022 is organized at the national level with the
                            collaboration of the government and private sectors. This summit has evolved into a unique
                            platform for fostering entrepreneurial mindset and skill development among young people. The
                            one-day summit will feature a start-up story, a panel discussion, a group discussion, networking
                            opportunities, presentations from successful young entrepreneurs, award presentations, an
                            entrepreneurs expo, a demo exhibition of innovative works from around the world, an investment
                            agreement, and start-up mentoring.
                        </p>
                        <h4>2. What does the summit objectives for?</h4>
                        <p>
                            <ul>
                                <li><FaHandPointRight className='hand' /> Facilitating start-up entrepreneurs for initial investment</li>
                                <li><FaHandPointRight className='hand' /> Sharing of Youth Experiences</li>
                                <li><FaHandPointRight className='hand' /> Share the experience of successful entrepreneurs</li>
                                <li><FaHandPointRight className='hand' /> Career counselling</li>
                                <li><FaHandPointRight className='hand' /> Financial literacy and Banking support</li>
                                <li><FaHandPointRight className='hand' /> Mentoring for Youth Entrepreneurs</li>
                                <li><FaHandPointRight className='hand' /> Revisiting the government plan, policies, and programs</li>
                                <li><FaHandPointRight className='hand' /> Strong nationwide networking</li>
                                <li><FaHandPointRight className='hand' /> Exposure to innovative works</li>
                                <li><FaHandPointRight className='hand' /> Motivate youth towards entrepreneurship</li>
                            </ul>
                        </p>
                        <h4>3. Who will attend NYES 2022?</h4>
                        <p><span><FaHandPointRight className='hand' /></span>
                            Rt. Hon. President, Former Prime minister, Various ministers, Veteran Entrepreneurs,
                            Bureaucrats, Bankers, Economic experts, Students, and many other professionals will attend this
                            summit. There will be approximately 600 delegates from across the nation during this summit.
                        </p>
                        <h4>4. Who will be the summit&#39;s special guest?</h4>
                        <p><span><FaHandPointRight className='hand' /></span>
                            Rt. Hon. Bidhya Devi Bhandari, President of Nepal will attend as the summit&#39;s chief guest.
                        </p>
                        <h4>5. Where will the summit be held?</h4>
                        <p><span><FaHandPointRight className='hand' /></span>
                            The Summit will be held in Kathmandu at the Soaltee Hotel.
                        </p>
                        <h4>6. Will there be possibilities for networking?</h4>
                        <p><span><FaHandPointRight className='hand' /></span>
                            Yes, without a doubt. All delegates will have the chance to network with different entrepreneurs
                            and experts and gain invaluable knowledge from them.
                        </p>
                        <h4>7. How do I register?</h4>
                        <p><span><FaHandPointRight className='hand' /></span>
                            To register, simply select a registration option and complete the registration form accordingly.
                        </p>
                        <h4>8. What is the registration fee?</h4>
                        <p><span><FaHandPointRight className='hand' /></span>
                            For students, it costs 3,000, and for corporates, it costs 6,000.
                        </p>
                        <h4>9. What methods are available for payment?</h4>
                        <p><span><FaHandPointRight className='hand' /></span>
                            You can pay via ………………………………
                        </p>
                        <h4>10. Will there be food available?</h4>
                        <p><span><FaHandPointRight className='hand' /></span>
                            Yes, the organizer will also provide you lunch, dinner and tea\coffee at all durining the summit.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Faq