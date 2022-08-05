import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { RiArrowRightSLine } from 'react-icons/ri';
import './style.css'

const RegisterForm = () => {
    return (
        <div>
            <Header />
            <div className="inner-hero ">
                <div className="parallalx">
                    <div className="parallal-content">
                        <h4 className='ps-2 pe-2'>
                            Home <RiArrowRightSLine />
                            Apply
                        </h4>
                    </div>
                </div>
            </div>
            <div className="Organizing applies pt-5 pb-5">
                <div className="col-md-10 apply offset-md-1">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>STUDENT REGISTRATION</h4>
                            <p>Registration Fee: Rs.3000</p>
                            <p>Deadline: 25<sup>th</sup> August,2022</p>
                        </div>
                        <div className="col-md-4">
                            <h4>CORPORATE REGISTRATION</h4>
                            <p>Registration Fee: Rs.5000</p>
                            <p>Deadline: 25<sup>th</sup> August,2022</p>
                        </div>
                        <div className="col-md-4">
                            <h4>
                                SUMMIT REGISTRATION FEE INCLUDE
                            </h4>
                            <p>All - Summit materials</p>
                            <p>Lunch, Tea\Coffee Dinner</p>
                            <p>Certificate of attendence</p>
                        </div>
                    </div>
                    <div className="apply-button align-center">
                        <button>Apply Now!</button>
                    </div>
                </div>
            </div>
            <div className="col-md-10 offset-md-1">
                <div className="apply-form">
                    <h2>Application Form</h2>
                </div>
                <center>
                    <div className="forms">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfWfR36U_8hJKlfkpBwAvWSmF6r-3NyImY3wryenlLIHWFwxA/viewform?embedded=true"
                            className='w-100' height="3368" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div>
                </center>
            </div>
            <Footer />
        </div>
    )
}

export default RegisterForm