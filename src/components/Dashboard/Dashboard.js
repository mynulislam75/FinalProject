import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useRouteMatch, Route, Link } from 'react-router-dom';
import Myorder from '../Myorder/Myorder';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import AddProducts from '../AddProducts/AddProducts';
import useAuth from '../../Hooks/useAuth';
import MakeAdmin from '../Makeadmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageProducts from '../ManageProducts/ManageProducts';
import './Dashboard.css'
import Signout from '../Signout/Signout';
import { isAdmin } from '@firebase/util';

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
                    <div className="dashboard">
                        <h3 className="text-center">Dashboard</h3>


                        <Link to={`${url}/myorder`}>
                            <li className="li-container">My Orders</li>
                        </Link>
                        <Link to={`${url}/review`}>
                            <li className="li-container">Review</li>
                        </Link>
                        <Link to={`${url}/pay`}>
                            <li className="li-container">Payment</li>
                        </Link>


                        {
                            admin && <div>

                                <Link to={`${url}/manageAllProducts`}>
                                    <li className="li-container">Manage Products</li>
                                </Link>
                                <Link to={`${url}/manageAllOrder`}>
                                    <li className="li-container">Manage All Orders</li>
                                </Link>
                                <Link to={`${url}/addProducts`}>
                                    <li className="li-container">Add Products</li>
                                </Link>
                                <Link to={`${url}/makeadmin`}>
                                    <li className="li-container">Make Admin</li>
                                </Link>
                            </div>
                        }




                        <Link to={`${url}/logout`}>
                            <li className="li-container">Logout</li>
                        </Link>
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
                        <Route exact path={`${path}/logout`}>
                            <Signout></Signout>
                        </Route>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;