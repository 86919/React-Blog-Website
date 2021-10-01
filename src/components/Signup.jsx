import React from 'react';

import signUpImg from '../assets/signUp.svg';

const Signup = () => {
    return (
        <div className="signUp-container">
            <div className="signUp-content">
                <h1 className="signUp-head">Sign up here</h1>

                <div className="signUp-form">
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

                    <div className="buttons-signUp">
                        <button className="btn btn-primary btn-login" id="signUpBtn">Sign up</button>
                    </div>
                </div>
            </div>
            <div className="signUp-img">
                <img className="signUp-svg" src={signUpImg} alt="signUp" />
            </div>
        </div>
    )
}

export default Signup
