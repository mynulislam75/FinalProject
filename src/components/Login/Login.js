import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { user, handleEmail, handlePassword, handleResigterWithEmail, handleLoginWithEmail,handleToggle, isLogin, handleRegistrationOrLogin } = useAuth();
    // const{handleEmail,handlePassword}=useFirebase();
    return (
        <div className="login-form ">

            <form className="form-container container" onSubmit={handleRegistrationOrLogin}>

                <div className="form-container text-center">
                    <h2>Please {isLogin ? 'Resigter' : 'Login'}</h2>
                    
                    <input onBlur={handleEmail} type="text" name="email" className="input-feild" placeholder="Enter Your Email" id="" />
                    <br />
                    
                    <input onBlur={handlePassword} type="password" name="" className="input-feild" placeholder="Enter your Password" id="" />
                    <br />
                    <button className="btn-warning" type="submit">
                        {isLogin ? 'Register' : 'Login'}
                    </button>
                    <div>
                        <input onChange={handleToggle} class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Create new account?
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;