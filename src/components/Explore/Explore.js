import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Explore.css'

const Explore = () => {


    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://morning-plateau-38485.herokuapp.com/cars")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container mt-5">

            <div className="text-center">
                <h2 className="">Our services</h2>
                <small>Drive safely!First life then drive!</small>
            </div>

            <div className="row container mt-3">
                {
                    services.map(singleService => (

                        <div className="col-lg-4">

                            <div className="m-3 service-container">
                                <img className="img-fluid" src={singleService.image
                                } alt="" />
                                <h3>{singleService.name}</h3>
                                <p>{singleService.description}</p>
                                <Link to={`/shippping/${singleService._id}`}>

                                    <button className="regular-btn bg-success">Purchase</button>
                                </Link>
                            </div>

                        </div>


                    ))
                }
            </div>

        </div>
    );
};

export default Explore;