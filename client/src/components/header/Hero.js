import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './style.css'

const Hero = () => {
    return (
        <div className="carousels">
            <Carousel fade className='carousel-fade' interval={2000} pause={false}>
                <Carousel.Item>
                    <img
                        className="d-block carousel_image w-100"
                        src="./images/cars2.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className='pb-5 c-caption'>
                        <div className="headc mb-4 pb-2 mt-2">
                            <h2 className='carousel_head'>Largest</h2>
                            <h2 className='carousel_head'>Entrepreneurship</h2>
                            <h2 className='carousel_head'>Summit of</h2>
                            <h2 className='carousel_head'>Nepal</h2>
                        </div>
                        <div className="deadline">
                            <h4>11<sup>TH</sup> September,2022 9:00AM - 7:00PM <br /><br />
                                Soaltee Hotel, Kathmandu, Nepal </h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block carousel_image w-100"
                        src="./images/cars1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className='pb-5 c-caption'>
                        <div className="headc mb-4 pb-2 mt-2">
                            <h2 className='carousel_head'>Largest</h2>
                            <h2 className='carousel_head'>Entrepreneurship</h2>
                            <h2 className='carousel_head'>Summit of</h2>
                            <h2 className='carousel_head'>Nepal</h2>
                        </div>
                        <div className="deadline">
                            <h4>11<sup>TH</sup> September,2022 9:00AM - 7:00PM <br /><br />
                                Soaltee Hotel, Kathmandu, Nepal </h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Hero