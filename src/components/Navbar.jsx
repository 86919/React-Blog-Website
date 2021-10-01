import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <div className="nav-container">
            <Link to="/">
                <div className="logo-container">
                    <img className="logo-img" src={logo} alt="logo" />
                    <h2 className="logo-text">A Blog</h2>
                </div>
            </Link>

            <div className="nav-links">
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink to="/blog-posts" activeClassName="active">Blog Posts</NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink to="/support" activeClassName="active">Support</NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink to="/contact-me" activeClassName="active">Contact me</NavLink>
                    </li>
                </ul>

                <div className="buttons">
                    <Link to="/login">
                        <button className="btn btn-success">Login</button>
                    </Link>
                    <Link to="/register">
                        <button className="btn btn-primary">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar