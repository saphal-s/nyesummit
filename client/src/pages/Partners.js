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
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 3
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='partners container pt-5 pb-5'>
            <div className="partners-head pb-3">
                <h2>Organizers</h2>
            </div>
            <Slider {...settings} classNam="partner-slider">
                <center>
                    <div className='carousel-image'>
                        <img src="./images/partners/nlogo.png" alt="" />
                    </div>
                </center>
                <center>
                    <div className='carousel-image'>
                        <a href="https://nepalbusiness.com/" target="__blank">
                            <img src="./images/partners/nb.png" className='w-100'
                                style={{ height: '125px' }} alt="" />
                        </a>
                    </div>
                </center>
                <center>
                    <div className='carousel-image'>
                        <a href="https://bishalfoundation.org/" target="__blank">
                            <img src="./images/partners/bf.png" className='w-100' style={{ height: '135px' }} alt="" />
                        </a>
                    </div>
                </center>
                <center>
                    <div className='carousel-image'>
                        <img src="./images/partners/qr.png" alt="" />
                    </div>
                </center>
            </Slider>
        </div>
    )
}

export default Partners