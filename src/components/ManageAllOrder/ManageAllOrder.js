import React, { useEffect, useState } from 'react';

const ManageAllOrder = () => {

    const [allOrder, setAllOrder] = useState([]);
   

    const email = sessionStorage.getItem("email");

    useEffect(() => {
        fetch("https://morning-plateau-38485.herokuapp.com/confirmedOrders")
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, []);

    return (
        <div>
            <div className="container">
                <h3>ALL ORDERS HISTORY</h3>

                <div className="container">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">User Email</th>
                                <th scope="col">Service</th>
                                <th scope="col">Service Id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrder.map(singleOrder => (
                                    <tr>
                                        <th scope="row">*</th>
                                        <td>{singleOrder?.email}</td>
                                        <td>{singleOrder?.name}</td>
                                        <td>{singleOrder?._id}</td>
                                        {/* <td> <button className="btn btn-info" onClick={() => handleDelete(singleOrder._id)}>CANCEL</button></td> */}

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrder;