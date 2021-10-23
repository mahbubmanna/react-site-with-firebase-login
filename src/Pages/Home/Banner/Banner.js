import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import img1 from '../../../images/banner/b1.jpg';
import img2 from '../../../images/banner/b2.jpg';
import img3 from '../../../images/banner/b3.jpg';

const Banner = () => {
    return (
        <>
            <div id="banner" className="mb-5 banner">
                <Carousel>
                    <Carousel.Item className="carousel-item">
                        <img
                            className="d-block w-100" style={{ width: '100%' }}
                            src={img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Modern Technologies</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={{ width: '100%' }}
                            src={img2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Expert Denitsts</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ width: '100%' }}
                            src={img3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Latest Treatment</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Banner;