import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Myorder = () => {

    const { user } = useAuth();

    const [myOrders, setMyOrders] = useState([]);
    const [control, setControl] = useState(false)


    useEffect(() => {
        fetch(`https://morning-plateau-38485.herokuapp.com/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [control])


     // HANDLE DELETE

     const handleDelete = id => {
        fetch(`https://morning-plateau-38485.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Delete This Item? ')
                    setControl(!control);
                }
            });

        console.log(id);
    }

    console.log(myOrders)
    return (
        <div>

        <div className="container">
            <h3 className="m-5">Your ordered services</h3>
            <div className="row container p-2">
                {
                    myOrders.map(oneService => (

                        <div className="col-lg-4 col-md-2 col-sm-12">

                            <div className="m-4 p-3 order-container">
                                <img className="img-fluid" src={oneService?.image
                                } alt="" />
                                <h3>Service name: <br /> {oneService?.name}</h3>
                                <p>{oneService?.description}</p>
                                <button className="cancel-btn bg-success" onClick={() => handleDelete(oneService?._id)}>CANCEL</button>
                            </div>

                        </div>


                    ))
                }
            </div>
        </div>

    </div >
    );
};

export default Myorder;