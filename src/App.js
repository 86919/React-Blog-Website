import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css'
import { Navbar, Homepage, BlogPosts, Support, Contact, SignUp, Login } from './components';

function App() {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <div className="routes">
                    <Switch>
                        <Route exact path="/">
                            <Homepage />
                        </Route>

                        <Route path="/blog-posts">
                            <BlogPosts />
                        </Route>

                        <Route path="/support">
                            <Support />
                        </Route>

                        <Route path="/contact-me">
                            <Contact />
                        </Route>
                    </Switch>
                </div>
            </div>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/register">
                    <SignUp />
                </Route>
            </Switch>
        </div>
    )
}

export default App
