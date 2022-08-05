import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './style.css'

const Testimonials = () => {
    return (
        <div className='container testis'>
            <div className="testi-head pb-3">
                <h2>Testimonials</h2>
            </div>
            <Carousel fade className='carousel-fade'>
                <Carousel.Item>
                    <div className="d-flex ps-2 pe-2 testi-carousel">
                        <div className="col-md-7 col-lg-7">
                            <div className="testi-message">
                                <p className='paragraph pt-5 mt-2'><FaQuoteLeft className='testi-icon' />
                                    <span>
                                        This summit has become a platform to show the talents of youth and to share innovative ideas.
                                        After forming ties with production and entrepreneurship, youth power should be put in charge of
                                        nation-building. For such programs, I wish continued success and the best.<br />
                                    </span>
                                    <FaQuoteRight className='testi-icon' />
                                </p>
                                <div className="testi-name">
                                    <h4 className='mb-5'>Madhab Kumar Nepal</h4>
                                    <p style={{ marginTop: '-45px' }}>Former Prime Minister of Nepal</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 img-col col-lg-5">
                            <div className="testi-image">
                                <img src="./images/testi/makune.JPG" alt="testi_image" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex ps-2 pe-2 testi-carousel">
                        <div className="col-md-7 col-lg-7">
                            <div className="testi-message">
                                <p className='paragraph'><FaQuoteLeft className='testi-icon' />
                                    <span>
                                        Through the summit organized in the partnership of government and the private sector, I would
                                        like to request humbly all the youths to continue the enterprises with patience and high moral
                                        values. I am confident that such a Summit will help to increase youth entrepreneurship in a
                                        country. There is a strong need for collaborative and continuous action of the government and
                                        the private sector to organize such a summit. I as an Investor and Senior Vice President of an
                                        umbrella organization of the Nepalese private sector Federation of Nepalese Chambers of
                                        Commerce and Industry will commit to investing in startup ideas of youth.
                                    </span>
                                    <FaQuoteRight className='testi-icon' />
                                </p>
                                <div className="testi-name">
                                    <h4 className='mb-5'>Chandra Dhakal</h4>
                                    <p style={{ marginTop: '-45px' }}>Senior VP, FNCCI </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 img-col col-lg-5">
                            <div className="testi-image">
                                <img src="./images/testi/chandrapddhakal.JPG" alt="testi_image" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex ps-2 pe-2 testi-carousel">
                        <div className="col-md-7 col-lg-7">
                            <div className="testi-message">
                                <p className='paragraph'><FaQuoteLeft className='testi-icon' />
                                    <span>
                                        I am excited about the participation of youth from the different sectors of a country from various
                                        regions. The prosperity of a nation can be achieved only through the energetic actions of youths,
                                        not from political speeches and slogans. Since the organizer realized the mentality of youths
                                        toward entrepreneurship and the need for youth entrepreneurship at present I would like to
                                        express my gratitude to the organizer for organizing such effective programs ensuring the
                                        participation of youth throughout the country.
                                    </span>
                                    <FaQuoteRight className='testi-icon' />
                                </p>
                                <div className="testi-name">
                                    <h4 className='mb-5'>Hari Bhakta Sharma</h4>
                                    <p style={{ marginTop: '-45px' }}>Senior Entrepreneur</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 img-col col-lg-5">
                            <div className="testi-image">
                                <img src="./images/testi/haribktsharma.JPG" alt="testi_image" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex ps-2 pe-2 testi-carousel">
                        <div className="col-md-7 col-lg-7">
                            <div className="testi-message">
                                <p className='paragraph'><FaQuoteLeft className='testi-icon' />
                                    <span>
                                        For the economic development of Nepal youth must be attracted to entrepreneurship
                                        development in the agricultural and Animal /Birds Husbandry sectors. Since the government has
                                        emphasized the participation of youths these Summits will be helpful to achieve the targets of
                                        modernization of agriculture and sustainable development.
                                    </span>
                                    <FaQuoteRight className='testi-icon' />
                                </p>
                                <div className="testi-name">
                                    <h4 className='mb-5'>Dr.Mahendra Nath Lohani</h4>
                                    <p style={{ marginTop: '-45px' }}>Vice-President Heifer International, USA</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 img-col col-lg-5">
                            <div className="testi-image">
                                <img src="./images/testi/drlohani.JPG" alt="testi_image" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex ps-2 pe-2 testi-carousel">
                        <div className="col-md-7 col-lg-7">
                            <div className="testi-message">
                                <p className='paragraph pt-lg-5 pt-md-5 mt-2'><FaQuoteLeft className='testi-icon' />
                                    <span>
                                        This Summit helps encourage the development of youth capacity and increases self-confidence.
                                        Ministry is ready to assist in its continuity.
                                    </span>
                                    <FaQuoteRight className='testi-icon' />
                                </p>
                                <div className="testi-name">
                                    <h4 className='mb-5'>Yam Kumari Khatiwada</h4>
                                    <p style={{ marginTop: '-45px' }}>Former Secretary, Ministry of Industry,
                                        Commerce, and Supplies</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 img-col col-lg-5">
                            <div className="testi-image">
                                <img src="./images/testi/yamkumarikhatiwada.JPG" alt="testi_image" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Testimonials
