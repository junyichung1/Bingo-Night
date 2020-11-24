import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../images/Group-15.png'
import img2 from '../../images/Group-16.png'
import img3 from '../../images/Group-19.png'


class cardThemes extends Component {
    render() {
        return (
            <Carousel showThumbs={false}>

                <a href="/events">
                    <div>
                        <img src={img1} alt="" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                </a>
                <a href="/events">
                <div>
                <img src={img2} alt="" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                </a>
                <a href="/events">
                    <div>
                        <img src={img3} alt="" />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                </a>
            </Carousel>
        );
    }
};

export default cardThemes;