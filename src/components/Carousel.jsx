import React from 'react';
import '../assets/styles/Carousel.scss';

const Carousel = () => (
    <div className="main" id='carousel' >

        <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-pause='false' >
            <div className="carousel-inner">
                <div className="carousel-item active" data-interval="3000">
                    <img src="https://i.imgur.com/tquyJ0A.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-interval="3000">
                    <img src="https://i.imgur.com/H7tZC4L.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-interval="3000">
                    <img src="https://i.imgur.com/fgnCbg9.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>

    </div>
);

export default Carousel;