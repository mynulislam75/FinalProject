import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import Myorder from '../Myorder/Myorder';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import AddProducts from '../AddProducts/AddProducts';
import useAuth from '../../Hooks/useAuth';
import MakeAdmin from '../Makeadmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProducts from '../ManageProducts/ManageProducts';
import './Dashboard.css'

const Dashboard = () => {
    let { url, path } = useRouteMatch();
    const { user } = useAuth();
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    console.log(admin)
    return (
        <div>

            <div className="row">

                <div className="col-lg-3">
                    <div className="dashboard bg-success">
                        <h3 className="text-center">Dashboard</h3>
                        <NavLink  className="li-container" to={`${url}/myorder`}>
                            <li className="li-container">My Order</li>
                        </NavLink>
                        <NavLink to={`${url}/review`}>
                            <li>Review Order</li>
                        </NavLink>
                        <NavLink to={`${url}/pay`}>
                            <li>Payment</li>
                        </NavLink>


                        <NavLink to={`${url}/manageAllProducts`}>
                            <li>Manage Products</li>
                        </NavLink>
                        <NavLink to={`${url}/addProducts`}>
                            <li>Add Products</li>
                        </NavLink>
                        <NavLink to={`${url}/manageAllOrder`}>
                            <li>All Order</li>
                        </NavLink>
                        <NavLink to={`${url}/makeadmin`}>
                            <li>Make Admin</li>
                        </NavLink>


                        {/* {admin &&
                            <div>
                                <NavLink to={`${url}/manageAllProducts`}>
                                    <li>Manage Products</li>
                                </NavLink>
                                <NavLink to={`${url}/addProducts`}>
                                    <li>Add Products</li>
                                </NavLink>
                                <NavLink to={`${url}/manageAllOrder`}>
                                    <li>All Order</li>
                                </NavLink>
                                <NavLink to={`${url}/makeadmin`}>
                                    <li>Make Admin</li>
                                </NavLink>
                            </div>

                        } */}
                    </div>
                </div>
                <div className="col-lg-9">
                    <div>
                        <Route exact path={`${path}/myorder`}>
                            <Myorder></Myorder>
                        </Route>
                        <Route exact path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route exact path={`${path}/pay`}>
                            <Payment></Payment>
                        </Route>
                        <Route exact path={`${path}/manageAllProducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                        <Route exact path={`${path}/manageAllOrder`}>
                            <ManageAllOrder></ManageAllOrder>
                        </Route>
                        <Route exact path={`${path}/addProducts`}>
                            <AddProducts></AddProducts>
                        </Route>
                        <Route exact path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;