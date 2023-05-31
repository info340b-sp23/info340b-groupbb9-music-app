import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavBar() {
  return (
    <nav>
      <span aria-label="Home"><NavLink to="/home"><img src="img/beatbuds.png" alt="logo"></img></NavLink></span>
      <a href="index.html"></a>
      <div className="nav-right">
        <NavLink to="/newPost">New Post</NavLink>
        <NavLink to="/profile"><img src="img/default_account_logo.png" alt="Login"></img></NavLink>{/*<a id="accountButton" onclick="accountDirect()"></a>*/}
      </div>
    </nav>
  );
}