import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [services, setServices] = useState([])
    const [deleteControls, setControls] = useState(false);
    useEffect(() => {
        fetch("https://morning-plateau-38485.herokuapp.com/cars")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [deleteControls])


    const handlePdDelete = id => {
        fetch(`https://morning-plateau-38485.herokuapp.com/deletePd/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Delete This Item? ')
                    setControls(!deleteControls);
                }
            });

        console.log(id);
    }
    return (
        <div className="container mt-5">

            <div className="text-center">
                <h2 className="">Our services</h2>
                <small>Confirm your tickit from our available services right now!</small>
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
                                <button className="btn btn-info" onClick={() => handlePdDelete(singleService._id)}>CANCEL</button>
                            </div>

                        </div>


                    ))
                }
            </div>

        </div>
    );
};

export default ManageProducts;