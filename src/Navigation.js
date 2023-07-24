import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavBar() {
    return (
        <nav>
            <div className="nav-left">
            <span aria-label="Home"><NavLink to="/home"><img src="img/icon.png" alt="logo"></img></NavLink></span>
            <a href="index.html"></a>
            </div>

            <div className="nav_right">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/create-post">Create Post</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </nav>
    );
}
