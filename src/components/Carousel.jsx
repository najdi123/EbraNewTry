import React, { Component } from 'react';

import './Carousel.css';



import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";


class Carousel extends Component {
    render() {
        return (


            <div id="carousel" className="carousel carousel-fade" data-ride="carousel" data-interval="1900">
                <ol className="carousel-indicators" style={{display : 'none'}}>
                    <li data-target="#carousel" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                    <li data-target="#carousel" data-slide-to="3"></li>



                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                            <picture>
                                            <img src={pic1} alt="responsive image" className="d-block img-fluid" />
                            </picture>


                    </div>

                    <div className="carousel-item">
                            <picture>
                                            <img src={pic2} alt="responsive image" className="d-block img-fluid" />
                            </picture>

                    </div>

                    <div className="carousel-item">
                            <picture>
                                            <img src={pic3} alt="responsive image" className="d-block img-fluid" />
                            </picture>


                    </div>

                    <div className="carousel-item">

                            <picture>
                                <img src={pic4} alt="responsive image" className="d-block img-fluid" />
                            </picture>


                    </div>



                </div>


            </div>
















    );
    }
}

export default Carousel;