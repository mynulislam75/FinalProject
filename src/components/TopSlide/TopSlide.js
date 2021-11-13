import React from 'react';
import './TopSlide.css'

const TopSlide = () => {
    return (
        <div>
            <div className="banners">
                <div className=" banner row justify-content-center align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-7 p-5">
                                <div className="container p-3">
                                    <h1 className="banner-title">New Monstar right now.</h1>
                                    <p className="sub-title">Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany</p>
                                    <button className="banner-btn">Explore Now</button>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-5 col-md-5 col-sm-5">
                                <img className="img-fluid h-75" src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TopSlide;