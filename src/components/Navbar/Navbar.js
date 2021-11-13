import React from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Navbar.css'

const Navbar = () => {
    const { user} = useAuth();
    console.log(user)
    return (
        <div className="navbar-container">
            <div className="row container items-container">
                <div className="col-lg-4 col-sm-12">
                    <h5>CARS-HOUSE</h5>
                </div>
                <div className="col-lg-8 col-sm-12">
                    <div className="d-flex justify-content-end">
                        <div className="d-flex">
                            <div className="ms-3 items">
                                <NavLink className="items" to="/home">Home</NavLink>
                            </div>
                            <div className="ms-3 items">
                                <NavLink className="items" to="/explore">Explore</NavLink>
                            </div>

                            <div className="ms-3 items">
                                {
                                    user.email &&
                                    <NavLink className="items" to="/dashboard">Dashboard</NavLink>

                                }
                            </div>
                            <div className="ms-3 items">

                                {
                                    user.email ? <NavLink className="items p-2" to="/dashboard/logout">Logout</NavLink>
                                        :
                                        <NavLink className="items p-2" to="/login">Log In</NavLink>
                                }
                                {/* <NavLink className="items" to="/login">Log In</NavLink> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <button className="items p-2" onClick={handleSignOut}>Log Out</button> */}
        </div>




    );
};

export default Navbar;