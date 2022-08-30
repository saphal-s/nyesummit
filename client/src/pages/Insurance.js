import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './style.css'

const Insurance = () => {

    var settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 200,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    initialSlide: 3
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    autoplay: true,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='partners container pt-5 pb-5 col-md-6 offset-md-3'>
            <div className="partners-head pb-4">
                <h2 style={{ fontSize: '20px' }}>Supported By</h2>
            </div>
            <Slider {...settings} classNam="partner-slider">
                <center>
                    <div className='carousel-image'>
                        <img src="./images/sponsor/logo.jpg"
                            style={{ width: '200px', height: "80px" }} alt="" />
                    </div>
                </center>
                <center>
                    <div className='carousel-image'>
                        <img src="./images/sponsor/cit.jpg"
                            style={{ width: '180px', height: "90px" }} alt="" />
                    </div>
                </center>

            </Slider>
        </div>
    )
}

export default Insurance