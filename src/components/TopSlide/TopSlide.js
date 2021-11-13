import React from 'react';
import './TopSlide.css'

const TopSlide = () => {
    return (
        <div>
            <div className="banners">
                <div className=" banner row justify-content-center align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <div className="container">
                                <h1 className="banner-title">Our Service,Your Trust/</h1>
                                <p className="sub-title">Automotive safety is the study and practice of design, construction equipment and regulation to minimize the occurrence and consequences of traffic collisions involving motor vehicles </p>
                                <button className="banner-btn">Explore Now</button>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TopSlide;