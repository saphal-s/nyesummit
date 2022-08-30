import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './style.css'

const Partners = () => {

    var settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    infinite: true,
                    autoplay: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
        <div className='partners container pt-5 pb-5' style={{ borderBottom: '3px solid #14469f' }}>
            <div className="partners-head pb-3 pb-md-5">
                <h2>Organizers</h2>
            </div>
            <Slider {...settings} classNam="partner-slider">
                <center>
                    <div className='carousel-image'>
                        <img src="./images/sponsor/glogo.png"
                            alt="" />
                        <h6 className="text-center"></h6>
                    </div>
                </center>
                <center>
                    <div className='carousel-image'>
                        <a href="#" target="__blank">
                            <img src="./images/sponsor/nyc.jpg"
                                alt="" />
                        </a>
                    </div>
                </center>
                <center>
                    <div className='carousel-image'>
                        <a href="#" target="__blank">
                            <img src="./images/sponsor/Bishal.png"
                                className='w-100 ps-md-5 pe-md-5' alt="" />
                        </a>
                    </div>
                </center>
            </Slider>
        </div>
    )
}

export default Partners