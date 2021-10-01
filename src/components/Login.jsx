import React from 'react';

import loginImg from '../assets/login.svg';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-content">
                <h1 className="login-head">Login here</h1>

                <div className="login-form">
                    <div className="username-container">
                        <label htmlFor="username">Username:</label>
                        <input type="text" className="username" id="username" placeholder="Enter your username..." />
                    </div>
                    <div className="email-container">
                        <label className="email-label" htmlFor="email">Email:</label>
                        <input type="email" className="email" id="email" placeholder="Enter your email..." />
                    </div>
                    <div className="password-container">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="password" id="password" placeholder="Enter your password..." />
                    </div>

                    <div className="buttons-login">
                        <button className="btn btn-primary btn-login" id="loginBtn">Login</button>
                    </div>
                </div>
            </div>
            <div className="login-img">
                <img className="login-svg" src={loginImg} alt="login" />
            </div>
        </div>
    )
}

export default Login
