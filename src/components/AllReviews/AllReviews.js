
import React, { useEffect, useState } from 'react';
import './AllReviews.css'

const AllReviews = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/allReviews")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    
    return (
        <div className="container">
            <div className="row container p-5 mt-3">
                <div className="allOrdersText">
                    <h2 className="fs-2 fw-bolder me-3">Review</h2>
                   <small>We have some trustfull users!They love us as much as we do!</small>
                </div>
                {
                    services.map(singleService => (
                        <div className="col-lg-4">
                            <div className="m-3 review-container">
                                <p>"{singleService.description}"</p>
                                <div className="d-flex justify-content-end">
                                <small>-{singleService.name}</small>
                                </div>  
                            </div>
                        </div>


                    ))
                }
            </div>
        </div>
    );
};

export default AllReviews;