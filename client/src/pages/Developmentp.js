import React from 'react';
import './style.css'

const Developmentp = () => {


    return (
        <div className='partners container pt-5 pb-5' style={{ borderBottom: '3px solid red' }}>
            <div className="partners-head pb-2">
                <h2 style={{ fontSize: '20px' }}>Development Partner</h2>
            </div>

            <div className="col-md-8 offset-md-2">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <center>
                            <div className='carousel-image'>
                                <img src="./images/sponsor/wwf.jpg"
                                    style={{ width: '200px', height: "130px" }} alt="" />
                            </div>
                        </center>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <center>
                            <div className='carousel-image'>
                                <img src="./images/sponsor/goodn.png" className='mt-5'
                                    style={{ width: '250px', height: "60px" }} alt="" />
                            </div>
                        </center>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Developmentp