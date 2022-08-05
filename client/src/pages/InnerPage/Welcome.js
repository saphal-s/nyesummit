import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { RiArrowRightSLine } from 'react-icons/ri';
import './style.css'

const Welcome = () => {
    return (
        <div>
            <Header />
            <div className="inner-hero ">
                <div className="parallalx">
                    <div className="parallal-content">
                        <h4>
                            Summit 2022 <RiArrowRightSLine />
                            Welcome Note
                        </h4>
                    </div>
                </div>
            </div>
            <div className="Organizing pt-5 pb-5">
                <div className="advisory-committee pt-3 mt-2 pb-4">
                    <div className="acommittee">
                        <div className="advisory-committed_head pb-5">
                            <h2>Welcome Note</h2>
                        </div>
                        <div className="about-text">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7 col-lg-7">
                                        <p className='p-4'>
                                            It gives us great pride to announce the second <strong>Nepal Youth Entrepreneurship Summit in
                                                2022.</strong>
                                            The Summit will be held with the main theme of &quot;Economic Prosperity through Innovation and
                                            Entrepreneurship&quot; in all seven Provinces and 753 Localities levels. The summit will be open to
                                            everyone via in-person and online options. The organizer believes that the summit will be helpful
                                            for Youth-friendly policy, programs, and budget formulation.
                                            The first summit of 2019 was centred on the improvement of entrepreneurship and innovation
                                            education. Due to the COVID pandemic in 2020 and 2021, the discussions were carried on
                                            virtually. As a result, in 2022, we aim to host a summit both physically and virtually while
                                            considering the preventative health measures that should be taken during a pandemic. This
                                            summit will improve the capabilities and standards of new businesses, inspire young
                                            entrepreneurs, close the policy gap through governmental organizations, share experiences,
                                            foster networking, look for young businesspeople in the province, and foster an environment
                                            conducive to participation in entrepreneurship across the nation.
                                            This summit was planned during a period of the economic crisis that was exacerbated by
                                            inflation and a decline in foreign exchange reserves. This summit will connect young people
                                            with production and self-employment to inspire them to start their businesses within their nation.
                                            This summit also highlighted entrepreneurship as a means of creating a self-sufficient,
                                            sustainable economy. In addition to fostering commercial communication between the public and
                                            private sectors, this summit is an effective and efficient campaign to encourage entrepreneurship.
                                            Young entrepreneurs&#39; suggestions from around Nepal will serve as a reference for the
                                            government as it creates and implements policies and programs. More than 25 youth
                                            entrepreneur-related booths will be run throughout the summit, and 30 mentors and 30 prominent
                                            speakers will participate in more than 9 sessions. The organizer aimed to bring together 600+
                                            people, including senior government officials, students who wanted to become successful
                                            entrepreneurs, politicians, higher-level entrepreneurs, and investors who are interested in funding
                                            start-up companies.
                                        </p>
                                    </div>
                                    <div className="col-lg-5 col-md-5">
                                        <img src="./images/wimage.jpg" className='w-100 p-4' alt="about_image" />
                                        <div className="post text-center">
                                            <h3>Mr. Bishal Gire</h3>
                                            <p className='text-center'>Chairperson, <strong>NYES 2022</strong> Organizing committee</p>
                                        </div>
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

export default Welcome