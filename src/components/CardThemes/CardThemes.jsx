import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../images/oc6.jpg'
import img2 from '../../images/footballfield.jpeg'
import img3 from '../../images/candle-dinner.jpg'


class cardThemes extends Component {
    render() {
        return (
            <Carousel showThumbs={false}>

                <a href="/about">
                    <div>
                        <img src={img1} alt="" />
                        <p className="legend">Legend 1</p>
                    </div>
                </a>
                <a href="/events">
                <div>
                <img src={img2} alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                </a>
                <a href="/">
                    <div>
                        <img src={img3} alt="" />
                        <p className="legend">Legend 3</p>
                    </div>
                </a>
            </Carousel>
        );
    }
};

export default cardThemes;