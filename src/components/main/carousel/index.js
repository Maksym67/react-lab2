import React from "react";
import "./index.css";
import { Carousel } from "react-bootstrap";
import slide1 from "./img/1.jpg"
import slide2 from "./img/2.jpg"
import slide3 from "./img/3.jpg"

function RedCarousel() {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100 slide"
                        src={slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100 slide"
                        src={slide2}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100 slide"
                        src={slide3}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default RedCarousel;