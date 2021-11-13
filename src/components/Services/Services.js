import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Services.css'

const Services = () => {
    const { user } = useAuth()
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/cars")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    const sliceService = services.slice(1, 7)
    return (
        <div className="container mt-5">

            <div className="text-center">
                <h2 className="fs-2 fw-bolder">Your Trust,Our Service</h2>
                <small>Drive safe,stay safe</small>
            </div>

            <div className="row container mt-3">
                {
                    sliceService.map(singleService => (

                        <div className="col-lg-4">
                            <div className="m-3 service-container text-center">
                                <div className="img-container p-2 mb-2">
                                    <img className="img-fluid main-img" src={singleService.image
                                    } alt="" />
                                </div>
                                <div className="description p-2">
                                    <h3>{singleService.name}</h3>
                                    <p>{singleService.description}</p>
                                    <Link to={`/shippping/${singleService._id}`}>

                                        <button className="regular-btn btn-danger">Buy Tickit</button>
                                    </Link>
                                </div>
                            </div>

                        </div>


                    ))
                }
            </div>

        </div>
    );
};

export default Services;