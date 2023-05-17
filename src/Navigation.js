import React from 'react';

export function NavBar() {
  return (
    <nav>
      <a href="index.html"><span aria-label="Home"><img src="img/beatbuds.png" alt="logo"></img></span></a>
      <div className="nav-right">
        <a href="newpost.html" id="addPost">New Post</a>
        <a id="accountButton" onclick="accountDirect()"><img src="img/default_account_logo.png" alt="Login"></img></a>
      </div>
    </nav>
  );
}