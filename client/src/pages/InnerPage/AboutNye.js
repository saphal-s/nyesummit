import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { RiArrowRightSLine } from 'react-icons/ri';
import './style.css'

const AboutNye = () => {
    return (
        <div>
            <Header />
            <div className="inner-hero ">
                <div className="parallalx">
                    <div className="parallal-content">
                        <h4 className='ps-2 pe-2'>
                            Summit 2022 <RiArrowRightSLine />
                            About NYE(Nepal Youth Entrepreneur) Summit
                        </h4>
                    </div>
                </div>
            </div>
            <div className="Organizing pt-5 pb-5">
                <div className="advisory-committee pt-3 mt-2 pb-4">
                    <div className="acommittee">
                        <div className="advisory-committed_head pb-5">
                            <h2>Youth Entrepreneurship in Nepal </h2>
                        </div>
                        <div className="about-text">
                            <div className="container">
                                <div className="row">
                                    <div>
                                        <p>
                                            National Youth Policy 2072 has defined Youth as those between the ages of 16 and 40.
                                            According to the most recent census in 2078, most people in Nepal are young, which is a
                                            demographic advantage for the country. Every year, 4 lakh 50 thousand young people in Nepal,
                                            enter the labour force. Of these, about 90% are either unemployed or leave the country to find
                                            employment overseas. For national economic development, it has become imperative to connect
                                            education with work, work with skills, and skills with employment and production. In the current
                                            environment, if youth power is channelled into entrepreneurship, prosperity can be attained
                                            within this generation. Making young people independent and self-employed is therefore
                                            essential.
                                            Youth entrepreneurship can be encouraged by institutional setups such as the youth ministry,
                                            youth council, self-employment fund, and poverty alleviation fund. The private sector and
                                            private equity fundraising institutions are willing to invest in the startup company. Manifestos,
                                            Policies, and programs of political parties have addressed youth issues. Youths who returned
                                            from studying abroad founded some sort of business with the knowledge, talents, and experience
                                            they earned there; some of them went on to be exemplary. In addition, government policies,
                                            initiatives, loans with favourable terms, and subsidies all contributed to the rush of young
                                            entrepreneurs from rural to urban areas. However, the anticipated outcome has not been
                                            experienced yet due to limited resources. Youth entrepreneurship has generally become the
                                            centre of interest for young people in Nepal. With the collaborative effort of government, private
                                            sector, and donor organizations it is possible to contribute youth entrepreneurship to national
                                            income.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="acommittee">
                        <div className="advisory-committed_head pb-5 pt-4">
                            <h2>Objectives of the Summit </h2>
                        </div>
                        <div className="about-text">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7 col-lg-7">
                                        <ul className='objectives'>
                                            <li>Facilitating start-up entrepreneurs for initial investment</li>
                                            <li>Sharing of Youth Experiences</li>
                                            <li>Share the experience of successful entrepreneurs</li>
                                            <li>Career counseling</li>
                                            <li>Financial literacy and Banking support</li>
                                            <li>Mentoring for Youth entrepreneurs</li>
                                            <li>Revising the government plan, policies, and programs</li>
                                            <li>Strong nationwide networking</li>
                                            <li>Exposure to innovative works</li>
                                            <li>Motivate youth towards entrepreneurship</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-5 col-md-5">
                                        <img src="./images/3X9A4245.JPG" className='w-100' alt="about_image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="acommittee">
                        <div className="advisory-committed_head pb-5 pt-4">
                            <h2>Expected outcomes of the Summit</h2>
                        </div>
                        <div className="about-text neyoutcome">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-lg-6">
                                        <ul className='objectives'>
                                            <li>
                                                Strong National level network of youth will be established
                                            </li>
                                            <li>
                                                Political and administrative commitment for youth Entrepreneurship
                                                friendly policy, programs, environment, and Budget
                                            </li>
                                            <li>
                                                Creation of Investment environment from Banks,
                                                Financial institutions for startup business
                                            </li>
                                            <li>
                                                The exhibition of innovative products will help to
                                                disseminate goodwill
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <ul className='objectives'>

                                            <li>
                                                Mentoring support will be provided to youth
                                            </li>
                                            <li>
                                                Enabling the environment for
                                                production through self-employment and reduction in unemployment
                                            </li>
                                            <li>
                                                Youth will be motivated and capacitated for  youth entrepreneurship
                                            </li>
                                        </ul>
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

export default AboutNye