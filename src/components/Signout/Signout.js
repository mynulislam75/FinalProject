import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Signout = () => {
    const {handleSignOut}=useAuth();
    return (
        <div className="text-center">
            <h4>Wants to logout?</h4>
            <button onClick={handleSignOut}>Logout</button>
        </div>
    );
};

export default Signout;