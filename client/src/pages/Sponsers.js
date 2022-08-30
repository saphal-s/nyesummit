import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './style.css'

const Sponser = () => {

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
                    autoplay: true,
                    infinite: true,
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
            <Slider {...settings} classNam="partner-slider">
                <center>
                    <div className="partners-head pb-2">
                        <h2 style={{ fontSize: '17px' }}>Telecommunication Partner</h2>
                    </div>
                    <div className='carousel-image'>
                        <img src="./images/sponsor/NepalTelecome.jpg"
                            style={{ width: '150px', height: "80px" }} alt="" />
                    </div>
                </center>
                <center>
                    <div className="partners-head pb-2">
                        <h2 style={{ fontSize: '17px' }}>DTH Partner</h2>
                    </div>
                    <div className='carousel-image'>
                        <img src="./images/sponsor/dishhome.png"
                            style={{ width: '170px', height: "90px" }} alt="" />
                    </div>
                </center>
                <center>
                    <div className="partners-head pb-2">
                        <h2 style={{ fontSize: '17px' }}>Insurance Partner</h2>
                    </div>
                    <div className='carousel-image'>
                        <img src="./images/sponsor/national.jpg"
                            style={{ width: '170px', height: "90px" }} alt="" />
                    </div>
                </center>

            </Slider>
        </div>
    )
}

export default Sponser