import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './style.css'

const Supporter = () => {

    var settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 200,
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
                    infinite: true,
                    autoplay: true,
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
        <div className='partners container pt-5 pb-5' style={{ borderBottom: '3px solid red' }}>
            <Slider {...settings} classNam="partner-slider">
                <center>
                    <div className="partners-head pb-2">
                        <h2 style={{ fontSize: '17px' }}>Digital Card Partner</h2>
                    </div>
                    <div className='carousel-image'>
                        <img src="./images/sponsor/hbl.jpg"
                            style={{ width: '200px', height: "60px" }} alt="" />
                    </div>
                </center>
                <center>
                    <div className="partners-head pb-2">
                        <h2 style={{ fontSize: '17px' }}>IT Partner</h2>
                    </div>
                    <div className='carousel-image'>
                        <img src="./images/sponsor/info.jpg"
                            style={{ width: '200px', height: "60px" }} alt="" />
                    </div>
                </center>
                <center>
                    <div className="partners-head pb-2">
                        <h2 style={{ fontSize: '17px' }}>Development Banking Partner</h2>
                    </div>
                    <div className='carousel-image'>
                        <img src="./images/sponsor/kamana.jpg"
                            style={{ width: '200px', height: "60px" }} alt="" />
                    </div>
                </center>
                <center>
                    <div className="partners-head pb-2">
                        <h2 style={{ fontSize: '17px' }}>Academic Partner</h2>
                    </div>
                    <div className='carousel-image'>
                        <img src="./images/sponsor/uniglobe.jpg"
                            style={{ width: '180px', height: "60px" }} alt="" />
                    </div>
                </center>
            </Slider>
        </div>
    )
}

export default Supporter