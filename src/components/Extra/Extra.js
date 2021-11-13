import React from 'react';

const Extra = () => {
    return (
        <div>
            <div className="container mt-3">

                <div className="text-center">
                    <h2 className="fs-2 fw-bolder">EXPLORE BEST CAR'S!</h2>
                    <small>Here two of the best cars details are shown,hope this will help you</small>
                </div>


                <div className="cars-section shadow-sm mt-5">

                    <div className="d-flex justify-content-sm-evenly justify-content-lg-evenly bg-gray shadow-sm p-3">
                        <div>
                            <h3>AUDIE-TRON</h3>
                        </div>
                        <div>
                            <p>CHANGES THE WORLD.BUT EVERYDAY LIFE</p>
                        </div>
                    </div>

                    <div className="row container mb-1 mt-2">
                        <div className="col-lg-6 col-sm-12">
                            <img className="img-fluid" src="https://images.unsplash.com/photo-1629897874832-a2e2f0d3715d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80" alt="" />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div>
                                <h2>AUDI E-TRON</h2>
                                <p>Style and power in one bottle</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-sm-4">
                                    <h2>256Km</h2>
                                    <p>Power saver</p>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <h2>200Km</h2>
                                    <p>Slow Start</p>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <h2>256CC</h2>
                                    <p>Engine</p>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <h2>7</h2>
                                    <p>Seat</p>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <h2>300WT</h2>
                                    <p>Headlight</p>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <h2>260M/h</h2>
                                    <p>Highest Speed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cars-section shadow-sm mt-4">
                    <div className="d-flex justify-content-sm-evenly justify-content-lg-evenly  shadow-sm bg-gray p-3">
                        <div>
                            <h3>BMW</h3>
                        </div>
                        <div>
                            <p>ELECTRIFY INSPIRATION </p>
                        </div>
                    </div>

                    <div className="row container mt-2">
                        <div className="col-lg-6 col-sm-12">
                            <img className="img-fluid" src="https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div>
                                <h2>BMW IX</h2>
                                <p>Electric crossover of the new era</p>
                            </div>
                            <div className="row">
                            <div className="col-lg-4 col-sm-4">
                                    <h2>286Km</h2>
                                    <p>Power saver</p>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <h2>220Km</h2>
                                    <p>Slow Start</p>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <h2>296CC</h2>
                                    <p>Engine</p>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <h2>9</h2>
                                    <p>Seat</p>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <h2>310WT</h2>
                                    <p>Headlight</p>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <h2>160M/h</h2>
                                    <p>Highest Speed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Extra;